module.exports = function(grunt) {

    grunt.initConfig({
      less: {
        development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/stylePref.css": "less/style.less"
                }
        }
      },
      autoprefixer: {
        options: {
          browsers: ['last 5 versions']
        },

        dist: {
                files: {
                    "css/style.css": "css/stylePref.css"
                }
        }
      },
      /*css*/
      cssmin: {
        build: {
            files: {
                'production/css/prev.min.css': ['css/font.css','css/reset.css','css/swiper.min.css','css/swiper-thumbs.css'],
                'production/css/style.min.css': ['css/style.css'],
            }
        }
      },
      uglify: {
        build: {
          files: {
                'production/js/prev.min.js': ['js/swiper.min.js'],
                'production/js/j.min.js': ['js/j.js'],
          }
        },
      },

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['less','autoprefixer','cssmin','uglify']);


};
