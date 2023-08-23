const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUsers, getThoughts, getThoughtReactions } = require('./data');

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

  // get some random-generated data from data.js for seeding
  const users = getUsers();
  const thoughts = getThoughts();

  // create 18 thoughts
  await Thought.collection.insertMany(thoughts);

  // create 18 users  (will give user one thought and one friend later, after users are created)
  for (let i = 0; i < 18; i++) {
    await User.collection.insertOne({
      username: users[i].username,
      email: users[i].email,
    });
  }

  for (let i = 0; i < 18; i++) {
    // Ensure randomly selected username points to a valid user (this becomes the 'friend')
    const friend = await User.findOne({ "username": users[(17 - i)].username });
    // Assign username to thought plus give it 3 random reactions
    const userThought = await Thought.findOneAndUpdate({ "thoughtText": thoughts[i].thoughtText },
        { username: users[i].username,
          reactions: [...getThoughtReactions(3)] }
      );

    // Assign each user to have one User friend (cannot be themselves) and one Thought
    const user = await User.findOneAndUpdate({ "username": users[i].username },
        { $addToSet: { thoughts: userThought._id, friends: friend._id } }
        );
  }
  
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
