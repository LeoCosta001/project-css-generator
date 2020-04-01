/* ##### Compilação de arquivos .scss para .css com "gulp-sass" #####
- Compilação manual.
- Compilação automática.
- Apagar diretório de destino de compilação.
- Compilação automática junto com o Nodemon. */

"use strict";
const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
sass.compiler = require('node-sass');

// ##### Compilação manual
gulp.task('compilation', gulp.series(compilation));

// ##### Compilação automática
// Observa alterações de arquivos do diretório 'src/scss' e recompila
gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series(compilation));
});

// ##### Apagando diretório de origem
gulp.task('clean', gulp.series(clean));

async function clean() {
    await del(['./public/css/**']);
};

// ##### Compilação automática junto com o Nodemon
gulp.task('dev', () => {
    nodemon({
        script: 'app.js',
        tasks: ['compilation']
    })
        .on('start', ['compilation'])
        .on('restart', () => {
            console.log('Restarting server')
        });
});

// ##### Configurações de compilação
async function compilation() {
    // Deletar arquivos do diretório antes de compilar
    await del(['./public/css/**']);

    // Criar a compilação
    return gulp

        // "src/scss" = Diretório de busca
        // "/** /" = Procurar em todas as sub-pastas
        // "/*.scss/" = Procura por arquivos com extenções .scss*/
        .src('./src/scss/views/**/*.scss')

        // Converte Sass para CSS com Gulp
        .pipe(sass().on('error', sass.logError))

        // Diretório para onde será enviado o arquivo compilado
        .pipe(gulp.dest('public/css'))
};
