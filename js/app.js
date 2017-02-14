console.log("here");

//make button to add new item to the to do lsit
//be able to complete the task
//accept an input

$('.button').click(function(){
	console.log('clicked');
	var newItem = $('<div class="item"><div><input type="checkbox" class="check"/></div><div class="task"></div></div>');
	console.log('0');
	var task = prompt("New Task");
	console.log('1');
	
	var taskHtml = newItem.find(".task");
	taskHtml.text(task);
	console.log('2');
	newItem.appendTo('.list');
	console.log('3');



});

$('.list').on('click', '.check', function(e){
	
	var target = $(e.target).parent().parent();

	target.remove();

});