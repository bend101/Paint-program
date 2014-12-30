function ShapeTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
}
ShapeTool.prototype=Object.create(MouseTrackingTool.prototype);
ShapeTool.prototype.constructor=MouseTrackingTool;



ShapeTool.prototype.dragStart=function(x,y)
{
	this.context.beginPath();
	this.context.moveTo(x,y);
	this.upperLeftX=x;
	this.upperLeftY=y;
}
ShapeTool.prototype.drag=function(x,y)
{


}
ShapeTool.prototype.dragEnd=function(x,y)
{
	this.context.rect(this.upperLeftX,this.upperLeftY,(x-this.upperLeftX),(y-this.upperLeftY));
	this.context.stroke();
}