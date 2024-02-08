# Cost Tracker App

This is a Node.js application for tracking costs. It allows users to add, retrieve, and manage their expenses.

## Features

- Add a new cost with details such as user ID, year, month, day, description, category, and sum.
- Retrieve reports of costs based on user ID, year, and month.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/boaz1e/cost-tracker-app.git
```

2. Install dependencies:

```bash
cd cost-tracker-app
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory of the project and define the following environment variables:
MONGODB_URI=mongodb://localhost:27017/cost-tracker

Replace `mongodb://localhost:27017/cost-tracker` with your MongoDB connection URI.

4. Start the server:
   nodemon index.js

The server will start running on `http://localhost:3000`.

## API Endpoints

- `GET /costs/report`: Retrieve a report of costs based on user ID, year, and month.
- `POST /costs/add`: Add a new cost.

## Dependencies

- Express.js: Web framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- dotenv: Module for loading environment variables from a `.env` file.
- body-parser: Middleware for parsing request bodies.
