# Installing Redis

Redis is an open source in-memory key-value store which sidesteps the need for slow disk reads. We use Redis to speed up the API and reduce load on the database. In the next few steps, we will install and run docker both locally (on your machine) for any local testing or development you will do.

## Installing Docker
The best way to run Redis locally is to use Docker to do so. If you do not already have Docker installed, here are installation instructions.

* **Mac OS:** [Installation Instructions](https://docs.docker.com/desktop/install/mac-install/)
* **Windows:** [Installation Instructions](`https://docs.docker.com/desktop/install/windows-install/)
* **Linux:** [Installation Instructions](`https://docs.docker.com/desktop/install/linux-install/)


## Running Redis Daemon
Once you've installed Docker you can use it to run Redis via the commandline. Make sure first, that you have docker running. Run the following shell command

```sh
$ sudo docker run -p 6379:6379 -it redis/redis-stack-server:latest
```

If successful, you will see a list of messages printed out in the console with the last one saying something along the lines of `* Ready to accept connections`. Now we can connect the API to Redis.

## Connectin API to Redis

### Locally

### On Heroku

## Testing connection
 🚧 🏗 🔨👷 We're still working on this!