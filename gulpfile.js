const { dest, series, src } = require('gulp');
const fs = require("fs");
const jsdoc2md = require('jsdoc-to-markdown');

function document() {
  return jsdoc2md.render({ files: './Utils/*.js' }).then(output => fs.writeFileSync('api.md', output));
}

exports.document = series(document);

exports.default = series(document);
