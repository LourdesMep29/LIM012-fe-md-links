const { extractLinkFile } = require ('./index.js');
const { optionValidate } = require ('./validate.js');

const mdLinks = (route, options = { optionValidate : false}) => {
    return promesa = new Promise ((result) => {
        if (options.validate === true ) {
            result (optionValidate(route))
        } else {
            result (extractLinkFile(route))
        }
    });
}

//mdLinks(('./prueba/subPrueba/book1.md'), { validate : true}).then((res) => console.log('mdLinks',res));



module.exports = {mdLinks};