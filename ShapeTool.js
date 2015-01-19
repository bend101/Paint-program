function ShapeTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.optionsPanel=new ShapeOptionsPanel();
}
ShapeTool.prototype=Object.create(MouseTrackingTool.prototype);
ShapeTool.prototype.constructor=MouseTrackingTool;

ShapeTool.prototype.getOptionsPanel=function()
{
	return this.optionsPanel;
}

ShapeTool.prototype.dragStart=function(x,y)
{
	this.lineDrawable = new ShapeDrawable(x, y, this.optionsPanel.getLineWidth(), this.paintProgram.getForeGroundColour(), this.paintProgram.getBackgroundColour(), this.optionsPanel.isRect(), this.optionsPanel.isCircle(), this.optionsPanel.isFill());

	this.paintProgram.copyToBackgroundCanvas();
}
ShapeTool.prototype.drag=function(x,y)
{
	this.paintProgram.copyToForegroundCanvas();
	this.lineDrawable.setEndPosition(x,y);
	this.lineDrawable.draw(this.paintProgram.getCanvas());

}
ShapeTool.prototype.dragEnd=function(x,y)
{
	this.paintProgram.addDrawable(this.lineDrawable);
}