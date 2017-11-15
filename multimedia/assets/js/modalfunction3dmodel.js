//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
//Inspired by Samantha Watson

var modal = document.getElementById("my3dmodelModal");
var img1 = document.getElementById("3dmodelplanning");



var modalImg = document.getElementById("img01");
// i is a function parameter that is passed in to an anonymous function
//like in java data types are declared. In Javascript they are not.
function img_click(i){
  i.onclick=function(){
    modal.style.display="block";
    modalImg.src=this.src;
    }
}
// Get the <span> element that closes the modal
var span=document.getElementsByClassName("close")[0];
span.onclick=function(){
  modal.style.display="none";
}

img_click(img1);


