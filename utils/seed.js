const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUsers, getThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = getUsers();
  const thoughts = getThoughts();

  // create the 18 thoughts
  await Thought.collection.insertMany(thoughts);

  // create 18 users  (will add thoughts and friends in next step, after users are created)
  for (let i = 0; i < 18; i++) {
    await User.collection.insertOne({
      username: users[i].username,
      email: users[i].email,
      // thoughts: thoughts[i],
    });
  }

  for (let i = 0; i < 18; i++) {
    // Ensure the friend obj id is valid
    const friend = await User.findOne({ "username": users[(17 - i)].username });
    // Assign the correct user.username to thought.username
    const userThought = await Thought.findOneAndUpdate({ "thoughtText": thoughts[i].thoughtText },
        { username: users[i].username},
        // { createdAt: this.createdAtFormatted }
      );

    // tried to update createdAt to formatted string, like in demo
// await Thought.findByIdAndUpdate(userThought._id, { createdAt: userThought.createdAtFormatted.toISOString() }, {runValidators: false});
// userThought.createdAt = userThought.createdAtFormatted;
// await userThought.save();

    // Assign each user to have one User friend (cannot be themselves) and one thought
    const user = await User.findOneAndUpdate({ "username": users[i].username },
        { $addToSet: { thoughts: userThought._id, friends: friend._id } }
        );
  }
  
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
