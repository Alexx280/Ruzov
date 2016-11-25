var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    less = require ('gulp-less'),
    browserSync = require ('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});
gulp.task('less', function(){
    return gulp.src('app/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false
    })
});

gulp.task('watch', ['browserSync', 'sass', 'less'],function(){
    gulp.watch('app/sass/**/*.sass', ['sass'])
    gulp.watch('app/less/**/*.less', ['less'])
    gulp.watch('app/**/*.html', browserSync.reload)
    gulp.watch('app/js/**/*.js', browserSync.reload)
});
