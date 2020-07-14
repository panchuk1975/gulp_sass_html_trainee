const gulp = require("gulp"), //without duble let
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  rename = require("gulp-rename");

// Tasks for work with scss files and css files
gulp.task("scss", function () {
  return gulp
    .src("app/scss/**/*.scss") //get all scss and
    .pipe(sass({ outputStyle: "compressed" })) //make plagin sas from method pipe to all scss
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app/css")) //destinaton folder for css
    .pipe(browserSync.reload({ stream: true }));
});

// Tasks for html files
gulp.task("html", function () {
  //Lets find all html files
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

// Tasks for main.js
gulp.task("script", function () {
  //Lets find all js files
  return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
});

// Tasks for js
gulp.task("js", function () {
  return gulp
    .src([
      "node_modules/slick-carousel/slick/slick.js",
      "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
});

// Tasks for watch
gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/js/*.js", gulp.parallel("script"));
});

// Tasks forbrowserSync
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      //get dirrectory for server
      baseDir: "app/",
    },
  });
});

gulp.task("default", gulp.parallel("scss", "js", "browser-sync", "watch"));
