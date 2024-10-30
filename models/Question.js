import db from '../db.js';

export function createQuestion(questionText, sectionId) {
  const stmt = db.prepare('INSERT INTO question (question_text, section_id) VALUES (?, ?)');
  return stmt.run(questionText, sectionId);
}