import "./interface.ts";

let hello: string = "Hello, TypeScript";
document.querySelectorAll(".app")[0].innerHTML = hello;

let c: any = document.getElementById("myCanvas");

let cxt: CanvasRenderingContext2D = c.getContext("2d");

var grd = cxt.createLinearGradient(0, 0, 175, 50);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#00FF00");
cxt.fillStyle = grd;
cxt.fillRect(0, 0, 175, 50);

