module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run:{
	    install: {},
	    build: {},
            test:{
                cmd: 'npm',
                args: [
                    'test'
                ]
            }
        }
    });

    grunt.registerTask('build',   ['run:build']);
    grunt.registerTask('install', ['run:install']);
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('test',["run"]);
};
