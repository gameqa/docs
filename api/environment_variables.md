
# Environment Variables

Now you've set up everything from your docker to the Google Programmable Search Engine you should have all the invormation to set up the required environment file for the API.

Setting up the environment file is the last step you need to perform in order to run the API, and ultimately deploy it.

<hr>

## File Structure

You can copy/paste the following ```.env``` file into the root of the API repository.
If you've followed the previous steps then you will have all the information necessary to fill this out. Here below, we have
a separate s #TODO:??

```

# local mongo instance
MONGODB_URI_LOCAL= ...

# production mongo instance
MONGODB_URI= ...

# jwt key
JWT_KEY= ...

# Sendgrid API key
SENDGRID_KEY= ...

# Port to listen on
PORT= ...

# Google cloud API keys for programmable search engine
GOOGLE_API_KEY= ...
GOOGLE_CX_KEY= ...

# REDIS URL
REDIS_URL=...

```

* ##### MONGODB_URI
    This is the connection string you received from the hosted Mongo DB instance you created.
Remember to include the username and password in the string.

* ##### MONGODB_URI_LOCAL 
    If you want to have a separate database instance for local development, you can create one and assign this environment variable
with that connection string. Otherwise, you can use the production database connection string here if you choose to do that.

* ##### JWT_KEY
    This is a secret that will be used to generate a [JSON Web Token](https://jwt.io/) that is used to authenticate users. You must make sure to keep this token safe and secure. Additionally, after deployment this value can never change. Any change to this secret will result in the server being unable to map the JWTs to user records. 

    The value of the ```JWT_KEY``` can be anything you want. We recommend that it be a long, random string of characters.

* ##### SENDGRID_KEY
    You obtained the Sendgrid API key in a previous step. This allows the API to trigger emails to be sent to users.

* ##### PORT
    It does not matter which port you run the application on, as long as that port is available. We, for example, ran GameQA during local development and testing on port 5000.

* ##### GOOGLE_API_KEY
    When you set up your search engine you should have gotten the Google API key, put it here.

* ##### GOOGLE_CX_KEY
    Visit your Programmable Search Engine portal. There you should find a link that looks something like ``` https://cse.google.com/cse?cx=GOOGLE_CX_KEY ```. Assign this environment value to that value.

* ##### REDIS_URL
    While setting up Redis you should have installed Docker and Redis on your computer. If you used
the typical Redis port then you can set this value to [redis://localhost:6379](redis://localhost:6379)