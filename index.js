import { createSurvey, getSurveyById } from './models/Survey.js';
import { createSection } from './models/Section.js';
import { createQuestion } from './models/Question.js';
import { createOption } from './models/Option.js';
import db from './db.js';

try {
  // Create a new survey
  const survey = createSurvey('Employee Satisfaction Survey');
  const surveyId = survey.lastInsertRowid;

  // Create a section
  const section = createSection('Work Environment', surveyId);
  const sectionId = section.lastInsertRowid;

  // Create questions
  const question1 = createQuestion('How satisfied are you with your work-life balance?', sectionId);
  const question2 = createQuestion('Rate your workplace environment:', sectionId);

  // Create options for first question
  createOption('Very Satisfied', 5, question1.lastInsertRowid);
  createOption('Satisfied', 4, question1.lastInsertRowid);
  createOption('Neutral', 3, question1.lastInsertRowid);
  createOption('Dissatisfied', 2, question1.lastInsertRowid);
  createOption('Very Dissatisfied', 1, question1.lastInsertRowid);

  // Create options for second question
  createOption('Excellent', 5, question2.lastInsertRowid);
  createOption('Good', 4, question2.lastInsertRowid);
  createOption('Average', 3, question2.lastInsertRowid);
  createOption('Poor', 2, question2.lastInsertRowid);
  createOption('Very Poor', 1, question2.lastInsertRowid);

  // Retrieve the complete survey structure
  const completeSurvey = getSurveyById(surveyId);
  console.log('Complete Survey Structure:', JSON.stringify(completeSurvey, null, 2));

} catch (err) {
  console.error('Error:', err.message);
} finally {
  db.close();
}