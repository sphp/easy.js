var $=(function(){
	'use strict';
	/**
	 * Create the constructor
	 * @param {String} s The selector to use
	 */
	var Easy=function(s){
		if(!s) return;
		if(s === 'document')this.elems=[document];
		else if(s === 'window')this.elems=[window];
		else this.elems=document.querySelectorAll(s);
	};
	/**
	 * Do ajax stuff
	 * @param  {String} url The URL to get
	 */
	Easy.prototype.ajax=function(url){
		// Do some XHR/Fetch thing here
		console.log(url);
	};
	/**
	 * Run a callback on each item
	 * @param  {Function} callback The callback function to run
	 */
	Easy.prototype.each=function(callback){
		if(!callback || typeof callback !== 'function')return;
		for(var i=0; i < this.elems.length; i++){
			callback(this.elems[i], i);
		}
		return this;
	};
	/**
	 * Operation of class to elements
	 * @param {String} className The class name
	 * @param {String} action The class add,remove,toggle action 
	 */
	Easy.prototype.class=function(className, action){
		this.each(function(item){
			item.classList[action](className);
		});
		return this;
	};
	/**
	 * Return the constructor instantiation
	 */
	return function(s){return new Easy(s)};
})();
