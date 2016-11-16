Plugin.registerCompiler({
  extensions: ["cond.js"],
}, function () {
  return new Compiler();
});
