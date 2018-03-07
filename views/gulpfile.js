"use strict";

const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
  //    pump = require('pump'),
  rename = require('gulp-rename');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//module.exports = {
//  plugins: [
//    new UglifyJsPlugin()
//  ]
//}

//WORKS BUT REMOVED FOR TROUBLESHOOTING minifyCss
//gulp.task("concatCss", function() {
//    return gulp.src([
//        'css/style.css',
//        'css/bootstrap-grid.css'
//        ])
//    .pipe(concat('app.css'))
//    .pipe(gulp.dest('css'));
//});

//TODO: Throws an error "cannot uglify JavaScript", does .js files but not .css files
//gulp.task("minifyCss", function(cb) {
//    return pump ([ gulp.src('css/style.css'),
//        UglifyJsPlugin(),
//        rename('style.min.css'),
//        gulp.dest('dist/css')
//    ],
//    cb
//  );
//});
    
gulp.task("minifyScripts", function() {
    return gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});

//TODO: rename each image with a separate min extension
gulp.task("imagemin", function () {
	return gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))//needed 'dist' added, showing error due to desktop.ini !?!
});

gulp.task("build", ["minifyScripts", "imagemin"], function() {
    return gulp.src(["css/app.min.css", "js/app.min.js", "images", "pizza.html"], { base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task("default", ["build"]);