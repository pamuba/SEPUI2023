const gulp = require('gulp')
const jshint = require('gulp-jshint')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
//sass compiler is used by gulp-sass
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')


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
// const styleSRC = './src/scss/style.css'
// const styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest(styleDEST))

//     done()
// })


// gulp.task('minify-css', () => {
//     return gulp.src(styleSRC)
//       .pipe(cleanCSS({debug: true}, (details) => {
//         console.log(`${details.name}: ${details.stats.originalSize}`);
//         console.log(`${details.name}: ${details.stats.minifiedSize}`);
//       }))
//     .pipe(rename({suffix:'.min'}))
//     .pipe(gulp.dest(styleDEST));
//   });

//sass compile + minify + rename

// const styleSRC = './src/scss/style.scss'
// const styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//             outputStyle: 'compressed'
//         }))
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));

//     done();
// })

//sass compile + minify + rename + sourcemaps + autoprefixing
const styleSRC = './src/scss/style.scss'
const styleDEST = './dist/css'

gulp.task('styles', function(done){
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            cascade:false
        }))
        .pipe(cleanCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDEST));

    done()

})

//imagemin
const imgSRC = './src/images/pic2.jpg'
const imgDEST = './dist/images'

gulp.task('image', function(done){
    gulp.src(imgSRC)
        .pipe(imagemin(
            //imagemin.mozjpeg({quality: 80, progressive: true})
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ))
        .pipe(gulp.dest(imgDEST));

    done();
})


