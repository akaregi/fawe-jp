import { src, dest } from 'gulp'
import concat from 'gulp-concat'

import { promises as fs } from 'fs'

// NOTE: @types/gulp-markdown はない
// TODO: d.ts を作るべきか？ しかし手間。
const markdown: any = require('gulp-markdown')

// FIXME: UNSTABLE! WHAT THE ASYNC F---
function build(done: () => any) {
    (async () => {
        src('markdown/*.md')
            .pipe(concat('all.md'))
            .pipe(dest('./docs/'))
            .pipe(markdown({
                breaks: true,
                smartypants: true
            }))
            .pipe(dest('./docs/'))

        const view = await fs.readFile('./views/index.html')
        const contents = await fs.readFile('./docs/all.html')

        const final = view.toString().replace('%DATA%', contents.toString())

        await fs.writeFile('docs/index.html', final);
    })();

    done()
}

exports.default = build;
