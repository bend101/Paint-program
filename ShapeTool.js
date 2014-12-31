function ShapeTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
}
ShapeTool.prototype=Object.create(MouseTrackingTool.prototype);
ShapeTool.prototype.constructor=MouseTrackingTool;

ShapeTool.prototype.dragStart=function(x,y)
{
//	this.context.clearRect ( 0 , 0 , this.canvas.width, this.canvas.height );
	this.paintProgram.copyToBackgroundCanvas();
	this.upperLeftX=x;
	this.upperLeftY=y;
}
ShapeTool.prototype.drag=function(x,y)
{

	this.paintProgram.copyToForegroundCanvas();
	this.context.beginPath();
	this.context.rect(this.upperLeftX,this.upperLeftY,(x-this.upperLeftX),(y-this.upperLeftY));
	this.context.stroke();
}
ShapeTool.prototype.dragEnd=function(x,y)
{

}