function Tool (name,image,cursor,fnToolChangeCallback,paintProgram)
{
	this.name=name;
	this.cursor=cursor;
	this.paintProgram=paintProgram;

	this.fnToolChangeCallback=fnToolChangeCallback;
	this.toolDiv=document.createElement("div");
	this.toolDiv.className="toolDiv";
	this.text=document.createTextNode(name);
	this.toolDiv.appendChild(this.text);
	this.image=document.createElement("img");
	this.image.src=image;
	this.image.className="toolIcon";
	this.toolDiv.appendChild(this.image);
	this.toolDiv.addEventListener("click",this.onToolClick.bind(this));

}

Tool.prototype.getName=function()
{
	return this.name;
}

Tool.prototype.getElement=function()
{
	return this.toolDiv;
}

Tool.prototype.onToolClick=function()
{
	this.fnToolChangeCallback(this)
}

Tool.prototype.setSelected=function(selected)
{
	if (selected===true)
	{
		this.paintProgram.getCanvas().style.cursor="url(" +this.cursor+")0 25,auto";
		this.toolDiv.style.outline = "blue solid";
	}
	else
	{
		this.toolDiv.style.outline = "";
	}
}

Tool.prototype.getOptionsPanel=function()
{
	var name = this.name;
	return {
		getElement: function()
		{
			var div = document.createElement("div");
			div.className="options-panel";
			div.appendChild(document.createTextNode(name));
			return div;
		}
	};
}

