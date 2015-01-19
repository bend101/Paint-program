function DrawOptionsPanel()
{
	this.containerDiv=document.createElement("div");
	this.containerDiv.innerHTML=
		'<div>'+

		'	<div class="containerStrokeFill">'+
			'		<span class="stroke-fill-span">Stroke</span>' +
				'<input type="checkbox" id="checkStroke">'+
			'		<span class="stroke-fill-span">Fill</span>' +
				'<input type="checkbox" id="checkFill">'+
		'	</div>'+
		'	<div class="containerLineWidth">'+
			'	Line Width'+
			'	<div style="display: inline-block;">'+
			'		<select id="dropDownBox" class="dropDownBox">'+
			'			<option value="1">1</option>'+
			'			<option value="2">2</option>'+
			'			<option value="3">3</option>'+
			'			<option value="4">4</option>'+
			'			<option value="5">5</option>'+
			'			<option value="6">6</option>'+
			'			<option value="7">7</option>'+
			'			<option value="8">8</option>'+
			'			<option value="9">9</option>'+
			'			<option value="10">10</option>'+
			'		</select>'+
			'	</div>'+
		'	</div>'+
		'</div>';
	this.checkboxFill=this.containerDiv.querySelector("#checkFill");
	this.checkbox=this.containerDiv.querySelector("#checkStroke");
	this.checkbox.checked=true;

	this.dropDownBox=this.containerDiv.querySelector(".dropDownBox");
}

DrawOptionsPanel.prototype.getElement=function()
{
	return this.containerDiv;
}

DrawOptionsPanel.prototype.isFill=function()
{
	return this.checkboxFill.checked;
}

DrawOptionsPanel.prototype.isStroke=function()
{
	return this.checkbox.checked;
}

DrawOptionsPanel.prototype.getLineWidth=function()
{
	return this.dropDownBox.options[this.dropDownBox.selectedIndex].value

}