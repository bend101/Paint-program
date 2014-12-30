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
	var mousePos=Utils.getMousePos(this.canvas,event);
	this.mouseMoveBound= this.onMouseMove.bind(this);
	this.mouseUpBound= this.onMouseUp.bind(this);
	this.canvas.addEventListener("mousemove",this.mouseMoveBound);
	this.canvas.addEventListener("mouseup",this.mouseUpBound);
	this.dragStart(mousePos.x,mousePos.y);
}

MouseTrackingTool.prototype.onMouseMove=function (event)
{
	var mousePos=Utils.getMousePos(this.canvas,event);
	this.drag(mousePos.x,mousePos.y);
}

MouseTrackingTool.prototype.onMouseUp=function (event)
{
	var mousePos=Utils.getMousePos(this.canvas,event);
	this.canvas.removeEventListener("mousemove",this.mouseMoveBound);
	this.canvas.removeEventListener("mouseup",this.mouseUpBound);
	this.dragEnd(mousePos.x,mousePos.y);
}

// methods that must be overridden by subsclasses:
MouseTrackingTool.prototype.dragStart=function(x,y)
{
}

MouseTrackingTool.prototype.drag=function(x,y)
{
}

MouseTrackingTool.prototype.dragEnd=function(x,y)
{

}