function FxCirclesDrawable(startX,startY,foregroundColour,isCircles)
{
	this.FxCirclesDrawableArray=[];
	this.addToArray(startX,startY);
	this.startX=startX;
	this.startY=startY;
	this.foregroundColour=foregroundColour;
	this.isCircles=isCircles;
}

FxCirclesDrawable.prototype.addToArray=function(x,y)
{
	if(this.isCircles===true)
	{
		var lineObject = {
			x: x,
			y: y,
			radius: this.getRandomInt(10,30),
			opacity: Math.random()

		};
		this.FxCirclesDrawableArray.push(lineObject);
	}
}

FxCirclesDrawable.prototype.draw=function(canvas)
{
	var context=canvas.getContext('2d');


	if (this.isCircles===true)
	{
		context.fillStyle = this.foregroundColour;

		for (var i = 0; i < this.FxCirclesDrawableArray.length; i++)
		{
			context.beginPath();
			context.globalAlpha=this.FxCirclesDrawableArray[i].opacity;
			context.arc(
				this.FxCirclesDrawableArray[i].x,this.FxCirclesDrawableArray[i].y,
				this.FxCirclesDrawableArray[i].radius,0,Math.PI*2,false
			);
			context.fill();

		}
		context.globalAlpha=1;
	}
}

FxCirclesDrawable.prototype.getRandomInt=function(min,max)
{
	return Math.floor(Math.random()*(max-min+1))+min;
}