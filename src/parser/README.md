Directions for building the guido parser module:

1. 'cd' into the directory that contains this README 
2. Run 'npm install'
3. Run 'node_modules/.bin/jison guido.jison.grammar guido.jison.lex -m amd -o guidoParser.js;'

The parser module file 'guidoParser.js' should be generated as an AMD-compatible module.
