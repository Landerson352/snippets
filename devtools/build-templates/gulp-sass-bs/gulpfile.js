var browsersync = require('browser-sync');
var compass = require('compass-importer');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var yargs = require('yargs');

var argv = yargs.argv;
var plugins = gulpLoadPlugins();
var browsersync_instance = browsersync.create();

gulp.task('sass', function(done) {
	return gulp
		.src([
			'./scss/styles.scss'
		])
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass({ importer: compass }).on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('./public/build'));
});

gulp.task('sass-min', function(done) {
	return gulp
		.src([
			'./scss/styles.scss'
		])
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer())
		.pipe(plugins.cleanCss())
		.pipe(gulp.dest('./public/build'));
});

gulp.task('browser-sync', function() {
	browsersync_instance.init({
		server: './public/',
		ui: false,
		open: argv.open,
		files: './public/**/*',
		startPath: '/',
		notify: false,
		ghostMode: false
	});
});

gulp.task('watch', function() {
	return gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('build', ['sass-min']);

gulp.task('dev', ['sass', 'browser-sync', 'watch']);

gulp.task('default', ['dev']);
