function ColourBar(colourArray,fnColourChangeListener)
{
	this.colourArray=colourArray;
	this.colourChangeListener=fnColourChangeListener;
	this.selectedWell=null;

	this.colourBarDiv=document.createElement("div");
	this.colourBarDiv.className="colourBarDiv";
	for (var i=0;i<this.colourArray.length;i++)
	{
		var colourWell=new ColourWell(this.colourArray[i],this.onColourWellClicked.bind(this));
		this.colourBarDiv.appendChild(colourWell.getElement());
		if(i===0)
		{
			this.select(colourWell);
		}

	}

}

ColourBar.prototype.onColourWellClicked=function(colour,colourWell)
{

	this.select(colourWell);
}

ColourBar.prototype.getElement=function()
{
	return this.colourBarDiv;
}

ColourBar.prototype.select=function(colourWell)
{
	this.colourChangeListener(colourWell.getColour());
	if (this.selectedWell!==null)   //if there is a selected cell
	{
		this.selectedWell.setSelected(false);
	}
	this.selectedWell=colourWell;
	this.selectedWell.setSelected(true);
}