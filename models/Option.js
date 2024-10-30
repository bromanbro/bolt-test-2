import db from '../db.js';

export function createOption(optionText, weight, questionId) {
  const stmt = db.prepare('INSERT INTO option (option_text, weight, question_id) VALUES (?, ?, ?)');
  return stmt.run(optionText, weight, questionId);
}