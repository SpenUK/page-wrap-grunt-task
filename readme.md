PageWrap Grunt Task
===============

Takes a collection of content pages and wraps them with content from a header and footer file.
Quite useless in most cases, since you would normally use partials!

## Installation

```shell
npm install page-wrap-grunt-task --save-dev
```

Once installed, make sure the task is included in your project's grunt file:

```js
grunt.loadNpmTasks('grunt-wrap-grunt-task');
```

## How to use

Using this task is quite straight forward, set a cwd, src files, destination and a wrappers object that includes both a header and footer file.

Either the header or footer files can be omitted if they are not needed

Example config:

```
pagewrap: {
  example: {
    expand: true,
    cwd: 'app-directory/html/',
    src: ['**/*.html' ], // processes all .html files within the 'cwd' directory
    dest: 'destination-directory/', // creates new files in the destination directory, with the same structure as in the 'cwd' directory
  
    wrapper: {
      header: 'app-directory/html/wrapper/header.html',
      footer: 'app-directory/html/wrapper/footer.html'
    }
  }
}
