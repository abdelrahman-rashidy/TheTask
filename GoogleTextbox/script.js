// when i check the text area 
// and leave it without typing any thing 
// change req css atribute display:inline-block
//focus out at the first time and check if the text area is have no text there
var requirearea =  document.getElementById("req") ;
var EnterName = document.getElementById("lable");
var inp = document.getElementById('tex');
var underLine = document.getElementById("un");
var count = ["red", "#42cbf4", "#33ad27"];
// var countn = 0;
inp.addEventListener("focus", function(){
	    if (inp.value == "") {
	    	requirearea.style.display = "none";
		    EnterName.style.color = count[1];
			underLine.style.backgroundColor= count[1];
		    underLine.style.display = "block";
		    inp.style.borderBottom = "1px solid #42cbf4 "

	    }else{
	    	underLine.style.display = "inline";
	    	inp.style.borderBottom = "1px solid #33ad27";
			underLine.style.backgroundColor= count[2];

	    }

        document.onkeypress = function(){
	    	EnterName.style.color= count[2];
	    	underLine.style.backgroundColor= count[2];
	    	inp.style.borderBottom = "1px solid #33ad27"

}
})


inp.addEventListener("focusout", function(){
   underLine.style.display = "none";

	if (inp.value != ""){
  		    inp.style.backgroundColor = "white";
 		    EnterName.style.color = count[2];
	    	inp.style.borderBottom = "1px solid #33ad27"

    


}else if (inp.value == ""){
    EnterName.style.color = "red";
    requirearea.style.display = "inline";
	underLine.style.backgroundColor= count[0];
	inp.style.borderBottom = "1px solid red"



}

    });


// color at the first time is blue 
// then if not type color is red and disblay 
// if the text focused again his color is green 


// testing area
