
function NewCanvasDialog(fnOnDialogClose)
{
	Dialog.call(this,"New",170,170,fnOnDialogClose);
	this.containerDiv=document.createElement("div");
	this.containerDiv.className="newContainerDiv";
	this.containerDiv.innerHTML=
		'<div class="newDiv">'+
		'			<span class="widthSpan">Width</span>'+
		'			<input id="width" class="inputNew">'+
		'		</div>'+
		'		<div class="newDiv">'+
		'			<span class="heightSpan">Height</span>'+
		'			<input id="height" class="inputNew">'+
		'		</div>'+
		'		<div class="newDiv">'+
		'			<span class=>Transparent</span>'+
		'			<input type="checkbox" id="transparent" class="transparentCheckBox">'+
		'		</div>';

	this.width=this.containerDiv.querySelector("#width");
	this.height=this.containerDiv.querySelector("#height");
	this.transparent=this.containerDiv.querySelector("#transparent");

	this.middeDiv.appendChild(this.containerDiv);
}
NewCanvasDialog.prototype=Object.create(Dialog.prototype);
NewCanvasDialog.prototype.constructor=NewCanvasDialog;

NewCanvasDialog.prototype.isTransparent=function()
{
	return this.transparent.checked;
}

NewCanvasDialog.prototype.widthValue=function()
{
	var width=parseInt(this.width.value);
	console.log(width);
	return width;
}

NewCanvasDialog.prototype.heightValue=function()
{
	 var height=parseInt(this.height.value);
	console.log(height);
	return height;
}

NewCanvasDialog.prototype.onOK=function()
{
	if (isNaN(this.widthValue())===true || isNaN(this.heightValue())===true || this.widthValue()<1 || this.heightValue()<1)
	{
		alert("Both width and height need to be integers greater than zero");
		return;
	}
	else
	{
		Dialog.prototype.onOK.call(this);
	}

}
