const { dest, series, src } = require('gulp');
const fs = require("fs");
const jsdoc2md = require('jsdoc-to-markdown');

function document() {
  return jsdoc2md.render({ files: './Utils/*.js' }).then(output => {
        fs.readFile('./md/README.md',function(err, readme){
            const append = readme + output;
            fs.writeFileSync('README.md', append);
        });
    });
}

exports.document = series(document);

exports.default = series(document);
