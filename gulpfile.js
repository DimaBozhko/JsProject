"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const browserSync = require("browser-sync").create();
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");

function style () {
	return gulp.src("source/less/style.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemaps.write("."))
  	.pipe(gulp.dest("source/css"))
  	.pipe(browserSync.stream())
}

function watch () {
	browserSync.init({
		server: {
			baseDir: "source/"
		}
	})
	gulp.watch("source/less/**/*.less", style);
	gulp.watch("source/*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
