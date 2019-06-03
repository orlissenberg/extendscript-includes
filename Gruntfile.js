module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'application-notifications.jsx',
                    'array-indexof.jsx',
                    'document-export-image.jsx',
                    'dotenv.jsx',
                    'json.jsx',
                    'page-copy-items-to-document.jsx',
                    'random.jsx'
                ],
                dest: 'dist/scripts.jsx',
            },
        },
        uglify: {
            options: {
                beautify: false
            },
            target: {
                files: [{
                    cwd: '.',
                    src: '*.jsx',
                    dest: 'dist/scripts.jsx'
                }]
            }
        },
        clean: {
            dist: ['dist/scripts.jsx'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'concat', 'uglify']);
};