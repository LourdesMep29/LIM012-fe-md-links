 const fetchMock = require ('fetch-mock')
const { optionValidate } = require('../src/validate.js')
 require('isomorphic-fetch')

    describe('Funcion para validar ruta de validate.js', () => {
        it ('Debe verificar los links y me va a devolver su href, text, file, statusText, status', () => {
          optionValidate('./prueba/hola.md')
              .then ((resolves) => expect (resolves).toEqual([
                            {
                              href: 'https://es.wikipedia.org/wiki/Markdown',
                              text: 'Markdown',
                              file: './prueba/hola.md',
                              statusText: 'ok',
                              status: 200
                            },
                            {
                              href: 'https://nodejs.org/en/',
                              text: 'Node.js',
                              file: './prueba/hola.md',
                              statusText: 'ok',
                              status: 200
                            },
                            {
                              href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452esssss',
                              text: 'mediumError',
                              file: './prueba/hola.md',
                              statusText: 'fail',
                              status: 404
                            }
                          ])
          )
          .catch((error) => done(error));
      });
})
