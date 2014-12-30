
function ColourPickerDialog(fnOnDialogClose)
{
	Dialog.call(this,"Colour Picker",217,231,fnOnDialogClose);
	this.colourPicker=new ColourPicker(null);

	this.middeDiv.appendChild(this.colourPicker.getElement());
}
ColourPickerDialog.prototype=Object.create(Dialog.prototype);
ColourPickerDialog.prototype.constructor=ColourPickerDialog;

ColourPickerDialog.prototype.getColourString=function()
{
	return this.colourPicker.getSelectedColourString();
}

