function DrawTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.optionsPanel=new DrawOptionsPanel();
}
DrawTool.prototype=Object.create(MouseTrackingTool.prototype);
DrawTool.prototype.constructor=MouseTrackingTool;

DrawTool.prototype.getOptionsPanel=function()
{
	return this.optionsPanel;
}
DrawTool.prototype.dragStart=function(x,y)
{
	this.lineDrawable = new LineDrawable(x, y, this.optionsPanel.getLineWidth(), this.paintProgram.getForeGroundColour(), this.paintProgram.getBackgroundColour(), this.optionsPanel.isStroke(), this.optionsPanel.isFill());

	this.paintProgram.copyToBackgroundCanvas();

}
DrawTool.prototype.drag=function(x,y)
{
	this.paintProgram.copyToForegroundCanvas();

	if (this.optionsPanel.isFill()===true || this.optionsPanel.isStroke()===true)
	{
		this.lineDrawable.addToArray(x,y);
		this.lineDrawable.draw(this.paintProgram.getCanvas());
	}
}

DrawTool.prototype.dragEnd=function(x,y)
{
	this.paintProgram.addDrawable(this.lineDrawable);
}

