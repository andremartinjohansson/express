Ramverk 2 Express
==============

[![Travis CI Build Status](https://api.travis-ci.org/andymartinj/express.svg?branch=master)](https://travis-ci.org/andymartinj/express)
[![Maintainability](https://api.codeclimate.com/v1/badges/20727a48a14c27f1ed48/maintainability)](https://codeclimate.com/github/andymartinj/express/maintainability)
[![BCH compliance](https://bettercodehub.com/edge/badge/andymartinj/express?branch=master)](https://bettercodehub.com/)
[![Scrutinizer](https://scrutinizer-ci.com/g/andymartinj/express/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/andymartinj/express/?branch=master)
[![Scrutinizer Build](https://scrutinizer-ci.com/g/andymartinj/express/badges/build.png?b=master)](https://scrutinizer-ci.com/g/andymartinj/express/?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/andymartinj/express/badge.svg?branch=master)](https://coveralls.io/github/andymartinj/express?branch=master)

This project uses the following:

* Express.js (server)
* Pug (client)
* MongoDB
* Socket.io
* Mocha
* Docker

All dependencies can be found in `package.json`

## Install

```
$ git clone https://github.com/andymartinj/express.git
$ cd express
```

## Setup with docker

```
// Setup all containers, express will run on port 3353.
$ docker-compose up -d
```

If you only want express and want it to work with the database:

```
$ docker-compose -up -d mongodb
$ docker-compose -up -d express
```

Easy peasy. Then you can access the website through `http://localhost:3353/`

**Note**: Default port is `3353`. You can edit the port in `docker-compose.yml`, under express then environment. *DBWEBB_PORT* is the webserver port. You can also change *DBWEBB_DSN*, if you want to use another database for example. By default it's `mongodb://mongodb:27017/cars`. But you better know what you're doing.

## Setup without docker

```
$ npm install
$ npm start
```

**Note**: You will need to install MongoDB on your system. To change which DSN to
connect to with MongoDB, set environment variable *DBWEBB_DSN*. Default DSN is `mongodb://localhost:27017/cars`.

**Note**: The default port is 1337. To change it, you need to set environment variable
*DBWEBB_PORT*. Example, to set port to 3353:

```
$ export DBWEBB_PORT=3353
```

## Testing

```
$ make test
$ npm test
```

## Testing in docker

```
$ make test1
$ make test2
$ make test3
```
