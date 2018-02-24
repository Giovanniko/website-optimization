const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


gulp.task('imagemin', () =>
    gulp.src('images/*')
        .pipe(imagemin())
		.pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest('images'))
);
		
		
/*gulp.task('jpgs', function() {
    return gulp.src('images/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('images'));
});*/