# The KEY demo App

This project was created as a practical showcase of frontend development skills, particularly focusing on integrating and displaying data from a GraphQL endpoint. It's a straightforward and earnest demonstration of modern web development techniques.

## Prerequisites

Before you can run this project, you need to have `pnpm` installed on your system. If you don't have `pnpm` installed, please follow the instructions on the [official pnpm installation guide](https://pnpm.io/installation).

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MjCage/the-key-demo.git
   cd the-key-demo
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

   This will install all necessary dependencies as defined in `package.json`.

3. **Create cypress.env.json file:**

   Create a file named `cypress.env.json` in the root directory of the project and add the following content:

   ```json
   {
   	"correct_email": "abc@example.com",
   	"correct_password": "xyz"
   }
   ```

   This file will be used by Cypress for end-to-end testing.

## Running the Project

To start the application, run the following command:

```sh
pnpm start
```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Running Tests

To run the tests for this project, you have a few options:

- **Unit Tests:**

  To run unit tests, execute the following command:

  ```sh
  pnpm test:unit
  ```

- **End-to-End Tests:**

  For running end-to-end tests with Cypress, use this command:

  ```sh
  pnpm test:e2e
  ```

- **All Tests:**

  If you want to run both unit and end-to-end tests, you can do so by running:

  ```sh
  pnpm test
  ```

## Running Tests

To build the app for production, run:

```sh
pnpm build
```

This command will bundle React in production mode and optimize the build for the best performance. The build is minified and the filenames include the hashes.
