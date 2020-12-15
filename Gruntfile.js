module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run:{
	    install: {
		   cmd: 'npm', 
			args: [ 
			  'install'
			]
	    },
            test:{
                cmd: 'npm',
                args: [
                    'test'
                ]
            }
        }
    });

    grunt.registerTask('install', ['run:install']);
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('test',["run"]);
};
