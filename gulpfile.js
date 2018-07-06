var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var webserver = require('gulp-webserver');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('build', function(cb) {
	pump([
			gulp.src('index.js'),
			uglify(),
			gulp.dest('lib')
		],
		cb
	);
});

gulp.task('build:dev', function() {
  gulp.src('tmpl.html')
    .pipe(htmlreplace({
      nr: {
        src: gulp.src('index.js'),
        tpl: '<script type="text/javascript">%s</script>'
      }
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dev/'));
});

gulp.task('webserver', function() {
  gulp.src('dev')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});
