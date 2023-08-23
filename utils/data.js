//I chose to create seed data for users, thoughts and reactions, that can be used for testing.

const names = [
  'Aaron',
  'Jacob',
  'Gail',
  'Marie',
  'David',
  'Chef42',
  'codeWarrior',
  'salsaDancer',
  'Jones',
  'Zhuo',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughtTextExamples = [
  'I find it hard to decide what to eat for dinner',
  'I am thankful for the Find My Phone function on the Apple Watch',
  'I am going to learn piano this year',
  'My favorite movie is the Star Wars series!',
  'I like Southpark. What is your favorite mall?',
  'Your favorite game is Monopoly',
  'I love watching movies',
  'I love coding and being a developer',
  'People are connected through Social Media Apps',
  'There are several good apps for taking notes',
  'I stated that customers can leave a message if they have any questions',
  'Teams messaging is quicker than Email',
  'Some people like to use a compass while hiking',
  'Apple TV has some great original shows',
  'What is your favorite Running app? Mine is the native apple watch fitness tracker',
  'There are so many Cooking apps',
  'There are a lot of fun card games. I like to play Poker and Hot rum',
  'Amazon has a one-time code to give to Delivery drivers so they can access your garage. I am unsure how secure this is.',
];

const possibleReactions = [
  'I love this!',
  'I hate this!',
  'I have had the same experience',
  'I agree',
  'My experience has been different',
  'I disagree',
  'I would like to tell you about my favorite',
  'I know several people who have had this experience',
  'I heard about this from a friend',
  'I am going to research this',
  'I have some documentation on this',
  'I do not know',
  'I have so many options, it is hard to decide',
  'There are not many options',
  'That is such a cool thought!',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  getRandomArrItem(names);

// Function to generate 18 users that we can add to the database. Will add thoughts and friends after they are created
const getUsers = () => {
  let results = [];
  for (let i = 0; i < 18; i++) {
    results.push({
      username: names[i],
      email: names[i] + '@email.com',
    });
  }
  return results;
};

// Function to generate 18 thoughts that we can add to the database. Includes thought reactions.
const getThoughts = () => {
  let results = [];
  for (let i = 0; i < 18; i++) {
    results.push({
      thoughtText: thoughtTextExamples[i],
      // username and reactions get assigned later
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getUsers, getThoughts, getThoughtReactions };
