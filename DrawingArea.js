function DrawingArea(paintProgram)
{
	this.paintProgram=paintProgram;
	this.drawingAreaDiv=document.createElement("div");
	this.drawingAreaDiv.className="drawingAreaDiv";
}

DrawingArea.prototype.createCanvas=function(width,height)
{
	this.canvas=document.createElement("canvas");
	this.canvas.className="canvas";
	this.canvas.width=width;
	this.canvas.height=height;
	this.drawingAreaDiv.appendChild(this.canvas);
	this.context= this.canvas.getContext("2d");   //either 2d or 3d
//	this.canvas.addEventListener("mousedown",this.onMouseDown.bind(this));  //event listener always added to elements
}

DrawingArea.prototype.getElement=function()
{
	return this.drawingAreaDiv;
}

DrawingArea.prototype.getCanvas=function()
{
	return this.canvas;
}

//DrawingArea.prototype.onMouseDown=function (event)
//{
//	console.log(event);
//	this.context.beginPath();
//	var mousePos=this.getMousePos(this.canvas,event);
//	this.context.moveTo(mousePos.x,mousePos.y);   //moves drawing tool to start position, doesnt draw a line
//	this.mouseMoveBound= this.onMouseMove.bind(this);
//	this.mouseUpBound= this.onMouseUp.bind(this);
//	this.canvas.addEventListener("mousemove",this.mouseMoveBound);
//	this.canvas.addEventListener("mouseup",this.mouseUpBound);
//}
//
//DrawingArea.prototype.onMouseMove=function (event)
//{
//	var mousePos=this.getMousePos(this.canvas,event);
//	this.context.lineTo(mousePos.x,mousePos.y);
//	switch (this.paintProgram.getTool().getName())
//	{
//		case "Draw":
//			this.context.strokeStyle = this.paintProgram.getColour();
//			this.context.stroke();
//			break;
//
//		case "Fill":
//			this.context.fillStyle = this.paintProgram.getColour();
//			this.context.fill();
//			break;
//	}
//}
//
//DrawingArea.prototype.onMouseUp=function (event)
//{
//	this.canvas.removeEventListener("mousemove",this.mouseMoveBound);
//	this.canvas.removeEventListener("mouseup",this.mouseUpBound);
//}

//DrawingArea.prototype.getMousePos=function (canvas, evt)
//{
//	var rect = canvas.getBoundingClientRect();
//	return {
//		x: evt.clientX - rect.left,
//		y: evt.clientY - rect.top
//	};
//}