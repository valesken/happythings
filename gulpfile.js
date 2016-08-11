var gulp = require('gulp');
var gulpNodemon = require('gulp-nodemon');
var gulpWatch = require('gulp-watch');
var gulpBabel = require('gulp-babel');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

// Compile all .jsx files in "views/" subdirectory to .js files
gulp.task('jsx', function() {
    return gulp.src(['app/**/*.jsx', 'app/**/*.js'])
               .pipe(gulpBabel())
               .pipe(gulp.dest('bin'));
});

gulp.task('client-scripts', ['jsx'], function() {
    return browserify('./bin/assets/js/index.js').bundle()
               .pipe(source('index.js'))
               .pipe(gulp.dest('bin/assets/js'));
});

// Watch for changes to .jsx file
gulp.task('watch-jsx', ['client-scripts'], function() {
    gulpWatch(['app/**/*.jsx', 'app/**/*.js'], function() {
        gulp.start('client-scripts');
    });
});

// 'node' task depends on 'jsx' task
// start the server
gulp.task('node', ['watch-jsx'], function() {
    gulpNodemon({
        script: 'bin/server.js',
        ignore: ['gulpfile.js'],
        ext: 'jxt js'
    });
});

// default gulp task
gulp.task('default', function() {
    gulp.start('node');
});