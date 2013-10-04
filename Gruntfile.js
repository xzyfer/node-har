
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        release: {
            options: {
                bump: true
              , file: 'package.json'
              , add: true
              , commit: true
              , tag: true
              , push: true
              , pushTags: true
              , npm: true
            }
        },
        jshint: {
            files: ['lib/**/*', 'test/*']
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Default task(s).
    grunt.registerTask('default', ['jshint']);
};
