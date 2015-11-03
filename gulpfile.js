'use strict';

var gulp						= require("gulp"),
		runSequence			= require("run-sequence"),
		extend					= require("xtend"),
		electronServer	= require("electron-connect").server;

var electron = null;

gulp.task("serve", function() {
	var opt = {
		env: extend({NODE_ENV: 'development'}, process.env),
		stdio: 'inherit'
	};

	electron = electronServer.create({
		path: "./src"
	});

	electron.start();
});

gulp.task("watch", function() {
	gulp.watch(["./src/*", "./src/renderer/**/*"], electron.reload);
	gulp.watch(["./src/main/**/*"], electron.restart);
});

gulp.task("default", function(callback) {
	runSequence("serve", "watch", callback);
});
