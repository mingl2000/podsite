#!/usr/bin/env node

/**
 * copy-build-output.js
 * Copies Next.js build output from .next/out to dist/
 * Since we use 'output: export' in next.config.js, the static files are in .next/out
 */

const fs = require('fs');
const path = require('path');

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const dstPath = path.join(dst, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  });
}

const srcDir = path.join(process.cwd(), '.next', 'out');
const dstDir = path.join(process.cwd(), 'dist');

if (!fs.existsSync(srcDir)) {
  console.error(`ERROR: Build output directory not found at ${srcDir}`);
  process.exit(1);
}

try {
  console.log(`Copying ${srcDir} to ${dstDir}...`);
  copyDir(srcDir, dstDir);
  console.log(`✓ Static files copied to ${dstDir}`);
  process.exit(0);
} catch (err) {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
}
