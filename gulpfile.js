var gulp = require('gulp'),
    uglify = require('uglify'),
    minifyCss = require('gulp-clean-css'),
    useref = require('gulp-useref'),
    plumber = require('gulp-plumber'),
    gulpIf = require('gulp-if'),
    htmlmin = require('gulp-htmlmin'),
    responsive = require('gulp-responsive-images'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    jshint = require('gulp-jshint');

// Copy fonts to dist
gulp.task('fonts', function () {
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

// Copy default images to dist
gulp.task('images', function() {
    gulp.src('images/**/*')
        .pipe(gulp.dest('dist/images'));
});

// Concatenate js and css files, minifyies them and pushes them to dist directory 
gulp.task('useref', function() {
    gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest('dist'));
});

// Minifies Html
gulp.task('htmlmin', function() {
    gulp.src('dist/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});

// Removes old files before copying the new files.
gulp.task('clean', function() {
  return del(['dist/css', 'dist/js', 'dist/images']);
});


// Responsive task that change images resolution
gulp.task('responsive', function() {
    gulp.src('images/**/*')
        .pipe(responsive({

            '*.jpg': [
                {
                    width: 1600,
                    suffix: '-XL',
                    quality: 100
                },
                {
                    width: 1200,
                    suffix: '-L',
                    quality: 100
                },
                {
                    width: 800,
                    suffix: '-M',
                    quality: 100
                },
                {
                    width: 400,
                    suffix: '-S',
                    quality: 40
                },
                {
                    width: 40,
                    suffix: '-Logo',
                    quality: 100
                },
                {
                    width: 758,
                    height: 60,
                    suffix: '-Banner',
                    quality: 100
                }

            ],

            '*.png': [
                {
                    width: 1600,
                    suffix: '-XL',
                    quality: 100
                },
                {
                    width: 1200,
                    suffix: '-L',
                    quality: 100
                },
                {
                    width: 800,
                    suffix: '-M',
                    quality: 100
                },
                {
                    width: 400,
                    suffix: '-S',
                    quality: 40
                },
                {
                    width: 40,
                    suffix: '-Logo',
                    quality: 100
                },
                {
                    width: 758,
                    height: 60,
                    suffix: '-Banner',
                    quality: 100
                }]

        }))
        .pipe(gulp.dest('dist/images'));

});



// Watches when changes occur to reload them
gulp.task('watch', function() {

  // Starts the watch server
  livereload.listen();

  // Watch files in the dist folder
  gulp.watch(['dist/**']).on('change', livereload.changed);

});


// Default gulp
gulp.task('default', ['fonts', 'useref', 'responsive', 'images']);


// Reponsive task
gulp.task('responsive', [ 'responsive']);