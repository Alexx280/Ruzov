var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    less = require ('gulp-less'),
    concat = require ('gulp-concat'),
    uglify = require ('gulp-uglifyjs'),
    cssnano = require ('gulp-cssnano'),
    rename = require ('gulp-rename'),
    browserSync = require ('browser-sync');

gulp.task('sass',  function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});
gulp.task('scripts', function(){
    return gulp.src([
        'js/jquery.js',
        'js/vidjet.js',
        'js/my_code.js'])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});
gulp.task('css-libs', ['less'], function(){
    return gulp.src('style.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(''))
});
gulp.task('less', function(){
    return gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(''))
        /*.pipe(browserSync.reload({
            stream:true
        }))*/
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false
    })
});

//gulp.task('watch', ['browserSync', 'css-libs', 'scripts'],function(){
  //  gulp.watch('app/sass/**/*.sass', ['sass'])
  //  gulp.watch('*.less', browserSync.reload)
    //gulp.watch('*.less', ['less'], browserSync.reload)
  //  gulp.watch('*.html', browserSync.reload)
  //  gulp.watch('js/**/*.js', browserSync.reload)
//});
gulp.task('watch', ['css-libs', 'scripts'],function(){
    //gulp.watch('app/sass/**/*.sass', ['sass'])
    //gulp.watch('*.less')
    gulp.watch('*.less', ['less'])
    gulp.watch('Tamplate/*.less', ['less'])
    gulp.watch('*.css', ['css-libs'])
    gulp.watch('*.html')
    gulp.watch('js/**/*.js', ['scripts'])
});
