//JavaScript file
/***********************************************
#
#      Filename: module-exports-obj.js
#
#        Author: Alex - libertyindeath@hotmail.com
#   Description: ---
#        Create: 2016-12-25 16:33:32
# Last Modified: 2016-12-25 16:33:32
#***********************************************/

 
var EventEmitter = require('events').EventEmitter;
module.exports  = new EventEmitter();
//Do some work, and after some time emit the 'ready' event from the module itself
setTimeout(function(){
    module.exports.emit('ready');
},1000);
