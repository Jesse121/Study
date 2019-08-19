var grunt = require("grunt");
grunt.config.init({
    pkg: grunt.file.readJSON('./package.json'),
    'create-windows-installer': {
        x64: {
            appDirectory: './xingguang-win32-x64',
            authors: 'Jesse',
            exe: 'xingguang.exe',
            description:"xingguang",
            setupIcon:"../static/icon.ico",
            noMsi:true
        }
    }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);
