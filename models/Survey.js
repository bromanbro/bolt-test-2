import db from '../db.js';

export function createSurvey(surveyName) {
  const stmt = db.prepare('INSERT INTO survey (survey_name) VALUES (?)');
  return stmt.run(surveyName);
}

export function getSurveyById(surveyId) {
  const survey = db.prepare(`
    SELECT id, survey_name 
    FROM survey 
    WHERE id = ?
  `).get(surveyId);

  if (!survey) return null;

  const sections = db.prepare(`
    SELECT id, title 
    FROM section 
    WHERE survey_id = ?
  `).all(surveyId);

  survey.sections = sections.map(section => {
    const questions = db.prepare(`
      SELECT id, question_text 
      FROM question 
      WHERE section_id = ?
    `).all(section.id);

    section.questions = questions.map(question => {
      const options = db.prepare(`
        SELECT id, option_text, weight 
        FROM option 
        WHERE question_id = ?
      `).all(question.id);

      question.options = options;
      return question;
    });

    return section;
  });

  return survey;
}