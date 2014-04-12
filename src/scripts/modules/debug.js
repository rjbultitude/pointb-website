//Can be used to log silent errors, track variable values and empty objects

define(['base'], function(base){
    'use strict';

	function write(funcName, params){
		if(typeof console === 'undefined'){
			return;
		}
		if (base.debug === true) {
			var func = console[funcName] || console.log;	
			if (typeof func === 'function') {
				func.apply(console, params);
			} else if (!Function.prototype.bind && typeof func === 'object') {
				// IE8
				Function.prototype.apply.call(func,console,params);
			}
		}
		else {
			return;
		}
	}
	
    var debug = {
        log: function debugFn() {
			write('log', arguments);
        },
		info: function debugFn() {
			write('info', arguments);
		},
		warn: function debugFn() {
			write('warn', arguments);
		},
		error: function debugFn() {
			write('error', arguments);
		}
    }; //end debug object

    return debug;

}); //end define