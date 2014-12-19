function MouseTrackingTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	Tool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.canvas = this.paintProgram.getCanvas();
	this.context= this.canvas.getContext("2d");
}
MouseTrackingTool.prototype=Object.create(Tool.prototype);
MouseTrackingTool.prototype.constructor=MouseTrackingTool;

MouseTrackingTool.prototype.setSelected=function(selected)
{
	Tool.prototype.setSelected.call(this,selected);
	if(selected===true)
	{
		this.mouseDownBound=this.onMouseDown.bind(this);
		this.canvas.addEventListener("mousedown",this.mouseDownBound);
	}
	else
	{
		this.canvas.removeEventListener("mousedown",this.mouseDownBound);
	}
}

MouseTrackingTool.prototype.onMouseDown=function (event)
{
	console.log(event);
	this.context.beginPath();
	var mousePos=Utils.getMousePos(this.canvas,event);
	this.context.moveTo(mousePos.x,mousePos.y);   //moves drawing tool to start position, doesnt draw a line
	this.mouseMoveBound= this.onMouseMove.bind(this);
	this.mouseUpBound= this.onMouseUp.bind(this);
	this.canvas.addEventListener("mousemove",this.mouseMoveBound);
	this.canvas.addEventListener("mouseup",this.mouseUpBound);
}

MouseTrackingTool.prototype.onMouseMove=function (event)
{
	var mousePos=Utils.getMousePos(this.canvas,event);
	this.context.lineTo(mousePos.x,mousePos.y);
	this.render();  //render is abstract function exists in subclasses
}

MouseTrackingTool.prototype.onMouseUp=function (event)
{
	this.canvas.removeEventListener("mousemove",this.mouseMoveBound);
	this.canvas.removeEventListener("mouseup",this.mouseUpBound);
}