var SystemJS = require('systemjs/dist/system');

SystemJS.import("http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.js").then(mod => console.log(mod))
