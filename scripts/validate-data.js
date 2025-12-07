#!/usr/bin/env node

/**
 * validate-data.js
 * Validates data/episodes.json against the schema in specs/main/contracts/episodes.schema.json
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ajv = new Ajv();

const schemaPath = path.join(__dirname, '..', 'specs', 'main', 'contracts', 'episodes.schema.json');
const dataPath = path.join(__dirname, '..', 'data', 'episodes.json');

if (!fs.existsSync(schemaPath)) {
  console.error(`ERROR: Schema file not found at ${schemaPath}`);
  process.exit(1);
}

if (!fs.existsSync(dataPath)) {
  console.error(`ERROR: Data file not found at ${dataPath}`);
  process.exit(1);
}

try {
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  // Validate that data is an array
  if (!Array.isArray(data)) {
    console.error('ERROR: data/episodes.json must be an array');
    process.exit(1);
  }

  // Validate array length (must be exactly 20)
  if (data.length !== 20) {
    console.error(`ERROR: data/episodes.json must contain exactly 20 episodes, found ${data.length}`);
    process.exit(1);
  }

  // Validate each episode
  const validate = ajv.compile(schema);
  let hasErrors = false;

  data.forEach((episode, index) => {
    const valid = validate(episode);
    if (!valid) {
      hasErrors = true;
      console.error(`ERROR: Episode ${index + 1} (${episode.title || 'unknown'}) validation failed:`);
      validate.errors.forEach((err) => {
        console.error(`  - ${err.instancePath || 'root'}: ${err.message}`);
      });
    }
  });

  if (hasErrors) {
    process.exit(1);
  }

  console.log('✓ data/episodes.json validation passed');
  console.log(`  - 20 episodes validated`);
  process.exit(0);
} catch (err) {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
}
