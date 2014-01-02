'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /.*\.spec\.js$/.test(file);
}).map(function(file){
  return file.replace(/^\/base\/|\.js$/g,'');
});

require.config({
  baseUrl: '/base',

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start

});
