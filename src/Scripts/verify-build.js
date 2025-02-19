import fs from 'fs';
import path from 'path';

const DIST_DIR = 'dist';
const REQUIRED_FILES = [
  'index.html',
  'assets',
  'game.js'
];

function verifyBuild() {
  console.log('Verifying build output...');

  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error('Distribution directory not found!');
  }

  // Check for required files
  for (const file of REQUIRED_FILES) {
    const filePath = path.join(DIST_DIR, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required file/directory not found: ${file}`);
    }
  }

  // Check index.html content
  const indexContent = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
  if (!indexContent.includes('game')) {
    throw new Error('Game container div not found in index.html');
  }

  // Verify JavaScript bundle
  const jsFiles = fs.readdirSync(DIST_DIR).filter(file => file.endsWith('.js'));
  if (jsFiles.length === 0) {
    throw new Error('No JavaScript bundles found in build output');
  }

  // Check bundle size
  const mainBundle = fs.statSync(path.join(DIST_DIR, jsFiles[0]));
  if (mainBundle.size < 1000) { // Arbitrary minimum size
    throw new Error('Main bundle seems too small, possible build issue');
  }

  console.log('Build verification passed! ✅');
  process.exit(0);
}

try {
  verifyBuild();
} catch (error) {
  console.error('Build verification failed! ❌');
  console.error(error.message);
  process.exit(1);
}