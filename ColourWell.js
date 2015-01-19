function ColourWell(coloursObject,fnColourChangeCallback)
{
	this.colourObject=coloursObject;
	this.colour=this.colourObject.convertToString();
	this.fnColourChangeCallBack=fnColourChangeCallback;
	this.checkeredDiv=document.createElement("div");
	this.checkeredDiv.className="checkeredDiv";


	this.containingDiv=document.createElement("div");
	this.containingDiv.className="containingDivColourWell";
	this.containingDiv.appendChild(this.checkeredDiv);

	this.colourWellDiv=document.createElement("div");
	this.colourWellDiv.className="colourWell";
	this.colourWellDiv.style.backgroundColor=coloursObject.convertToString();
	this.containingDiv.appendChild(this.colourWellDiv);
	this.colourWellDiv.addEventListener("click",this.onClick.bind(this));
	this.colourWellDiv.addEventListener("dblclick",this.onColourWellDoubleClick.bind(this));
}

ColourWell.prototype.onClick=function(event)
{
	console.log(this.colourObject);
	this.fnColourChangeCallBack(this.colourObject, this);
}
ColourWell.prototype.getColour=function()
{
	return this.colourObject;
}


ColourWell.prototype.getElement=function()
{
	return this.containingDiv;
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
	var dialog=new ColourPickerDialog(this.onDialogClose.bind(this),this.colourObject);
}

ColourWell.prototype.onDialogClose=function(dialog,returnCode)
{
	if(returnCode===Dialog.OK)
	{
		this.colour=dialog.getColourObject();
		this.colourWellDiv.style.backgroundColor=this.colour.convertToString();

		this.fnColourChangeCallBack(this.colour, this);
	}
}




