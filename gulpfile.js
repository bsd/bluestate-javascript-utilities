const { dest, series, src } = require('gulp');
const esdoc = require("gulp-esdoc");

function document() {
  return src('./Utils')
    .pipe(esdoc({ destination: "./docs" }));
}

exports.document = series(document);

exports.default = series(document);
