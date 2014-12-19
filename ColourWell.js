function ColourWell(colour,fnColourChangeCallback)
{
	this.colour=colour;
	this.fnColourChangeCallBack=fnColourChangeCallback;
	this.colourWellDiv=document.createElement("div");
	this.colourWellDiv.className="colourWell";
	this.colourWellDiv.style.backgroundColor=colour;
	this.colourWellDiv.addEventListener("click",this.onClick.bind(this));
	this.colourWellDiv.addEventListener("dblclick",this.onColourWellDoubleClick.bind(this));
}

ColourWell.prototype.onClick=function(event)
{
	this.fnColourChangeCallBack(this.colour, this);
}
ColourWell.prototype.getColour=function()
{
	return this.colour;
}


ColourWell.prototype.getElement=function()
{
	return this.colourWellDiv;
}

ColourWell.prototype.setSelected=function(selected)
{
	if (selected===true)
	{
		this.colourWellDiv.style.outline = "blue solid";
	}
	else
	{
		this.colourWellDiv.style.outline = "";
	}
}

ColourWell.prototype.onColourWellDoubleClick=function()
{
	console.log("hello");
	var dialog=new ColourPickerDialog(this.onDialogClose.bind(this));
//	document.body.appendChild(dialog);
}

ColourWell.prototype.onDialogClose=function(dialog,returnCode)
{
	if(returnCode===Dialog.OK)
	{
		this.colour=dialog.getColourString();
		this.colourWellDiv.style.backgroundColor=this.colour;

		this.fnColourChangeCallBack(this.colour, this);
	}
}




