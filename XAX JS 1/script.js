// 1 
var h1=document.getElementById("h1");
   h1.innerHTML="LEVEL  1"; 

var table=document.createElement("table"); 
var tr=document.createElement("tr");  
var td=document.getElementsByClassName("a");  
var txt=document.getElementById("txt"); 
var a=document.getElementById("a"); 
var d1=document.getElementById("d1");
var but=document.getElementById("but");
var table=document.getElementById("table");
var c;  
 
var nkar=["nkar/1.jpg","nkar/2.jpg","nkar/3.jpg","nkar/4.jpg",
"nkar/5.jpg","nkar/6.jpg","nkar/7.jpg","nkar/8.jpg",""]; 

 for(let j=0;j<td.length;j++){ 
 
  var r=Math.floor(Math.random()*nkar.length);

    td[j].style.backgroundImage="url("+nkar[r]+")"; 
    td[j].style.backgroundSize="100% 100%"; 
    nkar.splice(r,1); 
  } 
 for(let i=0;i<td.length;i++){  
 
td[i].addEventListener("click",function(){   
 if(td[i-1] && td[i-1].style.backgroundImage=='url("")' ){  
  c=td[i-1].style.backgroundImage;  
  td[i-1].style.backgroundImage=td[i].style.backgroundImage;  
  td[i].style.backgroundImage=c;  
 }   
   
 if(td[i+1] && td[i+1].style.backgroundImage=='url("")' ){  
  c=td[i+1].style.backgroundImage;  
  td[i+1].style.backgroundImage=td[i].style.backgroundImage;  
  td[i].style.backgroundImage=c;  
 }  

 if(td[i-3] && td[i-3].style.backgroundImage=='url("")' ){  
    c=td[i-3].style.backgroundImage;  
  td[i-3].style.backgroundImage=td[i].style.backgroundImage;  
  td[i].style.backgroundImage=c;  
 }
   
 if(td[i+3] && td[i+3].style.backgroundImage=='url("")' ){  
  c=td[i+3].style.backgroundImage;  
  td[i+3].style.backgroundImage=td[i].style.backgroundImage;  
  td[i].style.backgroundImage=c;  
 }  
 
  if(td[0].style.backgroundImage=='url("nkar/1.jpg")' &&
  td[1].style.backgroundImage=='url("nkar/2.jpg")'  &&
  td[2].style.backgroundImage=='url("nkar/3.jpg")'  &&  
  td[3].style.backgroundImage=='url("nkar/4.jpg")'  && 
  td[4].style.backgroundImage=='url("nkar/5.jpg")'  && 
  td[5].style.backgroundImage=='url("nkar/6.jpg")'  &&  
  td[6].style.backgroundImage=='url("nkar/7.jpg")'  && 
  td[7].style.backgroundImage=='url("nkar/8.jpg")'  && 
  td[8].style.backgroundImage=='url("")'){
    
  txt.innerHTML="Haxtanak";
  table.remove();
   d1.style.display="block";
   but.style.display="block";
  a.setAttribute("href","../xax drosh js/index.html");
}
  })
  }
   
      
