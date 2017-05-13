const { start } = require('./build')
start({ port: 3331, onListen: () => console.log('passed-in handler') });