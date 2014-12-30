function Sidebar (fnOnChangeInTool, paintProgram)
{
	this.fnOnChangeInTool=fnOnChangeInTool;
	this.sideBarDiv=document.createElement("div");
	this.paintProgram=paintProgram;
	this.selectedTool=null;

	var tool=new DrawTool("Draw", "images/pencil.png", "images/pencilCursor.png",this.onToolChange.bind(this),this.paintProgram);
	this.sideBarDiv.appendChild(tool.getElement());
	this.select(tool);

	tool=new ShapeTool("Shape", "images/cross.png", "images/cross.png",this.onToolChange.bind(this),this.paintProgram);
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
