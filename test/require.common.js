var BOWER_DIR = '../bower_components';

require.config({
  paths: {
    underscore: BOWER_DIR + '/underscore/underscore'
  },

  packages: [
    {name: 'guido', location: 'src'}
  ],

  shim: {
    'underscore': {
      deps: [],
      exports: '_'
    },
  }
});
