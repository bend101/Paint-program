function TextTool(name,image,cursor,fnToolChangeCallback,paintProgram)
{
	Tool.call(this, name,image,cursor,fnToolChangeCallback,paintProgram);
	this.canvas = this.paintProgram.getCanvas();
	this.context= this.canvas.getContext("2d");
	this.optionsPanel=new TextOptionsPanel(this);
	this.x=null;
	this.y=null;
	this.paintProgram=paintProgram;
	this.drawable=null;
}
TextTool.prototype=Object.create(Tool.prototype);
TextTool.prototype.constructor=Tool;

TextTool.prototype.getOptionsPanel=function()
{
	return this.optionsPanel;
}

TextTool.prototype.setSelected=function(selected)
{
	Tool.prototype.setSelected.call(this,selected);
	if(selected===true)
	{
		this.mouseDownBound=this.onMouseDown.bind(this);
		this.canvas.addEventListener("mousedown",this.mouseDownBound);
		this.colourChangeBound=this.onColourChange.bind(this);
		this.paintProgram.getForegroundColourBar().addColourListener(this.colourChangeBound);
	}
	else
	{
		this.canvas.removeEventListener("mousedown",this.mouseDownBound);
		this.paintProgram.getForegroundColourBar().removeColourListener(this.colourChangeBound);
	}
}



TextTool.prototype.onMouseDown=function(event)
{
	event.preventDefault();
	this.optionsPanel.textDiv.value="";
	this.optionsPanel.textDiv.focus();
	var mousePos=Utils.getMousePos(this.canvas,event);
	this.x=mousePos.x;
	this.y=mousePos.y;
	if (this.drawable!==null)
	{
		this.paintProgram.addDrawable(this.drawable);
	}
	this.drawable=new TextDrawable(this.x,this.y,this.canvas,this.optionsPanel.getFontSize(),this.optionsPanel.getFont(),this.paintProgram.getForeGroundColour(),this.optionsPanel.getRotation());

	this.paintProgram.copyToBackgroundCanvas();
}

TextTool.prototype.onColourChange=function(colourObject)
{
	var colour=colourObject.convertToString();
	this.drawable.onColourChange(colour);
	this.optionsPanel.textDiv.focus();
}

TextTool.prototype.onTextChange=function(text)
{
	this.paintProgram.copyToForegroundCanvas();
	this.drawable.onTextChange(text)
}

