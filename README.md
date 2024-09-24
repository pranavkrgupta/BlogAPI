# Personal Blog API

A RESTful API built with Node.js, Express, and MongoDB for managing articles in a personal blog. This API supports basic CRUD (Create, Read, Update, Delete) operations and allows filtering articles by tags and publishing date.

## Features

- **Create** a new article
- **Read** a list of all articles or a single article by ID
- **Update** an existing article by ID
- **Delete** an article by ID
- Filter articles by tags or publishing date

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing articles
- **Mongoose**: MongoDB ODM (Object Data Modeling)
- **Dotenv**: Manage environment variables

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (local instance or cloud service like MongoDB Atlas)

## Getting Started

Follow these steps to get the project running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/pranavkrgupta/BlogAPI.git
cd BlogAPI
```

### 2. Install Dependecies

```bash
npm install
```

### 3. Set up Environment Variables

Create a .env file in the root directory of the project and add the following variables:

```bash
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the server

```bash
node server.js
```

## Example requests - Blogging Platform API Requests

### 1. Create a New Article

**_Endpoint:_** `POST /api/articles`

**_Request Body:_**

```json
{
  "title": "Introduction to Node.js",
  "content": "Node.js is a runtime environment for JavaScript...",
  "tags": ["JavaScript", "Node.js", "Backend"]
}
```

### 2. Get All Articles (optional filters by tags or date)

**_Endpoint:_** `GET /api/articles?tags=JavaScript&date=2024-09-24`

### 3. Get a Single Article by ID

**_Endpoint:_** `GET /api/articles/:id`

### 4. Update an Article by ID

**_Endpoint:_** `PUT /api/articles/:id`

**_Request Body (fields to update):_**

```json
{
  "title": "Updated Title"
}
```

### 5. Delete an Article by ID

**_Endpoint:_** `DELETE /api/articles/:id`

## Project Structure

```bash
.
├── models           # MongoDB schemas and models
├── routes           # API route definitions
├── .env             # Environment variables
├── .gitignore       # Files to ignore in version control
├── README.md        # Project documentation
├── package.json     # Project dependencies and scripts
└── server.js        # Main server file
```
