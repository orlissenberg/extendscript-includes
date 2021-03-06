module.exports = function (grunt) {
    const concatSources = [
        'src/application-notifications.jsx',
        'src/array-index-of.jsx',
        'src/document-export-image.jsx',
        'src/document-copy-metadata-to-export.jsx',
        'src/dotenv.jsx',
        'src/json.jsx',
        'src/page-copy-items-to-document.jsx',
        'src/random.jsx',
    ];

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                options: {
                    separator: ';',
                },
                src: concatSources,
                dest: 'dist/scripts.jsx',
            },
            dev: {
                options: {
                    separator: '\n\n',
                },
                src: concatSources,
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
                    src: 'src/*.jsx',
                    dest: 'dist/scripts.jsx'
                }]
            }
        },
        clean: {
            dist: ['dist/scripts.jsx'],
        },
        watch: {
            scripts: {
                files: ['src/*.jsx'],
                tasks: ['default'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'concat', 'uglify']);
    grunt.registerTask('dev', ['clean', 'concat:dev']);
};