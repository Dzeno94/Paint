
var canvas = document.getElementById("canvas");
var mousedown = false;
var color="black";
var colorInput = document.getElementById("color_input");
var ol2 = document.getElementById("ol2");
var ol4 = document.getElementById("ol4");
var ol6 = document.getElementById("ol6");
var penSize="2px";
var currentPen=ol2;
ol2.onclick=function(){
    currentPen=ol2;
    penSize="2px";
    ol2.style.backgroundColor=color;
    ol4.style.backgroundColor="black";
    ol6.style.backgroundColor="black";
}
ol4.onclick=function(){
    currentPen=ol4;
    penSize="4px";
    ol2.style.backgroundColor="black";
    ol4.style.backgroundColor=color;
    ol6.style.backgroundColor="black";
}
ol6.onclick=function(){
    currentPen=ol6;
    penSize="6px";
    ol2.style.backgroundColor="black";
    ol4.style.backgroundColor="black";
    ol6.style.backgroundColor=color;
}

colorInput.onchange=function(e){
    color=e.target.value;
    currentPen.style.backgroundColor=color;

}
canvas.onmousedown= function(e){mousedown=true; };
canvas.onmouseup= function(e){mousedown=false; };
canvas.onmousemove=function(event){
    if(!mousedown){
        return;
    }else{
        var pt = document.createElement("div");      
        
        pt.style.cssText=`position:absolute;background-color:${color};width:${penSize};height:${penSize};`;
        pt.style.left = event.clientX+"px";
        pt.style.top = event.clientY+"px";
    canvas.appendChild(pt);
    }
}
