const { dest, series, src } = require('gulp');
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');
const fs = require("fs");
const jsdoc2md = require('jsdoc-to-markdown');

// documentation task - outputs documentation to README.md
function createdocumentation() {
  return jsdoc2md.render({ files: './Utils/*.js' }).then(output => {
        fs.readFile('./md/README.md',function(err, readme){
            const append = readme + output;
            fs.writeFileSync('README.md', append);
        });
    });
}

// lint task
function lint() {
  return src('./Utils/*.js')
    .pipe(eslint({
        configFile: 'eslintrc.js'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

exports.document = series(createdocumentation);

exports.lint = series(lint);

exports.default = series(lint, createdocumentation);
