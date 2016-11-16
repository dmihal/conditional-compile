fs = require('fs');

Compiler = function() {
  this.pendingFiles = [];
  this.names = null;

  var data = fs.readFileSync('./conditional-include.txt', 'utf8');
  this.names = data.split('\n').filter(function(line){
    return line.charAt(0) != '#';
  });
};


Compiler.prototype.processFilesForTarget = function(files) {
  var self = this;

  files.forEach(function(file) {
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
