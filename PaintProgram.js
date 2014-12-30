function PaintProgram()
{
	this.foregroundColour="black";
	this.bottomBar=document.querySelector(".bottomBar");
	this.leftSideBar=document.querySelector(".sideBar");
	this.optionsArea=document.querySelector(".topBar");
	this.colourBar= new ColourBar("Foreground",["black","red","blue","green"]);
	this.colourBarBackground= new ColourBar("Background",["black","red","blue","green"]);
	this.drawingArea=new DrawingArea(this);
	this.drawingArea.createCanvas(2000,2000);
	this.toolHeader=document.createElement("div");
	this.toolHeader.innerHTML="Tools";
	this.toolHeader.className="toolHeader";
	this.leftSideBar.appendChild(this.toolHeader);
	this.sideBar= new Sidebar(this.onChangeInTool.bind(this),this);
	this.leftSideBar.appendChild(this.sideBar.getElement());
	this.bottomBar.appendChild(this.colourBar.getElement());
	this.bottomBar.appendChild(this.colourBarBackground.getElement());
	this.mainDiv=document.querySelector(".mainDiv");
	this.toolHeader=document.createElement("div");
	this.toolHeader.innerHTML="Tools";
	this.toolHeader.className="toolHeader";

	this.mainDiv.appendChild(this.drawingArea.getElement());
}
//
//PaintProgram.prototype.onChangeInColourBar=function(colour)
//{
//	this.foregroundColour=colour;
//}

PaintProgram.prototype.getForeGroundColour=function()
{
	return this.colourBar.colour;
}

PaintProgram.prototype.getBackgroundColour=function()
{
	return this.colourBarBackground.colour;
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







