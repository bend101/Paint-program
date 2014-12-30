function DrawTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.optionsPanel=new DrawOptionsPanel();


}
DrawTool.prototype=Object.create(MouseTrackingTool.prototype);
DrawTool.prototype.constructor=MouseTrackingTool;
//
//DrawTool.prototype.onToolChange=function()
//{
//}
DrawTool.prototype.getOptionsPanel=function()
{
	return this.optionsPanel;
}
DrawTool.prototype.dragStart=function(x,y)
{
	this.context.beginPath();
	this.context.moveTo(x,y);   //moves drawing tool to start position, doesnt draw a line
	this.context.lineWidth=this.optionsPanel.getLineWidth();

}
DrawTool.prototype.drag=function(x,y)
{
	this.context.lineTo(x,y);
	if (this.optionsPanel.isStroke()===true)
	{
		this.context.strokeStyle = this.paintProgram.getForeGroundColour();
		this.context.stroke();
	}

}

DrawTool.prototype.dragEnd=function(x,y)
{
	if (this.optionsPanel.isFill()===true)
	{
		this.context.fillStyle = this.paintProgram.getBackgroundColour();
		this.context.fill();
	}
}
