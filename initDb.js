import db from './db.js';

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS survey (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    survey_name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS section (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    survey_id INTEGER NOT NULL,
    FOREIGN KEY (survey_id) REFERENCES survey(id)
  );

  CREATE TABLE IF NOT EXISTS question (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_text TEXT NOT NULL,
    section_id INTEGER NOT NULL,
    FOREIGN KEY (section_id) REFERENCES section(id)
  );

  CREATE TABLE IF NOT EXISTS option (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    option_text TEXT NOT NULL,
    weight INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    FOREIGN KEY (question_id) REFERENCES question(id)
  );
`);

console.log('Database tables created successfully!');
db.close();