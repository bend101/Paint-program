
function ColourPickerDialog(fnOnDialogClose,colour)
{
	Dialog.call(this,"Colour Picker",217,231,fnOnDialogClose);
	this.colourPicker=new ColourPicker(null,colour);

	this.middeDiv.appendChild(this.colourPicker.getElement());
}
ColourPickerDialog.prototype=Object.create(Dialog.prototype);
ColourPickerDialog.prototype.constructor=ColourPickerDialog;

ColourPickerDialog.prototype.getColourObject=function()
{
	return this.colourPicker.getSelectedColour();
}

