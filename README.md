# my-app-backend
This project contains the backend api development for My App
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
## Introduction

This project mainly have three apis which save user data into a MongoDB database. It has only User model which hold the necessary attribute types for a user. 

## Features

Following APIs have been implemented under this projects

- Get get user by id /api/user

- POST add user /api/user

- PUT update user /api/user

## Installation

- Clone the repository: `git clone https://github.com/SandamalIsuru/my-app-backend.git`

- Navigate to the project directory: `cd my-app-backend`

- Run fullowing command to install necessary npm modules

`npm install`

- create .env file and add following env variables in .env file. 

DB_URI=<MONGODB_URL>
PORT=<PORT>

- Run fullowing command to run the project in locally

`node src/app.js`


