gulp = require 'gulp'
jade = require 'gulp-jade'
sass = require 'gulp-sass'

packageImporter = require 'node-sass-package-importer'

gulp.task 'jade', ->
    gulp.src(['src/html/**.jade', '!src/html/_**.jade'])
    .pipe jade()
    .pipe gulp.dest 'dist/'

gulp.task 'sass', ->
    gulp.src 'src/css/*.sass'
        .pipe sass({
            importer: packageImporter()
        })
        .pipe gulp.dest 'dist/css'
