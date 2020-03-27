const core = require('@actions/core');

try {
  core.setOutput("platform", process.platform);
  core.setOutput("arch", process.arch);
} catch (error) {
  core.setFailed(error.message);
}
