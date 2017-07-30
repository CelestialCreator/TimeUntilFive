var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');
var gulpFilter = require('gulp-filter');

var resDir = './res';

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('index.html', browserSync.reload);
	gulp.watch(resDir + '/sass/**/*.scss', ['sass']);
	gulp.watch(resDir + '/js/**/*.js', browserSync.reload);
});

gulp.task('sass', function() {
	return sass(resDir + '/sass/**/*.scss').on('error', sass.logError)
		.pipe(gulp.dest(resDir + '/css'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('concat-min-js', function() {
	var jsFilter = function(file) {
		var slashIndex = file.relative.lastIndexOf('\\') + 1;
		var fileName = file.relative.substring(slashIndex);
		return fileName.indexOf('_') !== 0;
	};

	return gulp.src(resDir + '/js/**/*.js')
		.pipe(gulpFilter(jsFilter, { passthrough: false }))
		.pipe(concat('dist.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
});

gulp.task('concat-min-css', function() {
	return gulp.src(resDir + '/css/*.css')
		.pipe(concat('dist.min.css'))
		.pipe(uglifyCss())
		.pipe(gulp.dest('dist'))
});

gulp.task('concat-min', ['concat-min-js', 'concat-min-css']);
