
Utils={};
Utils.getMousePos=function (element, evt)
{
	var rect = element.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}