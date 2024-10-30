#!/bin/bash
zip -r survey-app.zip \
  package.json \
  index.js \
  initDb.js \
  db.js \
  models/Survey.js \
  models/Section.js \
  models/Question.js \
  models/Option.js \
  README.md