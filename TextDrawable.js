function TextDrawable(x,y,canvas,fontSize,font,foregroundColour,rotation)
{
	this.x=x;
	this.y=y;
	this.canvas=canvas;
	this.fontSize=fontSize;
	this.font=font;
	this.colour=foregroundColour;
	this.text="";
	this.rotation=rotation;

}
TextDrawable.prototype.setRotation=function(rotation)
{
	this.rotation=rotation;
	this.draw(this.canvas);
}


TextDrawable.prototype.setFontSize=function(fontSize)
{
	this.fontSize=fontSize;
	console.log(this.fontSize);
}

TextDrawable.prototype.setFont=function(font)
{
	this.font=font;
	console.log(this.font);
}

TextDrawable.prototype.onTextChange=function(text){
	this.text=text;
	this.draw(this.canvas);

}

TextDrawable.prototype.onColourChange=function(colour)
{
	this.colour=colour;
	this.draw(this.canvas);
}

TextDrawable.prototype.degreesToRadians=function(degree)
{
	return degree*Math.PI/180;
}


TextDrawable.prototype.draw=function(canvas)
{
	var radian=this.degreesToRadians(this.rotation);
	var ctx=canvas.getContext('2d');
	ctx.save();

	ctx.translate(this.x,this.y);
	ctx.rotate(radian);
	var fontSize=this.fontSize+"px";
	ctx.font=fontSize+" "+this.font;
	console.log(ctx.font);
	ctx.fillStyle=this.colour;
	ctx.fillText(this.text,0,0);
	ctx.restore();
}
