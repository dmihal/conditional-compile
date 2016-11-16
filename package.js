Package.describe({
  name: 'dmihal:conditional-compile',
  version: '0.0.2',
  summary: 'Meteor package for conditionally including files for compilation',
  git: 'https://github.com/dmihal/conditional-compile.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
  name: 'conditional-compile',
  use: ['ecmascript@0.4.0'],
  sources: [
    'conditional-compile.js',
    'compiler.js',
  ],
});
