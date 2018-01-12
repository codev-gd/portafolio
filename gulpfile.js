const gulp = require( 'gulp');
const sass = require( 'gulp-sass');
const pug  = require('gulp-pug');
const notify = require('gulp-notify');
const imagemin = require( 'gulp-imagemin');
const browserSync = require('browser-sync').create()




// -- Tarea para ejecutar el servidor local
gulp.task('serve',['sass-watch','pug-watch'], () => {
    browserSync.init({
        server: "./",
        port: 4000
    });


    // gulp.watch("./js/*.js").on("change",browserSync.reload);
    gulp.watch("./js/*.js").on("change",browserSync.reload);
    gulp.watch("./*.html").on("change",browserSync.reload);
    gulp.watch("./css/*.css").on("change",browserSync.reload);
})


// -- Tarea para ejecutar la compilacion de scss a css
gulp.task('sass',() => {

        gulp.src('./src/sass/estilos.scss')
                    .pipe(sass({

                    })).on('error',sass.logError)
                    .pipe(gulp.dest('./css'))
                    .pipe(browserSync.stream())
})

// -- Tarea para ejecutar la visualización de cambios de sass -scss
gulp.task('sass-watch', () => {
    gulp.watch('./src/sass/estilos.scss', ['sass']);
})


// -- Tarea para usar PUG - preprocesador de html
gulp.task('pug', () => {
    gulp.src('./src/pug/*.pug')
            .pipe(pug({
                //pretty: true
                //pretty ya no se debe usar porq esta obsoleto
                // es para ver el codigo html ordenado
            })).on ('error', notify.onError(function(error){
                return `Un error ha ocurrido en la compilación de pug.
                        Mirrar en la consola para mas detalles ${error}`;
            }))
            .pipe(gulp.dest('./'))
})



// -- Tarea para ejecutar la visualización de cambios de pug 
gulp.task('pug-watch',() => {
    gulp.watch('./src/pug/*.pug',['pug'])
})

/* USANDO IMAGEMIN */

gulp.task('comprimirImgs', () => {
    gulp.src('./imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/imagenes'))
})


