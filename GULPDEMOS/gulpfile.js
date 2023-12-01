const gulp = require('gulp')
const jshint = require('gulp-jshint')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')


//gulp automation tasks
// gulp.task('gulp_jshint_old', function(done){
//     gulp.src('src/js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
//     done();
// });

//new syntex from gulp ver 4

function gulp_jshint(done){
    gulp.src('src/js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    done();
}
function gulp_jshint1(done){
    gulp.src('src/js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    done();
}
// exports.gulp_jshint1 = gulp_jshint1
// exports.default = gulp_jshint1

//multiple tasks at the same time - parallel/series
// exports.default = gulp.parallel([gulp_jshint,gulp_jshint1]);
// exports.default = gulp.series([gulp_jshint,gulp_jshint1]);


//gulp minify + rename css file
const styleSRC = './src/scss/style.css'
const styleDEST = './dist/css'

gulp.task('styles', function(done){
    gulp.src(styleSRC)
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(styleDEST))

    done()
})


gulp.task('minify-css', () => {
    return gulp.src(styleSRC)
      .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(styleDEST));
  });

