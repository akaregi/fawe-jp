gulp = require 'gulp'
jade = require 'gulp-jade'
sass = require 'gulp-sass'

concat          = require 'gulp-concat'
packageImporter = require 'node-sass-package-importer'

gulp.task 'jade', ->
    gulp.src(['src/html/**.jade', '!src/html/_**.jade'])
    .pipe jade()
    .pipe gulp.dest 'docs/'

gulp.task 'sass', ->
    gulp.src 'src/css/*.sass'
        .pipe sass({
            importer: packageImporter()
        })
        .pipe gulp.dest 'docs/css'

gulp.task 'md', ->
    gulp.src 'src/markdown/*.md'
        .pipe concat('markdown.md')
        .pipe gulp.dest 'docs/'
