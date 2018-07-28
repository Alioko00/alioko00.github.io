var counterPlay = 0
alert("You can click on the photo.😊")
arr1 = []
setTimeout(funcP, 100)
function func0(){
  main = document.getElementById("main");
  blur = document.getElementById("blur");
  box = document.getElementById("box");
  
  //var arr1
  var dialog = "3" /*prompt("rus=1, eng=1",[1])*/
  if(dialog=="2"){
		   arr1 = ["A","r","t"," ","g","a","l","l","e","r","y"]
  } else {
		   arr1 = ["Г","а","л","е","р","е","я"," ","и","с","к","у","с","с","т","в"];
  }
  var c = -1
  var arr = arr1
	var header = document.getElementById("header");
	var newSpan = document.createElement("span");
	var main = document.getElementById("main");
  for(var i = 0; i<main.children.length; i++){
	c = c+1
	//main.children[i].setAttribute("value",c) 
	main.children[i].dataset.count = c	
  }
	for(var i = 0; i<arr1.length; i++){
		header.appendChild(newSpan.cloneNode(true));
		header.children[i].innerHTML = arr[i];
		header.children[i].id = "sp"+i;
	}
	funcHeader();
}
function funcP(){
 var progV = 0
 var prog0 = document.getElementById("progress0")
 var prog = document.getElementById("progress")
 stopP = window.setInterval(function(){
 if(progV<=100){
	   prog.value = progV
	   progV = progV+1
	   } else{
		   clearInterval(stopP)
		   prog0.style.display = "none"
	  }
 },100)
}
function func1(elem){
  counterPlay = Number(elem.dataset.count)
  elem.style.border = "5px solid red"
  blur.style.display = "inline"
  var elemClon = elem.cloneNode(true)
  blur.appendChild(elemClon).setAttribute("id", "blurImg")
  var blurImg = document.getElementById("blurImg")
  var bh = Math.max(main.clientHeight, main.offsetHeight, main.scrollHeight)
  blur.style.minHeight = (bh+(bh*0.40))+"px"
  blurImg.style.border = ""
  if(box.children.length<main.children.length){	 
  for(var i = 0; i<main.children.length; i++){
	 var clone = main.children[i].cloneNode(true)
	 box.appendChild(clone).setAttribute("onclick", "func2(this)")
  }}
  box.children[counterPlay].style.border = "5px solid red"
}
function func2(elem){
  counterPlay = Number(elem.dataset.count)
	 var blur1 = document.getElementsByTagName("img");
	 for(var i = 0; i<blur1.length; i++){
		 blur1[i].style.border = ""
		 }
	blur.removeChild(blurImg)
	var elemClon = elem.cloneNode(true)
  blur.appendChild(elemClon).setAttribute("id", "blurImg")
  elem.style.border = "5px solid red"
}
function funcL(){
	  var bLeft = document.getElementById("bLeft");
	  var i = Number(counterPlay)
	  var ii 
	  if(counterPlay>0){ 
		  ii = i-1
		  var elemClon = main.children[ii]
		  var elemClon1 = elemClon.cloneNode(true)
			blur.removeChild(blurImg)
		blur.appendChild(elemClon1).setAttribute("id", "blurImg")
		box.children[ii+1].style.border = ""
		box.children[ii].style.border = "5px solid red"
		counterPlay = ii
		}
}
function funcR(){ 
	  var bRight = document.getElementById("bRight");
	  
	  var i = Number(counterPlay)
	  var ii 
	  
	  if(counterPlay<17){ 
		  ii = i+1
		  var elemClon = main.children[ii]
		  var elemClon1 = elemClon.cloneNode(true)
			blur.removeChild(blurImg)
		blur.appendChild(elemClon1).setAttribute("id", "blurImg")
		box.children[ii-1].style.border = ""
		box.children[ii].style.border = "5px solid red"
		counterPlay = ii
		} 
}
function funcClose(){
	var blurImg = document.getElementById("blurImg");
	blurImg.style.border = "1px solid transparent";
	for(var y = 0; y<main.children.length; y++){
		  box.children[y].style.border = "1px solid transparent";
		  main.children[y].style.border = "1px solid transparent";
	 }
	  blur.removeChild(blurImg)
		  blur.style.display = "none"
	  clearInterval(stopA)
}

function funcA(){
  stopA = window.setInterval(funcR, 3500);
}
var iii = 0
var iii1 = 0
function funcHeader(){
var iii2 = arr1.length-1
  window.setInterval(function(){
			var a = iii
			var b = iii1
		var sp = document.getElementById("sp"+a);
		var sp0 = document.getElementsByTagName("span")
		var sp2 = document.getElementById("sp"+b);
		if(sp0[iii2].style.top != "20px"&&iii<16){
	sp.style.color = "#7b0000"
	sp.style.top = "20px"
	a = iii +1
  iii = a
  }else if(iii==16&&sp0[iii2].style.top != "-10px") {
	   sp2.style.color = "#483d8b"
	sp2.style.top = "-10px"
	b = iii1 +1
  iii1 = b

  }else { 
  var d = 0
		iii = d
		iii1 = d
		
		}
  
 },100)
}



