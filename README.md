# **Social Network API**

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## **Description**
  This API is for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This API uses MongoDB, which is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Users have a real-time count of friends, and thoughts have a count of reactions. When selecting data, the created date is formatted for readability.

  ## **Table of Contents:**
  * [Technology Used](#technology-used)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Social Network API walkthrough video](#social-network-api-walkthrough-video) 
  * [Test Cases](#test-cases)
  * [Credits](#credits)
  * [Contribute](#contribute)
  * [License](#license)
  * [Repository](#repository)
  * [Questions](#questions)

  ## **Technology Used**
  This API uses [Express.js](https://www.npmjs.com/package/express) for routing, a MongoDB database, and the [Mongoose](https://www.npmjs.com/package/mongoose) ODM.
  
  The developer provided seed data in the utils folder, for 18 users, 18 thoughts, and 3 reactions for each thought.  This API is not deployed, so a walkthrough video is provided, to demonstrated how the API functionality can be utilized.

  ## **Installation**
  To download the source code for this app, clone the [Social Network API GitHub repo](https://github.com/DonnaThompson7/Social-Network-API), then to start the app, on the command line, run `npm install`. This will create the node_modules directory in your current directory (if one doesnt exist yet) and will download the package to that directory. You can check to see if you already have node.js installed by running either the npm -v or the npm version command. Note:If there is no package.jsonfile in the local directory, the latest version of the package is installed. Then run `npm run seed` if you wish to use the seed data for testing, and run `npm start`. You can connect to Mongodb Compass to view your data in the database, **socialNetworkDB**.

  ## **Usage**
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database. I am also able to remove a user's associated thoughts when deleted.
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

  ## **Social Network API walkthrough video**
 [Social Network API walkthrough video](https://drive.google.com/file/d/1sd0DZ71WP5YB_F7cxTcQ1N4MVcCdgwWv/view)

  ## **Test Cases**
  Start the app on localhost. 
  
  Test in Insomnia:

  * GET routes to return all users and all thoughts.

  * GET routes to return a single user and a single thought.
 
  * POST, PUT, and DELETE routes for users.
 
  * POST, PUT, and DELETE routes for thoughts.

  * POST and DELETE routes for a user’s friend list.

  * POST and DELETE routes for reactions to thoughts.
 

  ## **Credits**
  Donna Thompson, developer

  ## **Contribute**
  If you would like to contribute to this app, please follow the guidelines of The Contributor Covenant (found here https://www.contributor-covenant.org/version/2/1/code_of_conduct/ ). Submit contributions to the email below.

  ## **License**
Licensed under [The MIT License](https://opensource.org/licenses/MIT).

  ## **Repository** 
  [Repo: github.com/DonnaThompson7/Social-Network-API](https://github.com/DonnaThompson7/Social-Network-API)

  ## **Questions**
  Please visit my GitHub profile at https://github.com/https://github.com/DonnaThompson7 <br /> Contact me at dlthompson7@icloud.com to report issues, contribute, or if you have additional questions.
