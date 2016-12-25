//JavaScript file
/***********************************************
#
#      Filename: module-conflict-b.js
#
#        Author: Alex - libertyindeath@hotmail.com
#   Description: ---
#        Create: 2016-12-25 15:59:07
# Last Modified: 2016-12-25 15:59:07
#***********************************************/

 
console.log('b starting');
    exports.done = false;
    var a = require('./module-conflict-a.js');
    console.log('in b,a.done = %j',a.done);
    exports.done = true;
    console.log('b done');
