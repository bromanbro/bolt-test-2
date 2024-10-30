import db from '../db.js';

export function createSection(title, surveyId) {
  const stmt = db.prepare('INSERT INTO section (title, survey_id) VALUES (?, ?)');
  return stmt.run(title, surveyId);
}

export function getSectionQuestions(sectionId) {
  const stmt = db.prepare(`
    SELECT q.*, json_group_array(json_object(
      'id', o.id,
      'text', o.option_text,
      'weight', o.weight
    )) as options
    FROM question q
    LEFT JOIN option o ON q.id = o.question_id
    WHERE q.section_id = ?
    GROUP BY q.id
  `);
  return stmt.all(sectionId);
}