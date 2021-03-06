var batch = require('gulp-batch');
var browsersync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var less = require('gulp-less');
var lessplugin_autoprefix = require('less-plugin-autoprefix');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');
//var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var yargs = require('yargs');

var argv = yargs.argv;
var autoprefix = new lessplugin_autoprefix({ browsers: ['last 1 version', '> 0.5%'] });
var browsersync_instance = browsersync.create();

gulp.task('less', function(done) {
	return gulp.src('./less/*.less')
		.pipe(plumber({
			errorHandler: function (err) {
				done(err);
			}
		}))
		//.pipe(sourcemaps.init())
		.pipe(less({
			plugins: [autoprefix]
		}))
		//.pipe(cleanCSS())
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/build/css'));
});

gulp.task('browser-sync', function() {
	browsersync_instance.init({
		server: './public/',
		ui: false,
		open: argv.open,
		files: ['./public/*.html', './public/build/css/**/*'],
		startPath: '/',
		notify: false
	});
});

gulp.task('watch', function() {
	watch(['./less/**/*.less'], batch(function (events, done) {
		gulp.start('less', done);
	}));
});

gulp.task('build', ['less']);

gulp.task('dev', ['build', 'browser-sync', 'watch']);

gulp.task('default', ['dev']);