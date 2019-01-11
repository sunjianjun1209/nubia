//给gulp编写任务  commonJS规范
const gulp = require("gulp");

//拷贝html文件
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//拷贝图片
gulp.task("images", function(){
	return gulp.src("images/*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//拷贝数据
gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//希望能够一次性执行多个任务
gulp.task("build", ["copy-html", "images", "data"], function(){
	console.log("编译成功");
})


//编译scss
/*
	1、下载插件
	2、通过commonJS规范引入插件
	3、使用这个插件编写任务
*/
const scss = require("gulp-scss");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss", function(){
	return gulp.src("stylesheet/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename(function(path){
		path.basename += ".min";
		path.extname = ".css";
	}))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

/*
	处理js文件
	处理第三方的js文件
*/
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//启动监听

gulp.task("watch", function(){
	gulp.watch("*.html", ['copy-html']);
	gulp.watch("*.{jpg,png}", ['images']);
	gulp.watch(["*.json", "!package.json"], ['data']);
	gulp.watch("stylesheet/*.scss", ['scss']);
	gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
})

const connect = require("gulp-connect");

//启动服务 只有阿帕奇 不支持php
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 8808,
		livereload: true
	})
})


//设置默认任务
gulp.task("default", ["watch", 'server']);