Compiler = function(settings) {
  this.FILENAME_REGEX = /()/;

  this.pendingFiles = [];
  this.names = null;
  this.settingsFile = null;

  if (settings.filename) {
    this.settingsFile = settings.filename;
  } else {
    this.readSettings(settings.value);
  }
};


Compiler.prototype.processFilesForTarget = function(files) {
  var self = this;

  files.forEach(function(file) {

    // Check if this file is the settings file
    if (file.getBasename() == self.settingsFile) {
      var settings = JSON.parse(file.getContentsAsString());
      self.readSettings(settings);
      return;
    }

    // If the settings hasn't been loaded, delay processing
    if (!self.names) {
      self.pendingFiles.push(file);
      return;
    }

    self.processFile(file);
  });

  // Process all the delayed files, assuming settings has loaded
  this.pendingFiles.forEach(function(file) {
    self.processFile(file);
  });
};


Compiler.prototype.processFile = function(file) {
  var extensionIndex = file.getBasename().indexOf(file.getExtension());
  var filenamePrefix = file.getBasename().substr(0, extensionIndex - 1);

  if (this.names.indexOf(filenamePrefix) != -1){
    file.addJavaScript({
      data: file.getContentsAsString(),
      path: file.getPathInPackage()
    });
  }
};


Compiler.prototype.readSettings = function(settings) {
  this.names = settings.includeFiles || [];
};
