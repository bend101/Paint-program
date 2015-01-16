/**
 *
 * @param fnCallbackWhenColourChanges call back when color changes
 * @param colourObject a Color object
 * @constructor
 */
function ColourPicker (fnCallbackWhenColourChanges, colourObject)
{
	this.fnCallbackWhenColourChanges=fnCallbackWhenColourChanges;
	this.colourObject=colourObject;

	var cssColourString=colourObject.convertToString();

	this.topElement=document.createElement("div");
	this.canvas=document.createElement("canvas");
	this.canvas.height=170;
	this.canvas.width=170;
	this.topElement.appendChild(this.canvas);
	this.context = this.canvas.getContext("2d");
	this.colourCircle = document.createElement("img");
	this.colourCircle.src = "images/colours.png";
	this.colourCircle.style.visibility = "hidden";
	this.canvas.appendChild(this.colourCircle);
	this.context.strokeRect(38, 43, 74, 67);
	this.smallDiv=document.createElement("div");
	this.smallDiv.className="small-div";
	this.smallDivColour=document.createElement("div");
	this.smallDivColour.className="smallDivColour";
	this.smallDivColour.style.backgroundColor=cssColourString;
	this.topElement.appendChild(this.smallDiv);
	this.topElement.appendChild(this.smallDivColour);
	this.slider=new Slider(147,this.onOpacityChange.bind(this),this.colourObject);
	this.slider.classname="slider";
	this.topElement.appendChild(this.slider.getElement());
	this.colourCircle.onload = function ()
	{
		this.context.drawImage(this.colourCircle, 0, 0);
	}.bind(this);
	this.canvas.addEventListener("click", this.onMouseClick.bind(this));

	var hsl1=this.rgbToHsl(this.colourObject.r,this.colourObject.g,this.colourObject.b);
	var hue=hsl1[0];
	this.drawInnerSquareColours(hue);
}

/**
 * sets the opacity between 0 - 100
 * @param percentage 0 to 100
 */
ColourPicker.prototype.onOpacityChange=function(percentage)
{
	var percentageSwapped=100-percentage;
	var percentageAsDecimal=percentageSwapped/100;
	this.colourObject.a=percentageAsDecimal;
	this.smallDivColour.style.backgroundColor=this.colourObject.convertToString();
}
//
//ColourPicker.rgbToString=function(r,g,b,a)
//{
//	return "rgba("+r+","+g+","+b+","+a+")";
//}

ColourPicker.prototype.getElement=function()
{
	return this.topElement;
}

ColourPicker.prototype.getSelectedColour=function()
{
	return this.colourObject;
}

 ColourPicker.prototype.onMouseClick=function(event)
{
	var mousePos=this.getMousePos(this.canvas,event);
	var imgData = this.context.getImageData(mousePos.x, mousePos.y, 1, 1).data;
	this.colourObject.r=imgData[0];
	this.colourObject.g=imgData[1];
	this.colourObject.b=imgData[2];

	var cssColourString=this.colourObject.convertToString();
	this.smallDivColour.style.backgroundColor=cssColourString;
	var hsl1=this.rgbToHsl(imgData[0],imgData[1],imgData[2]);
	var hue=hsl1[0];
	this.drawInnerSquareColours(hue);
	if (this.fnCallbackWhenColourChanges!=null)
	{
		this.fnCallbackWhenColourChanges(this.colourObject);
	}
}

ColourPicker.prototype.drawInnerSquareColours=function(hue)
{
	var squareImage = this.context.getImageData(38, 43, 74, 67);
	var squareData=squareImage.data;
	var height=squareImage.height;
	var width=squareImage.width;
	for (var y=0;y<height;y++)
	{
		for (var x = 0; x < width; x++)
		{
			var pixelPosition = (y * width + x) * 4;

			var h = hue;
			var s = 1- y / height;
			var l = 1- x / width;
			var rgb = this.hslToRgb(h, s, l);
			squareData[pixelPosition] = rgb[0];
			squareData[pixelPosition + 1] = rgb[1];
			squareData[pixelPosition + 2] = rgb[2];
			squareData[pixelPosition+3]=255;
		}
	}
	this.context.putImageData(squareImage, 38, 43);
}

ColourPicker.prototype.getMousePos=function (canvas, evt)
{
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

ColourPicker.prototype.rgbToHsl=function(r, g, b)
{
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if(max == min){
		h = s = 0; // achromatic
	}else{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return [h, s, l];
}

ColourPicker.prototype.hslToRgb=function(h, s, l)
{
	var r, g, b;

	if(s == 0){
		r = g = b = l; // achromatic
	}else{
		function hue2rgb(p, q, t){
			if(t < 0) t += 1;
			if(t > 1) t -= 1;
			if(t < 1/6) return p + (q - p) * 6 * t;
			if(t < 1/2) return q;
			if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}

	return [r * 255, g * 255, b * 255];
}


ColourPicker.prototype.rgbToHsv=function(r, g, b)
{
	r = r/255, g = g/255, b = b/255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, v = max;

	var d = max - min;
	s = max == 0 ? 0 : d / max;

	if(max == min){
		h = 0; // achromatic
	}else{
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return [h, s, v];
}


ColourPicker.prototype.hsvToRgb=function(h, s, v)
{
	var r, g, b;

	var i = Math.floor(h * 6);
	var f = h * 6 - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);

	switch(i % 6){
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}

	return [r * 255, g * 255, b * 255];
}
