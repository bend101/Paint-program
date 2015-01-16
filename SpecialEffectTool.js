function SpecialEffectsTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	MouseTrackingTool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.optionsPanel=new SpecialEffectsOptionsPanel();
	this.points=[];
	this.radius=15;
}

SpecialEffectsTool.prototype=Object.create(MouseTrackingTool.prototype);
SpecialEffectsTool.prototype.constructor=MouseTrackingTool;

SpecialEffectsTool.prototype.getOptionsPanel=function()
{
	return this.optionsPanel;
}
SpecialEffectsTool.prototype.dragStart=function(x,y)
{
	this.drawable = new FxCirclesDrawable(x, y,this.paintProgram.getForeGroundColour(), true);
	this.paintProgram.copyToBackgroundCanvas();
}
SpecialEffectsTool.prototype.drag=function(x,y)
{
	this.paintProgram.copyToForegroundCanvas();
	if (this.optionsPanel.isCircles()===true)
	{
		this.drawable.addToArray(x,y);
		this.drawable.draw(this.paintProgram.getCanvas());
	}
}

SpecialEffectsTool.prototype.dragEnd=function(x,y)
{
		this.paintProgram.addDrawable(this.drawable);
}

SpecialEffectsTool.prototype.getRandomInt=function(min,max)
{
	return Math.floor(Math.random()*(max-min+1))+min;
}