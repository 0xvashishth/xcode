let editor;

window.onload = function(){
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/xcode");
	editor.session.setMode("ace/mode/c_cpp");
}

function changetheme(){
	var themename = $("#themename").val();
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/"+themename);
}

function changeFontSize(){
	$('.editor').each(function( index ) {
	 var size = $("#fontsize").val();
     editor = ace.edit(this);
     if (size == 15){
     	editor.setFontSize(15);
     }
     else if (size == 'normal'){
     	editor.setFontSize(11);
     }
     else if(size == 20){
     	editor.setFontSize(20);
     }
     else if(size == 25){
     	editor.setFontSize(25);
     }
     else if(size == 30){
     	editor.setFontSize(30);
     }
     else if(size == 35){
     	editor.setFontSize(35);
     }
   });
}

function changeLanguage(){

	let languege = $("#languages").val();

	if( languege =='c' || languege=='cpp') editor.session.setMode("ace/mode/c_cpp");
	else if(languege=='php') editor.session.setMode("ace/mode/php");
	else if(languege=='python') editor.session.setMode("ace/mode/python");
	else if(languege=='javascript') editor.session.setMode("ace/mode/javascript");
}

function executeCode(){
	$.ajax({
		url: "/xcode/ide/app/compiler.php",
		method: "POST",
		data:{
			language: $("#languages").val(),
			code: editor.getSession().getValue()
		},
		success: function(response){
			$(".output").text(response)
		}
	})

	// let language = $("#languages").val();
	// console.log(language);
	

	// let code = editor.getSession().getValue();
	

	// console.log(code);



	// let random = Math.floor((Math.random() * 10000000) + 1);
	// console.log(code);
	// let filePath = "temp/"+random+"."+language;
	// console.log(filePath);
	// fs.writeFile(filePath, code, function(err) {
	//     if(err) {
	//         return console.log(err);
	//     }
	//     console.log("File saved successfully!");
	// });



	// exec('a',(e,stdout,stderr)=>{
	// 	if(e instanceof Error){
	// 		console.error(e);
	// 		throw 0;
	// 	}
	// 	console.log('stdout : ',stdout);
	// 	console.log('stderr : ',stderr);
	// });


}

$('#toggle_fullscreen').on('click', function(){
	console.log('edded test');
  // if already full screen; exit
  // else go fullscreen
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
  	$('.editor').css("height","400px");
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    element = $('.container1').get(0);
    $('.editor').css("height","800px");
    $('.output').css("background-color","white");
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
});