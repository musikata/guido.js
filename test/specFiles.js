// We specify specs individually rather than by pattern.
// This makes it easier to switch between branches without
// confusing Karam with missing AMD dependencies.

// When adding, please maintain alphabetical order for readability.
var specFiles = [
  '/GuidoUtils.spec.js',
  // misc
  '/misc/Class.spec.js',
  '/misc/KF_List.spec.js',
  '/misc/KF_IList.spec.js',
  // abstract
  '/abstract/ARMusicalObject.spec.js',
  '/abstract/ARMusicalVoice.spec.js',
];

// Prefix specs with specsDir.
var specsDir = 'test/specs';
specFiles.forEach(function(specFile, i){
  specFiles[i] = {
    pattern: specsDir + specFile,
    watched: true,
    included: false
  };
});

exports.files = specFiles;
