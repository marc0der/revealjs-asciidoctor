// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
var asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = {safe: 'safe', backend: 'revealjs'};
asciidoctor.convertFile('presentation.adoc', options);
