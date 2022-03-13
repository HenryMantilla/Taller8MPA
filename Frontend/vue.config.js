module.exports = {
    pages:{
        'usuario':{
            entry: './src/pages/usuario/main.js',
            template: '/index.html',
            title: 'Usuario',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'documento':{
            entry: './src/pages/documento/main.js',
            template: '/index.html',
            title: 'Documento',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}