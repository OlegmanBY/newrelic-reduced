var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var webserver = require('gulp-webserver');
var rename = require("gulp-rename");

gulp.task('build', function() {
  gulp.src('tmpl.html')
    .pipe(htmlreplace({
      nr: {
        src: gulp.src('index.js'),
        tpl: '<script type="text/javascript">%s</script>'
      }
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('build/'));
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html',
    }));
});
