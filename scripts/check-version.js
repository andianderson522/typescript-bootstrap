// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const nvmVersion = fs.readFileSync('.nvmrc').toString().trim();
const desired = `v${nvmVersion}`;
const running = process.version;

if (!running.startsWith(desired)) {
  // eslint-disable-next-line no-console
  console.error(
    `You are running Node ${running} but version ${desired} is expected. ` +
      `Use nvm or another version manager to install ${desired}, and then activate it.`
  );
  process.exit(1);
}
