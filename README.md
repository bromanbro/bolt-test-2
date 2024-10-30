# Survey Database Application

A Node.js application using better-sqlite3 for managing surveys, sections, questions, and options.

## Installation

1. Unzip the contents to a directory
2. Run `npm install` to install dependencies
3. Run `npm run init-db` to initialize the database
4. Run `npm start` to run the example survey creation

## Database Schema

- Survey: Stores survey information
- Section: Groups of questions belonging to a survey
- Question: Individual questions within a section
- Option: Possible answers for each question with weights

## Usage

The example in `index.js` demonstrates how to:
- Create a survey
- Add sections
- Add questions
- Add options
- Retrieve a complete survey structure