//= require_tree .

var index_images=["oku", "nuange"];
$(document).ready(function(){
	$('.get').addClass(index_images[Math.floor(Math.random() * index_images.length + 1)-1]);
});
