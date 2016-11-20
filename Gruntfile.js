module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  comments: {
    css: {
      // Target-specific file lists and/or options go here.
      options: {
          singleline: true,
          multiline: true
      },
      src: [ 'css/**/*.css', 'views/**/*.css'] // files to remove comments from
    },
    js: {
      // Target-specific file lists and/or options go here.
      options: {
          singleline: true,
          multiline: true
      },
      src: [ 'js/**/*.js'] // files to remove comments from
    },
    html: {
      // Target-specific file lists and/or options go here.
      options: {
          singleline: true,
          multiline: true
      },
      src: [ 'test/*.html'] // files to remove comments from
    },        
  },

  removeHtmlComments: {
    target: {
      src: 'project-webperf.html'
    }
  },  

  htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'dist/index.html': 'index.html',     // 'destination': 'source' 
      }
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'release/css',
        src: ['css/*.css', '!*.min.css'],
        dest: 'release/css',
        ext: '.min.css'
      }]
    }
  },   

});


grunt.registerTask("default", ["comments", "removeHtmlComments", "htmlmin", "cssmin"]);

};