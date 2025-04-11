#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const packageJson = require('../package.json');

// Define the CLI program
program
  .name('ftech-vue')
  .description('CLI tool for creating Vue projects with Quasar framework')
  .version(packageJson.version);

// Add the create command
program
  .command('create')
  .description('Create a new Vue project')
  .action(() => {
    // Run the create script
    require('./create');
  });

// Default command (for backward compatibility)
if (process.argv.length === 2) {
  require('./create');
} else {
  program.parse(process.argv);
}
