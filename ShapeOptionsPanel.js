function ShapeOptionsPanel()
{
	this.containerDiv=document.createElement("div");
	this.containerDiv.innerHTML=
		'<div>'+

		'	<div class="containerRectangleCircle">'+
			'		<span class="stroke-fill-span">Rectangle</span>' +
			'<input type="checkbox" id="checkRect">'+
			'		<span class="stroke-fill-span">Circle</span>' +
			'<input type="checkbox" id="checkCircle">'+
			'	</div>'+
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
		'</div>';
	this.checkboxRect=this.containerDiv.querySelector("#checkRect");
	this.checkboxCircle=this.containerDiv.querySelector("#checkCircle");


	this.dropDownBox=this.containerDiv.querySelector(".dropDownBox");
}

ShapeOptionsPanel.prototype.getElement=function()
{
	return this.containerDiv;
}

ShapeOptionsPanel.prototype.isRect=function()
{
	return this.checkboxRect.checked;
}

ShapeOptionsPanel.prototype.isCircle=function()
{
	return this.checkboxCircle.checked;
	console.log(this.checkboxCircle.checked);
}

ShapeOptionsPanel.prototype.getLineWidth=function()
{
	return this.dropDownBox.options[this.dropDownBox.selectedIndex].value
}