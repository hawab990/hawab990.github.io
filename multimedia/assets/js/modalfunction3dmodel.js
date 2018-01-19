//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img

var modal = document.getElementById("my3dmodelModal");
var img1 = document.getElementById("3dmodelplanning");
var img2 = document.getElementById("wheelchairaccess");
var img3 = document.getElementById("colors");
var img4 = document.getElementById("modeldesign2");
var img5 = document.getElementById("usageofgroups");
var img6 = document.getElementById("intersect");


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
img_click(img2);
img_click(img3);
img_click(img4);
img_click(img5);
img_click(img6);



