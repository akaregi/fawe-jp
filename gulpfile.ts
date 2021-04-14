import { src, dest } from 'gulp'
import concat from 'gulp-concat'

import { promises as fs } from 'fs'

// NOTE: @types/gulp-markdown はない
// TODO: d.ts を作るべきか？ しかし手間。
const markdown: any = require('gulp-markdown')

function build(done: () => any) {
    (async () => {
        src('docs/*.md')
            .pipe(concat('all.md'))
            .pipe(dest('./dist/'))
            .pipe(markdown({
                breaks: true,
                smartypants: true
            }))
            .pipe(dest('./dist/'))

        const view = (await fs.readFile('./views/index.html')).toString()
        const contents = (await fs.readFile('./dist/all.html')).toString()

        const final = view.replace('%DATA%', contents)

        await fs.writeFile('dist/index.html', final);
    })();

    done()
}

exports.default = build;
