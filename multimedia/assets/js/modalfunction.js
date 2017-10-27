https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
var modal = document.getElementById("myModal");
var img1 = document.getElementById("expenseIQ");
var img2 = document.getElementById("wanakabackground");
var img3 = document.getElementById("expenseIQ");
var img4 = document.getElementById("expenseIQ");
var modalImg = document.getElementById("img01");
// i is a function parameter that is passed in to an anonymous function
//like in java data types are declared. In Javascript they are not.
function img_click(i){
  i.onclick=function(){
    modal.style.display="block";
    modal_img.src=this.src;
    }
}
// Get the <span> element that closes the modal
var span=document.getElementsByClassName("close")[0];
span.onclick=function(){
  modal.style.display="none";
}

img_click(img1);
img_click(img2);
img_click(img3);
img_click(img4);
