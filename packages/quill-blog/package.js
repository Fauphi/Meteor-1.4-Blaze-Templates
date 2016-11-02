Package.describe({
  name: 'attic-studio:quill-blog',
  // git: 'https://github.com/fauphi',
  summary: 'Simple blog with quill-editor.',
  version: '0.1.0'
});

Package.onUse(function (api) {
  // Npm.depends({});
  
  api.versionsFrom('1.4.1');

  api.use([
    'ecmascript',
    'es5-shim',
    'mongo',
    'templating',
    'reactive-var',
    'trever:quill',
    'aramk:quill',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'aldeed:autoform'
  ], 'client');

  api.addFiles([
    'blog.html',
    'blog.css',
    'blog.js',
    'edit-entry.html',
    'edit-entry.css',
    'edit-entry.js',
  ], 'client');

  api.addFiles([
    'blog-server.js',
  ], 'server');
});
