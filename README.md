# Todo App

A simple and intuitive Todo application built with React, React-Bootstrap, and React Router, featuring local storage for persistent state management.

## Features

- Add, edit, and delete todos
- Persistent state management using local storage
- Responsive design with React-Bootstrap
- Error handling for non-existent routes

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArisLooi/todo-app.git
2. Navigate to the project directory:
    bash
    cd todo-app
3. Install the dependencies:
    bash
    npm install

## Usage
1. Start the development server:
    bash
    npm run dev
2. Open your browser and navigate to http://localhost:3000.

## Project Structure
todo-app/
├── contexts/
│   └── TodoContext.js
├── pages/
│   ├── AddTodo.jsx
│   ├── EditTodo.jsx
│   ├── ErrorPage.jsx
│   └── Home.jsx
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
├── eslint.config.js
└── .gitignore

## Functions
- Layout: Includes the navigation bar and an outlet for nested routes.
- App: Sets up the TodoContext and defines the routes for the application.
- AddTodo: Provides a form to add new todos.
- EditTodo: Provides a form to edit existing todos.
- ErrorPage: Displays a message for non-existent routes.
- Home: Displays the list of todos and provides options to edit or delete them.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgments
Thanks to all the developers who have contributed to open-source projects and made learning to code accessible to everyone.

Happy coding! 😊
