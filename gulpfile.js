const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.task('cripto', function(){
gulp.src('src/*.js')
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('dist'));
});