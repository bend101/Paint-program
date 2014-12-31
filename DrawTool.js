function DrawTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.optionsPanel=new DrawOptionsPanel();
	this.points=[];
	this.radius=15;


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
	this.paintProgram.copyToBackgroundCanvas();


	if (this.optionsPanel.isCircles()===true)
	{
		this.context.save();
		this.points=[];
		this.points.push(
			{
				 x:x,
				 y:y,
				radius: this.getRandomInt(10,30),
				opacity: Math.random()
			}
		);
	}

}
DrawTool.prototype.drag=function(x,y)
{
	//this.context.clearRect ( 0 , 0 , this.canvas.width, this.canvas.height );
	this.paintProgram.copyToForegroundCanvas();

	this.context.lineTo(x,y);
	if (this.optionsPanel.isStroke()===true)
	{
		this.context.strokeStyle = this.paintProgram.getForeGroundColour();
		this.context.stroke();
	}
	if (this.optionsPanel.isFill()===true)
	{
		this.context.fillStyle = this.paintProgram.getBackgroundColour();
		this.context.fill();
	}

	if (this.optionsPanel.isCircles()===true)
	{
		this.points.push(
			{
				x:x,
				y:y,
				radius: this.getRandomInt(5,20),
				opacity: Math.random()
			}
		);

		for (var i=0; i<this.points.length;i++)
		{
			this.context.beginPath();
			this.context.fillStyle = this.paintProgram.getForeGroundColour();
			this.context.globalAlpha=this.points[i].opacity;
			this.context.arc(
				this.points[i].x,this.points[i].y,this.points[i].radius,false,Math.PI*2,false
			);
			this.context.fill();
		}
	}



}

DrawTool.prototype.dragEnd=function(x,y)
{
	if (this.optionsPanel.isStroke()===true && this.optionsPanel.isFill()===true)
	{
		this.context.closePath();
		this.context.stroke();
		this.context.restore();
	}
}


DrawTool.prototype.getRandomInt=function(min,max)
{
	return Math.floor(Math.random()*(max-min+1))+min;
}
