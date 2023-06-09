# Deploying the API

The API is the brain of GameQA. When users are playing the game and contributing data, the API controls the tasks, saves information to a database, communicates with Google, and so on. We recommend setting up the API prior to the app since the app relies so heavily on the API. Doing so will involve setting up a database, REDIS instance, SendGrid account, etc.

We will take you through the process, step-by-step, of downloading the API source code, connecting it to a database, and finally launching it in a production instance.

## Installing Dependancies

In order to get started, you will need to install all the required packages and dependencies required by the API. With-in the GameQA code base you will need to access the terminal and change directory into the API. Once you're there you can have the node package manager (npm) install all dependencies. 

**Note:** If you do not have [Node.js](https://nodejs.org/) installed you need to [install](https://nodejs.org/en/download) it first.

```
$ cd Localized_App/api
$ npm install
```

**Note:** Lastly, the API section depends on a few different 3rd party tools and services. These tools and services have user interfaces that might change over time. However, they have user interfaces which are relatively easy to navigate. So if you notice any changes to these interfaces, feel free to submit a pull request for the [Docs](https://github.com/gameqa/docs) repo (the one you're reading right now!) to help researchers and developers in the future.