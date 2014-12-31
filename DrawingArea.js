function DrawingArea(paintProgram)
{
	this.paintProgram=paintProgram;
	this.drawingAreaDiv=document.createElement("div");
	this.drawingAreaDiv.className="drawingAreaDiv";
}

DrawingArea.prototype.createCanvas=function(width,height)
{
	this.canvas=document.createElement("canvas");
	this.canvas.className="canvas";
	this.canvas.width=width;
	this.canvas.height=height;

	this.backgroundCanvas=document.createElement("canvas");
	this.backgroundCanvas.className="backgroundCanvas";
	this.backgroundCanvas.width=width;
	this.backgroundCanvas.height=height;

	this.drawingAreaDiv.appendChild(this.canvas);
}

DrawingArea.prototype.copyToBackgroundCanvas=function()
{
	var backCtx = this.backgroundCanvas.getContext('2d');
	backCtx.globalAlpha=1;
	backCtx.clearRect(0,0, this.backgroundCanvas.width, this.backgroundCanvas.height);
	backCtx.drawImage(this.canvas, 0,0);
}

DrawingArea.prototype.copyToForegroundCanvas=function()
{
	var foreground = this.canvas.getContext('2d');
	foreground.globalAlpha=1;
	foreground.clearRect(0,0, this.canvas.width, this.canvas.height);
	foreground.drawImage(this.backgroundCanvas, 0,0);
}

DrawingArea.prototype.getElement=function()
{
	return this.drawingAreaDiv;
}

DrawingArea.prototype.getCanvas=function()
{
	return this.canvas;
}
