var Vertex = function(_key){

	var that = {};
	
	that.neighbors = [];		// list of vertices
	that.parent = null;		// a vertex
	that.key = _key;		// wtvs	
	
	
	return that;
	
};