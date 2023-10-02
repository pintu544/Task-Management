
# Node.js RESTful API for Todo App with JWT Authentication

This project is a Node.js based RESTful API that allows users to manage tasks in a TODO app. Users can create, read, update, and delete tasks. The API implements JWT authentication to secure the endpoints, ensuring that only authenticated users can perform CRUD operations on their tasks.

## Installation

To run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   cd TodoApi
   npm install
   ```

3. **Set environment variables:**

   Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
   PORT=8000
   MONGO_URI="mongodb://localhost:todoapi"
   JWT_SECRET=secretkey
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   You can now access the API at `http://localhost:8000`.

## Endpoints

### Authentication

#### Signup

- **Endpoint:** `POST /signup`

  [![image](https://www.linkpicture.com/q/Sign-Up.png)](https://www.linkpicture.com/view.php?img=LPic651a94006ccf51863587255)
  Creates a new user account.

  **Request Body:**

  ```json
  {
    "email": "johndoe@example.com",
    "password": "password",
    "role": "admin" or "user"
  }
  ```

  **Response:**

  ```json
  {
    "user": {
      "_id": "6158c8230a5f6ecb12345678",
      "email": "johndoe@example.com"
    },
    "token": "<jwt-token>"
  }
  ```

#### Signin

- **Endpoint:** `POST /signin`

  [![image](https://www.linkpicture.com/q/Sign-In_1.png)](https://www.linkpicture.com/view.php?img=LPic651a94006ccf51863587255)
  Logs in a user and returns a JWT token.

  **Request Body:**

  ```json
  {
    "email": "johndoe@example.com",
    "password": "password"
  }
  ```

  **Response:**

  ```json
  {
    "token": "<jwt-token>"
  }
  ```

### Tasks

#### Create Task

- **Endpoint:** `POST /create-todo`

  [![image](https://www.linkpicture.com/q/sCreate-Task.png)](https://www.linkpicture.com/view.php?img=LPic651a94006ccf51863587255)

  Creates a new task.

  **Request Body:**

  ```json
  {
    "taskName": "Task 1",
    "taskDescription": "Do something",
    "taskStatus": "pending"
  }
  ```

  **Response:**

  ```json
  {
    "_id": "6158c8230a5f6ecb12345679",
    "taskName": "Task 1",
    "taskDescription": "Do something",
    "taskStatus": "pending",
    "createdAt": "2023-04-22T10:55:50.177Z",
    "updatedAt": "2023-04-22T10:55:50.177Z",
    "__v": 0
  }
  ```

#### Get All Tasks

- **Endpoint:** `GET /todo`

  [![image](https://www.linkpicture.com/q/All-Task.png)](https://www.linkpicture.com/view.php?img=LPic651a94006ccf51863587255)

  Gets all tasks for the authenticated user.

  **Response:**

  ```json
  [
    {
      "_id": "6158c8230a5f6ecb12345679",
      "taskName": "Task 1",
      "taskDescription": "Do something",
      "taskStatus": "in progress",
      "createdAt": "2023-04-22T10:55:50.177Z",
      "updatedAt": "2023-04-22T10:55:50.177Z"
    },
    {
      "_id": "6158c8230a5f6ecb1234567a",
      "taskName": "Task 2",
      "taskDescription": "Do something else",
      "taskStatus": "completed",
      "createdAt": "2023-04-22T10:56:23.177Z",
      "updatedAt": "2023-04-22T10:56:23.177Z"
    }
  ]
  ```

#### Get Task by ID

- **Endpoint:** `GET /todo/:id`

  Gets a task by ID.

  **Response:**

  ```json
  {
    "_id": "6158c8230a5f6ecb12345679",
    "taskName": "Task 1",
    "taskDescription": "Do something",
    "taskStatus": "pending",
    "createdAt": "2023-04-22T10:55:50.177Z",
    "updatedAt": "2023-04-22T10:55:50.177Z"
  }
  ```

#### Update Task

- **Endpoint:** `PATCH /tasks/:id`

  [![image](https://www.linkpicture.com/q/sUpdate-Task.png)](https://www.linkpicture.com/view.php?img=LPic651a94006ccf51863587255)

  Updates a task by ID.

  **Request Body:**

  ```json
  {
    "description": "Do something else",
    "status": "completed"
  }
  ```

  **Response:**

  ```json
  {
    "_id": "6158c8230a5f6ecb12345679",
    "taskName": "New Task Name",
    "taskDescription": "Do something else",
    "taskStatus": "completed",
    "createdAt": "2023-04-22T10:55:50.177Z",
    "updatedAt": "2023-04-22T11:05:34.447Z"
  }
  ```

#### Delete Task

- **Endpoint:** `DELETE /todo/:id`

  [![image](https://www.linkpicture.com/q/sDelete-Task.png)](https://www.linkpicture.com/view.php?img=LPic651a94006ccf51863587255)

  Deletes a task by ID.

  **Response:**

  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

## Error Handling

The API returns appropriate HTTP status codes and error messages for various scenarios such as invalid input, unauthorized access, and server errors.

## Authentication

The API uses JWT authentication to secure the endpoints and ensure that only authenticated users can perform CRUD operations on their tasks.

## Additional Features Implemented

1. **Pagination:** The `GET /tasks` endpoint supports pagination using the `page` and `limit` query parameters.
2. **Filtering:** The `GET /tasks` endpoint supports filtering by task status using the `status` query parameter.

## Conclusion

This project demonstrates how to build a RESTful API with Node.js and Express, implement JWT authentication, and use MongoDB as the database. The API provides basic CRUD operations for tasks and includes additional features like pagination and filtering. Proper error handling and security measures are also implemented to ensure the API is robust and secure.
