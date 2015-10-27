'use strict';

var gulp						= require("gulp"),
		runSequence			= require("run-sequence"),
		extend					= require("xtend"),
		electronServer	= require("electron-connect").server;

var config = {
	scripts: {
		js: {
			main: ["./src/main/**/*.js"],
			renderer: ["./src/renderer/**/*.js"],
			test: ["./src/text/*.spec.js"]
		}
	},
	html: [
		"./src/index.html",
		"./src/views/*.html"
	],
	dependencies: [
		"./src/node_modules/**/*"
	],
	static: "./src/*.json",
	dest: "./src"
};

var electron = null;

gulp.task("serve", function() {
	var opt = {
		env: extend({NODE_ENV: 'development'}, process.env),
		stdio: 'inherit'
	};

	electron = electronServer.create({path: config.dest});

	electron.start();
});

gulp.task("watch", function() {
	gulp.watch(config.static, electron.start);
	gulp.watch(config.html, electron.start);
	gulp.watch(config.scripts.js.renderer, electron.start);
	gulp.watch(config.scripts.js.main, electron.start);
});

gulp.task("default", function(callback) {
	runSequence("serve", "watch", callback);
});
