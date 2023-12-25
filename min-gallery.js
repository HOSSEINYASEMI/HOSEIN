let slider_img = document.querySelector(".slider-img");
let img=[
'1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'
];

let i=0;

function prev() {
  if (i<=0) i = img.length;
    i--;
  return setImg();
  
}


function next() {
  if(i >= img.length -1) i= -1;
  i++;
  return setImg(); 
}



function setImg() {
  return slider_img.setAttribute('src','img/'+img[i]);
}