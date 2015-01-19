function TextOptionsPanel(textTool)
{
	this.textTool=textTool;
	this.containerDiv=document.createElement("div");
	this.containerDiv.innerHTML=
		'<div>'+

			'	Font Size'+
		'	<div style="display: inline-block;">'+
		'		<select id="fontSize" class="dropDownBox">'+
		'			<option value="8">8</option>'+
		'			<option value="9">9</option>'+
		'			<option value="10">10</option>'+
		'			<option value="11">11</option>'+
		'			<option value="12">12</option>'+
		'			<option value="14">14</option>'+
		'			<option value="16">16</option>'+
		'			<option value="18">18</option>'+
		'			<option value="20">20</option>'+
		'			<option value="22">22</option>'+
		'			<option value="24">24</option>'+
		'			<option value="26">26</option>'+
		'			<option value="28">28</option>'+
		'			<option value="30">30</option>'+
		'			<option value="32">32</option>'+
		'		</select>'+
		'	</div>'+

			'	Font'+
			'	<div style="display: inline-block;">'+
			'		<select id="font" class="dropDownBox">'+
				'<optgroup style="font-family:arial">'+
				'	<option>Arial</option>'+
				'</optgroup>'+

				'<optgroup style="font-family:times new roman">'+
				'	<option>Times New Roman</option>'+
				'</optgroup>'+

				'<optgroup style="font-family:calibri">'+
				'	<option>Calibri</option>'+
				'</optgroup>'+

				'<optgroup style="font-family:comic sans ms">'+
				'	<option>Comic Sans MS</option>'+
				'</optgroup>'+

				'<optgroup style="font-family:impact">'+
				'	<option>Impact</option>'+
				'</optgroup>'+

			'		</select>'+
			'	</div>'+

			'<textarea class="textDiv"></textarea>'+

		'	Rotation'+
		'	<div style="display: inline-block;">'+
		'		<select id="Rotation" class="dropDownBox">'+
		'		</select>'+
		'	</div>'+
		'</div>';
	this.checkboxFill=this.containerDiv.querySelector("#checkFill");
	this.checkbox=this.containerDiv.querySelector("#checkStroke");

	this.textDiv=this.containerDiv.querySelector(".textDiv");
	this.textDiv.addEventListener("input",this.onTextChange.bind(this));


	this.fontSizedropDownBox=this.containerDiv.querySelector("#fontSize");
	this.fontSizedropDownBox.addEventListener("change",this.onFontSizeChange.bind(this));

	this.fontDropDownBox=this.containerDiv.querySelector("#font");
	this.fontDropDownBox.addEventListener("change",this.onFontChange.bind(this));

	this.rotationDropDownBox=this.containerDiv.querySelector("#Rotation");
	this.addOptionsToSelect();
	this.rotationDropDownBox.addEventListener("change",this.onRotationChange.bind(this));
}

TextOptionsPanel.prototype.addOptionsToSelect=function()
{
	for(var i=0;i<360;i=i+10)
	{
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		this.rotationDropDownBox.appendChild(opt);
	}
}

TextOptionsPanel.prototype.getElement=function()
{
	return this.containerDiv;
}

TextOptionsPanel.prototype.onFontSizeChange=function()
{
	if (this.textTool.drawable!==null)
	{
		this.textTool.drawable.setFontSize(this.fontSizedropDownBox.options[this.fontSizedropDownBox.selectedIndex].value);
		this.textTool.onTextChange(this.textDiv.value);
	}
}

TextOptionsPanel.prototype.onFontChange=function()
{
	if (this.textTool.drawable!==null)
	{
		this.textTool.drawable.setFont(this.fontDropDownBox.options[this.fontDropDownBox.selectedIndex].value);
		this.textTool.onTextChange(this.textDiv.value);
		this.textDiv.focus();
	}
}

TextOptionsPanel.prototype.onRotationChange=function()
{
	if (this.textTool.drawable!==null)
	{
		this.textTool.drawable.setRotation(this.rotationDropDownBox.options[this.rotationDropDownBox.selectedIndex].value);
		this.textTool.onTextChange(this.textDiv.value);
		this.textDiv.focus();
	}
}

TextOptionsPanel.prototype.getRotation=function()
{
	return this.rotationDropDownBox.options[this.rotationDropDownBox.selectedIndex].value;
}

TextOptionsPanel.prototype.getFontSize=function()
{
	return this.fontSizedropDownBox.options[this.fontSizedropDownBox.selectedIndex].value;
}

TextOptionsPanel.prototype.getFont=function()
{
	return this.fontDropDownBox.options[this.fontDropDownBox.selectedIndex].value;
}

TextOptionsPanel.prototype.onTextChange=function()
{
	this.textTool.onTextChange(this.textDiv.value);
	console.log(this.textDiv.value);
}