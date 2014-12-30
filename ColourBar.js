function ColourBar(title,colourArray)
{
	this.colourArray=colourArray;
	this.title=title;

	this.selectedWell=null;

	this.colourBarDiv=document.createElement("div");
	this.colourBarDiv.className="colourBarDiv";
	var title=document.createElement("span");
	title.innerHTML=this.title;
	title.className="colourBarTitle";
	this.colourBarDiv.appendChild(title);
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
	this.colour=colour;
	this.select(colourWell);
}

ColourBar.prototype.getElement=function()
{
	return this.colourBarDiv;
}

ColourBar.prototype.select=function(colourWell)
{

	if (this.selectedWell!==null)   //if there is a selected cell
	{
		this.selectedWell.setSelected(false);
	}
	this.selectedWell=colourWell;
	this.selectedWell.setSelected(true);
}