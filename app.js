// app.js - Startup script for Next.js on sPanel
const { spawn } = require('child_process');
const path = require('path');

const appDir = __dirname;
const port = process.env.PORT || 3000;

console.log('Starting Next.js application...');
console.log('Directory:', appDir);
console.log('Port:', port);

// Start Next.js production server
const nextServer = spawn('npm', ['start'], {
  cwd: appDir,
  env: { ...process.env, PORT: port },
  stdio: 'inherit'
});

nextServer.on('error', (error) => {
  console.error('Failed to start Next.js:', error);
  process.exit(1);
});

nextServer.on('exit', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  nextServer.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  nextServer.kill('SIGINT');
});
