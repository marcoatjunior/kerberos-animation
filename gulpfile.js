var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('assets/sass/style.scss').pipe(sass({includePaths: ['scss']})).pipe(gulp.dest('assets/css'));
    gulp.watch("assets/sass/*.scss",['sass']);
});