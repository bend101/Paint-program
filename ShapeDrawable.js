function ShapeDrawable(startX,startY,lineWidth,foregroundColour,backgroundColour,isRect,isCircle)
{
	this.startX=startX;
	this.startY=startY;
	this.endY=startY;
	this.endX=startX;
	this.foregroundColour=foregroundColour;
	this.backgroundColour=backgroundColour;
	this.isRect=isRect;
	this.isCircle=isCircle;
	this.lineWidth=lineWidth;
}

ShapeDrawable.prototype.setEndPosition=function(x,y)
{
	this.endX=x;
	this.endY=y;
}

ShapeDrawable.prototype.draw=function(canvas)
{
	var context=canvas.getContext('2d');
	context.beginPath();

	context.strokeStyle = this.foregroundColour;
	context.lineWidth=this.lineWidth;

	if (this.isRect===true)
	{
		context.rect(this.startX,this.startY,(this.endX-this.startX),(this.endY-this.startY));
	}
	else if (this.isCircle===true)
	{
		var radius=(this.endX-this.startX)/2;
		if (radius<0)
		{
			radius=radius*-1;
		}
		context.arc((this.startX+this.endX)/2, (this.startY+this.endY)/2,radius , 0, 2 * Math.PI, false);
	}
	context.stroke();

}