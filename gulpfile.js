var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pump = require('pump');
var connect = require("gulp-connect");

var devDir = 'dev';

gulp.task('build', function(cb) {
	return pump([
			gulp.src('index.js'),
			uglify(),
			gulp.dest('lib')
		],
		cb
	);
});

gulp.task('dev:create-index-html', function() {
  return gulp.src('index.html')
    .pipe(htmlreplace({
      nr: {
        src: gulp.src('index.js'),
        tpl: '<script type="text/javascript">%s</script>'
      }
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(devDir + '/'))
    .pipe(connect.reload());
});

gulp.task('dev:watch', function() {
  return gulp.watch('index.(js|html)', gulp.series('dev:create-index-html'));
});

gulp.task('dev:server', function () {
  return connect.server({
    root: './' + devDir,
    livereload: true
  });
});

gulp.task('dev', gulp.parallel('dev:server', 'dev:create-index-html', 'dev:watch'));
