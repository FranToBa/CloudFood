module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run:{
            test:{
                cmd: 'npm',
                args: [
                    'test'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('test',["run"]);
};
