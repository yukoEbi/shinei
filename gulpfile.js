const gulp = require("gulp");
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const sass = require("gulp-dart-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function () {
  gulp.watch("ejs/**/*.ejs", gulp.series("ejs"));
  gulp.watch("common/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("ejs", function () {
  return gulp
    .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs", "!"])
    .pipe(ejs({}, {}, { ext: ".html" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./"));
});

gulp.task("sass", function () {
  return gulp
    .src("common/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(sourcemaps.write("./common/css"))
    .pipe(gulp.dest("./common/css"))
});
