//JavaScript file
/***********************************************
#
#      Filename: module-exports-main.js
#
#        Author: Alex - libertyindeath@hotmail.com
#   Description: ---
#        Create: 2016-12-25 16:11:20
# Last Modified: 2016-12-25 16:11:20
#***********************************************/

 
console.log();
var obj = require('./module-exports-obj.js');
obj.on('ready',function()
        {
            console.log('module module-exports-obj.js is ready');
            console.log();
        });
