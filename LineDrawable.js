function LineDrawable(startX,startY,lineWidth,foregroundColour,backgroundColour,isStroke,isFill)
{
	this.shapeDrawableArray=[];
	this.addToArray(startX,startY);
	this.startX=startX;
	this.startY=startY;
	this.foregroundColour=foregroundColour;
	this.backgroundColour=backgroundColour;
	this.isStroke=isStroke;
	this.isFill=isFill;
	this.lineWidth=lineWidth;
}

LineDrawable.prototype.addToArray=function(x,y)
{
		var lineObject = {
			x: x,
			y: y,

		};
		this.shapeDrawableArray.push(lineObject);
}

LineDrawable.prototype.draw=function(canvas)
{
	var context=canvas.getContext('2d');
	context.beginPath();
	context.moveTo(this.startX,this.startY);

	if (this.isStroke===true)
	{
		context.strokeStyle = this.foregroundColour;
		console.log(this.foregroundColour);
		context.lineWidth=this.lineWidth;

		for (var i = 0; i < this.shapeDrawableArray.length; i++)
		{
			context.lineTo(this.shapeDrawableArray[i].x, this.shapeDrawableArray[i].y);
		}
		if (this.isFill=== true)
		{
			context.closePath();
			context.stroke();
		}
		context.stroke();
	}
	if (this.isFill===true)
	{

		context.fillStyle = this.backgroundColour;
		context.lineWidth=this.lineWidth;
		for (var i = 0; i < this.shapeDrawableArray.length; i++)
		{

			context.lineTo(this.shapeDrawableArray[i].x, this.shapeDrawableArray[i].y);

		}
		context.fill();
	}

}