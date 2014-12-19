function FillTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
}
FillTool.prototype=Object.create(MouseTrackingTool.prototype);
FillTool.prototype.constructor=MouseTrackingTool;

FillTool.prototype.render=function ()
{
	this.context.fillStyle = this.paintProgram.getColour();
	this.context.fill();
}