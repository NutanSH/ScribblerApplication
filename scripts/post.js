var count = 1;

function likeFunction(likeButton) {
  
  document.getElementById(likeButton).innerHTML = 'Liked';
  const updatedCount = count++;
  document.getElementById('likeText').innerHTML = updatedCount +' person likes this!';
}

function showComments(textArea){
    var text = document.getElementById(textArea);
    var showarea = document.getElementById("commentText");
    showarea.innerHTML=text.value+'<br>'+showarea.innerHTML;
    text.value = '';
   }



  /* Call retrievePost() before loading html content */
  $(document).ready(function(){
    retrievePost();
});

/* This function is called to retrieve post title, author and post body values from postlist html */
function retrievePost(){

  document.getElementById("postTitle").innerHTML = localStorage.getItem("titleVal");
  document.getElementById("author").innerHTML = localStorage.getItem("author");
  document.getElementById("postBody").innerHTML = localStorage.getItem("cardBody");

}


var editBtn = document.getElementById('editButton');
var editables = document.querySelectorAll('#postTitle, #postBody');


editBtn.addEventListener('click', function() {
if (!editables[0].isContentEditable) {
editables[0].contentEditable = 'true';
editables[1].contentEditable = 'true';
editBtn.innerHTML = 
'<button class="saveButton" id="saveButton"><i class="fa fa-save"></i> Save</button>';

} else {
// Disable Editing
editables[0].contentEditable = 'false';
editables[1].contentEditable = 'false';
 // Change Button To Edit
 editBtn.innerHTML = '<button class="editButton" id="editButton" type="button">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
// Save the data in localStorage 
for (var i = 0; i < editables.length; i++) {
  localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
}
}
});

//Retrieve the saved data
if (typeof(Storage) !== "undefined") {
 
 if (localStorage.getItem('postTitle') !== null) {
   editables[0].innerHTML = localStorage.getItem('postTitle');
 }
  
 if (localStorage.getItem('postBody') !== null) {
   editables[1].innerHTML = localStorage.getItem('postBody');
 }
 
  
} 





  