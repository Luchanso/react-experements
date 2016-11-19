const gulp = require('gulp')
// const babel = require("gulp-babel")
const connect = require('gulp-connect')
const watch = require('gulp-watch')

gulp.task('connect', () => {
  connect.server({
    port: 8080,
    livereload: true,
    root: '.'
  })
})

gulp.task('watch', () => {
  watch('*', () => {
    gulp.src('*')
      .pipe(connect.reload())
  })
})

gulp.task('js', () => {
  gulp.src(src)
   .pipe(babel({
     "presets": ["react", "latest"]
   }))
   .on('error', err => {
     console.error('Error in compress task', err.toString())
   })
})

gulp.task('default', ['connect', 'watch'])
