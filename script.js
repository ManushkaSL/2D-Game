var boy = document.getElementById("boy");
var idelImageNumber = 0;
var idleAnimationNumber = 0;


function idleAnimation(){
    console.log("idle");

    idelImageNumber = idelImageNumber + 1;
    if(idelImageNumber == 11){
        idelImageNumber = 1 ;
    }

    // boy.src="resources/run ("+ idelImageNumber +").png";
    boy.src="resources/idle ("+ idelImageNumber +").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,150);

}

var runImageNumber = 0;
var runAnimationNumber = 0;

function runAnimation(){
    console.log("run")

    runImageNumber = runImageNumber + 1

    if(runImageNumber == 11){
        runImageNumber = 1;
    }
    console.log(runImageNumber);
    boy.scr = "resources/run"+ runImageNumber +".png";
    console.log(boy.src);
}

function runAnimationStart(){
    
    console.log("121");
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);

}
function keyCheck(event){
    //alert(event.which);
    //enter = 13

    var keyCode = event.which;

    if(keyCode == 13){
        if(runAnimationNumber == 0){
            runAnimationStart();

        }
    }
}
