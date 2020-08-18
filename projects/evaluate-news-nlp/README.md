# Evaluate a news article with Natural Language Processing


## Table of Contents

* [Project Instructions](#project_instructions)
* [Getting started](##getting_started)
* [Setting up the API](##Setting_up_the_API)
* [After the API](###After_the_API)



# Project Instructions

This project contains starter code. 

The goal of this project is to  practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls



> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.


## Getting started

 Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet.  So, fork Udacity repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

Use MeaningCloud API. https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1
Register and you'll get License Key.
Use environment variables to store your key.
The environment variables only belong to your local system and won't be visible when you push your code to a different environment like Github. Follow the steps below to configure environment variables:

- Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file
- Create a new .env file in the root of your project.
Fill the .env file with your API keys like this:
API_KEY=**************************
- Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```

- If you want to refer the environment variables, try putting a prefix process.env. in front of the variable name in the server/index.js file, an example might look like this:
console.log(`Your API key is ${process.env.API_KEY}`);


## After the API

Once you are hooked up to the API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work
- Go back to the web pack config and add the setup for service workers. 
- Test that the site is now available even when you stop your local server
