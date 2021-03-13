/* requiring all the three dependencies gulp, gulp-sass, setting the compiler node-sass */
var {src, dest, watch, series} = require('gulp');
var sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');


/* creating our task ,
input will come from src folder, any sass file in folder .scss ,
 run sass compiler , 
 spit out results into css folder i.e. within distribution folder dist */
function makeCSS () {
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
    
};

function minifyCSS () {
    return src('dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css/minified_css'));

}

// exports.default = function() {
//     watch('src/*.scss', makeCSS);
//     watch('src/modules/*.scss', makeCSS);
// }

/* setting default task */
//exports.default = makeCSS;
//exports.default = minifyCSS;

exports.default = series (makeCSS, minifyCSS);

