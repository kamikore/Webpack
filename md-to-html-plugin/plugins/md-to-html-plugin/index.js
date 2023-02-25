const {
    resolve
} = require('path')
const {
    readFileSync
} = require('fs')

const marked = require('marked')


const INNER_MARK = '<!--inner-->';

class MdToHtmlPlugin {

    constructor({
        template,
        filename
    }) {
        if (!template) throw new Error('The config for "template" must be configured')

        this.template = template;
        this.filename = filename ? filename : 'markdown';
    }

    apply(compiler) {
        compiler.hooks.emit.tap('md-to-html-plugin', compilation => {
            const _assets = compilation.assets;
            const _mdContent = readFileSync(this.template, 'utf-8');
            const _templateHtml = readFileSync(resolve(__dirname, 'template.html'), 'utf-8');
            console.log(_assets)
            console.log("mdContent :\n",_mdContent)

            _assets[this.filename] = {
                source() {
                    console.log(_templateHtml)  
                    const _parseHtml =  marked.parse(_mdContent, {
                        breaks: true
                    });
                    console.log("md -> html: \n",_parseHtml);
                    return _templateHtml.replace(INNER_MARK, _parseHtml);
                },
                size() {

                }
            }
        })


    }



}

module.exports = MdToHtmlPlugin;