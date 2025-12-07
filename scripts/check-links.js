#!/usr/bin/env node

/**
 * check-links.js
 * Checks for broken links in the static export directory (dist/)
 * Uses broken-link-checker package
 */

const blc = require('broken-link-checker');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist');

console.log(`Checking links in ${distPath}...`);

let brokenLinks = [];
let checkedLinks = 0;

const checker = new blc.SiteChecker(
  {
    filterLevel: 1,
  },
  {
    link: (result) => {
      checkedLinks++;
      if (!result.isValid) {
        brokenLinks.push({
          url: result.url.originalURL,
          status: result.http.statusCode,
          message: result.error.message,
        });
        console.error(`✗ ${result.url.originalURL} - ${result.http.statusCode || result.error.message}`);
      }
    },
    page: (result) => {
      console.log(`Checking ${result.url.originalURL}...`);
    },
    end: () => {
      console.log(`\n✓ Link check complete`);
      console.log(`  - Checked ${checkedLinks} links`);
      console.log(`  - Broken links: ${brokenLinks.length}`);

      if (brokenLinks.length > 0) {
        console.error('\nBroken links found:');
        brokenLinks.forEach((link) => {
          console.error(`  - ${link.url} (${link.status || link.message})`);
        });
        process.exit(1);
      }

      process.exit(0);
    },
  }
);

checker.enqueue(`file://${distPath}`);
