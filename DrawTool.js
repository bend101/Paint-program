function DrawTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
}
DrawTool.prototype=Object.create(MouseTrackingTool.prototype);
DrawTool.prototype.constructor=MouseTrackingTool;

DrawTool.prototype.render=function ()
{
	this.context.strokeStyle = this.paintProgram.getColour();
	this.context.stroke();
}

