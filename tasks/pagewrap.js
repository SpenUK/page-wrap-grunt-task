/*
 * page-wrap-grunt-task
 *
 * 2015 Spen Taylor
 *
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var fs = require('fs');
  var chalk = require('chalk');

  grunt.registerMultiTask('pagewrap', 'Takes html content pages and wraps them with html from a header and footer file to create static pages.', function() {

    var header = (this.data.wrapper && this.data.wrapper.header) ? this.data.wrapper.header : false;
    var footer = (this.data.wrapper && this.data.wrapper.footer) ? this.data.wrapper.footer : false;

    var headerContents = header ? getContents(header) : '';
    var footerContents = footer ? getContents(footer) : '';

      this.files.filter(function(filePair){
        return (filePair.src != header && filePair.src != footer);
      }).forEach(function(filePair){

        filePair.src.forEach(function(file){
          var fileContents = getContents(file);
          
          if (fileContents) {
            var builtContents = [headerContents,fileContents,footerContents].join('\n');
            grunt.file.write(filePair.dest, builtContents);

            grunt.log.writeln('Produced: "'+ filePair.dest + '".');
          } else {
            grunt.log.warn('Source file "' + filepath + '" not found.');
          };

        });
      });

  });

  function getContents(file) {
    grunt.file.exists(file);
    if (!grunt.file.exists(file)) {
      return false;
    } else {
      return grunt.file.read(file);
    };
  }
    
};