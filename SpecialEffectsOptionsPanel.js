function SpecialEffectsOptionsPanel()
{
	this.containerDiv=document.createElement("div");
	this.checkbox=document.createElement("input");
	this.checkbox.type="checkbox";
		this.strokeText=document.createTextNode("Circles");
	this.containerDiv.appendChild(this.strokeText);
	this.containerDiv.appendChild(this.checkbox);


}

SpecialEffectsOptionsPanel.prototype.getElement=function()
{
	return this.containerDiv;
}



SpecialEffectsOptionsPanel.prototype.isCircles=function()
{
	return this.checkbox.checked;
}


