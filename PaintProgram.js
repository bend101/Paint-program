function PaintProgram()
{
	this.foregroundColour="black";
	this.bottomBar=document.querySelector(".bottomBar");
	this.leftSideBar=document.querySelector(".sideBar");
	this.optionsArea=document.querySelector(".topBar");
	this.colourBar= new ColourBar(["black","red","blue","green"],this.onChangeInColourBar.bind(this));
	this.drawingArea=new DrawingArea(this);
	this.drawingArea.createCanvas(2000,2000);
	this.sideBar= new Sidebar(this.onChangeInTool.bind(this),this);
	this.leftSideBar.appendChild(this.sideBar.getElement());
	this.bottomBar.appendChild(this.colourBar.getElement());
	this.mainDiv=document.querySelector(".mainDiv");

	this.mainDiv.appendChild(this.drawingArea.getElement());


}

PaintProgram.prototype.onChangeInColourBar=function(colour)
{
	this.foregroundColour=colour;
}

PaintProgram.prototype.getColour=function()
{
	return this.foregroundColour;
}

PaintProgram.prototype.onChangeInTool=function(tool)
{
	this.tool=tool;
	this.optionsArea.innerHTML="";
	this.optionsArea.appendChild(this.tool.getOptionsPanel().getElement());

}

PaintProgram.prototype.getTool=function()
{
	return this.tool;
}

PaintProgram.prototype.getCanvas=function()
{
return this.drawingArea.getCanvas();
}







