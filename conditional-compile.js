var settings = {
  value: null,
  filename: null,
};

if (process.env.METEOR_SETTINGS) {
  settings.value = JSON.parse(process.env.METEOR_SETTINGS);
} else {
  // If settings are not provided as an environment variable, check for a
  // settings file provided as a command line argument
  var settingsRegex = /--settings=([\w\d\._]+)/
  process.argv.forEach(function(arg) {
    var result = settingsRegex.exec(arg);
    if (result) {
      settings.filename = result[1];
    }
  });
}

Plugin.registerCompiler({
  extensions: ["cond.js"],
  filenames: settings.filename ? [settings.filename] : []
}, function () {
  return new Compiler(settings);
});
