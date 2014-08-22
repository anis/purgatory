module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less : {
            dev : {
                options : {
                    paths : ['./src/css/']
                },
                files : {
                    './src/css/style.css' : './src/css/style.less'
                }
            },
            build : {
                options : {
                    paths : ['./src/css/']
                },
                files : {
                    './dst/css/style.css' : './src/css/style.less'
                }
            }
        },

        copy : {
            html : {
                files : [
                    {
                        src  : './src/index.html',
                        dest : './dst/index.html'
                    }
                ]
            }
        },

        jsdoc : {
            build : {
                src : ['./src/js/purgatory/**/*.js', './src/js/main.js'],
                options : {
                    destination : './doc',
                    configure   : './jsdoc.conf',
                    template    : './node_modules/grunt-jsdoc/node_modules/ink-docstrap/template'
                }
            }
        },

        concat_in_order : {
            js : {
                options : {
                    extractRequired : function (filePath, fileContent) {
                        var workingdir = filePath.split('/');
                        workingdir.pop();

                        var deps = this.getMatches(/\*\s*@depend\s(.*\.js)/g, fileContent);
                        deps.forEach(function(dep, i) {
                            var dependency = workingdir.concat([dep]);
                            deps[i] = dependency.join('/');
                        });
                        return deps;
                    },
                    extractDeclared : function (filePath) {
                        return [filePath];
                    },
                    onlyConcatRequiredFiles : true
                },
                files : {
                    './src/js/main.min.js' : ['./src/js/main.js']
                }
            }
        },

        uglify : {
            js : {
                files : {
                    './dst/js/main.min.js' : ['./src/js/main.min.js']
                }
            }
        },

        cssmin : {
            css : {
                files : {
                    './dst/css/style.css' : ['./src/css/style.css']
                }
            }
        },

        clean : {
            dst :   ['./dst'],
            doc :   ['./doc'],
            build : ['./dst', './doc', './src/js/main.min.js']
        },

        watch : {
            css : {
                files : ['./src/css/*.less'],
                tasks : ['cssBuild']
            },
            js : {
                files : ['./src/js/purgatory/**/*.js', './src/js/main.js'],
                tasks : ['jsBuild', 'doc']
            },
            html : {
                files : ['./src/index.html'],
                tasks : ['copy:html']
            }
        }
    });

    // Sub tasks
    grunt.registerTask('jsBuild',  ['concat_in_order:js', 'uglify:js']);
    grunt.registerTask('cssBuild', ['less:dev', 'cssmin:css']);
    grunt.registerTask('doc',      ['clean:doc', 'jsdoc:build']);

    // Macro tasks
    grunt.registerTask('dev',   ['concat_in_order:js', 'less:dev', 'doc']);
    grunt.registerTask('build', ['clean:build', 'copy:html', 'jsBuild', 'cssBuild', 'doc']);
};