# Creating a Database

In order to run and use the API you will need to connect to a databse instance. This database will store all the data gathered by the users of the app. We use MongoDB in our deployment and recommend the same.


Here, we will walk you through the steps of creating a MongoDB instance and integrating it into the API.

## Sign Up for Atlas

You can start by registering for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register). Signing up is completely free and it offers both free and paid database options.

## Creating a Database

After logging into Atlas, the default view you'll see is `Databse Deployments`. You can access this website through the side-bar `Deployments > Database`. On this page there is a "Create" button. Click that button.

There are three options to choose from for your MongoDB setup: serverless, deticated, and shared. For our projects we have selected the shared option. It provides transparent pricing, and an easy way to back-up any data. Lastly, give your DB (cluster) an easy to remember name and press "Create Cluster". 

## Creating a User

In order to be able to connect your database to your localized API, you need to create a username and a password within Atlas. These credentials will be a part of the connection string provided to the API. Under `Security > Database Access`. click the "Add New Database User" button. 

In the form, choose "Password" as the authentication method and choose a username and password. Under the "Database User Privileges" section, select a "Built-in Role" and give the user access to "Read & Write to ay database". Below, you can restrict the access to the cluster (Database) you just created

## Connecting to the API
🚧 🏗 🔨👷 We're still working on this!

## Testing Connection
🚧 🏗 🔨👷 We're still working on this!