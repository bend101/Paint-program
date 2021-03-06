function Sidebar (fnOnChangeInTool, paintProgram)
{
	this.fnOnChangeInTool=fnOnChangeInTool;
	this.sideBarDiv=document.createElement("div");
	this.paintProgram=paintProgram;
	this.selectedTool=null;

	this.drawTool=new DrawTool("Draw", "images/pencil.png", "images/pencilCursor.png",this.onToolChange.bind(this),this.paintProgram);
	this.sideBarDiv.appendChild(this.drawTool.getElement());
	this.select(this.drawTool);


	tool=new ShapeTool("Shape", "images/shapes.png", "images/cross.png",this.onToolChange.bind(this),this.paintProgram);
	this.sideBarDiv.appendChild(tool.getElement());

	tool=new SpecialEffectsTool("Special Effects", "images/fxEffects.png", "images/pencilCursor.png",this.onToolChange.bind(this),this.paintProgram);
	this.sideBarDiv.appendChild(tool.getElement());

	tool=new TextTool("Text", "images/text.png", "text",this.onToolChange.bind(this),this.paintProgram);
	this.sideBarDiv.appendChild(tool.getElement());

}

Sidebar.prototype.getElement=function()
{
	return this.sideBarDiv;
}

Sidebar.prototype.onToolChange=function(tool)
{
	this.select(tool);
}

Sidebar.prototype.select=function(tool)
{
	this.fnOnChangeInTool(tool);
	if (this.selectedTool!==null)   //if there is a selected cell
	{
		this.selectedTool.setSelected(false);
	}
	this.selectedTool=tool;
	this.selectedTool.setSelected(true);
}
