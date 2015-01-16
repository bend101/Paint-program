function ColourBar(title,arrayOfColourObjects)
{
	this.arrayOfColourObjects=arrayOfColourObjects;
	this.title=title;
	this.colour="black";


	this.selectedWell=null;
	this.colourListeners=[];

	this.colourBarDiv=document.createElement("div");
	this.colourBarDiv.className="colourBarDiv";
	var title=document.createElement("span");
	title.innerHTML=this.title;
	title.className="colourBarTitle";
	this.colourBarDiv.appendChild(title);
	for (var i=0;i<this.arrayOfColourObjects.length;i++)
	{
		var colourWell=new ColourWell(this.arrayOfColourObjects[i],this.onColourWellClicked.bind(this));
		this.colourBarDiv.appendChild(colourWell.getElement());
		if(i===0)
		{
			this.select(colourWell);
		}
	}
}

ColourBar.prototype.addColourListener=function(fnColourListener)
{
	this.colourListeners.push(fnColourListener);
}

ColourBar.prototype.removeColourListener=function(fnColourListener)
{
	var index=this.colourListeners.indexOf(fnColourListener);
	if (index!==-1)
	{
		this.colourListeners.splice(index,1);
	}
}

ColourBar.prototype.onColourWellClicked=function(colour,colourWell)
{
	console.log(colour);
	this.colour=colour.convertToString();
	this.select(colourWell);
	for (var i=0;i<this.colourListeners.length;i++)
	{
		this.colourListeners[i](colour);
	}

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