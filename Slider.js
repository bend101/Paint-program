/**
 * Creates a slider control of the given height, and can optionally callback a function when the value is changed
 * @param height
 * @param fnToSayChangedValue optional function to callback when value changes
 * @constructor
 */
function Slider(height, fnToSayChangedValue)
{

	this.fnChangedValue=fnToSayChangedValue;


	this.line=document.createElement("div");
	this.line.className="line";
	this.line.style.height=height+"px";
	this.lineHeight=height;
	this.circle=document.createElement("div");
	this.circle.className="circle";
	this.line.appendChild(this.circle);
	this.circle.addEventListener("mousedown",this.onMouseDown.bind(this));
	this.percentage=0;
}

Slider.prototype.setPercentage=function(percentage)
{
	this.percentage=percentage;
	var percentage=percentage/100;
	var lineHeight=this.lineHeight-20;
	this.circle.style.top=lineHeight*percentage+"px";

}

Slider.prototype.getElement=function()
{
	return this.line;
}

Slider.prototype.getPercentage=function()
{
	return this.percentage;
}

Slider.prototype.onMouseDown=function(event)
{
	var positionInCircle=Utils.getMousePos(this.circle,event);
	this.positionInCircle=positionInCircle.y;
	var position=this.circle.getBoundingClientRect();
	this.circleY=position.top;
	var linePosition=this.line.getBoundingClientRect();
	this.lineTop=linePosition.top;
	this.lineBottom=this.lineTop+this.lineHeight;

	this.circleMouseMoveBound=this.onMouseMove.bind(this);
	document.addEventListener("mousemove",this.circleMouseMoveBound);
	this.circleMouseUpBound=this.onMouseUp.bind(this);
	document.addEventListener("mouseup",this.circleMouseUpBound);
	this.circleMouseOutBound=this.onMouseOut.bind(this);
	document.addEventListener("mouseout",this.circleMouseOutBound);
}

Slider.prototype.onMouseMove=function(event)
{
	var mousePos=Utils.getMousePos(this.line,event);
//	console.log(mousePos.y-this.positionInCircle);
//	console.log(this.lineTop);
	if(mousePos.y-this.positionInCircle<0)
	{
		this.circle.style.top=0+"px";
	}
	else if (mousePos.y-this.positionInCircle>this.lineHeight-20)
	{
		this.circle.style.top=(this.lineHeight-20)+"px";
	}
	else
	{
		this.circle.style.top=(mousePos.y-this.positionInCircle)+"px";
	}

//	console.log(parseInt(this.circle.style.top));
//	console.log(this.lineHeight-20);

	var value=(parseInt(this.circle.style.top))/(this.lineHeight-20);

	var percentage=value*100;
	if (percentage!==this.percentage && this.fnChangedValue!=null)
	{
		this.fnChangedValue(percentage);
	}
	this.percentage=percentage;

}

Slider.prototype.onMouseUp=function(event)
{
//	console.log("hello");
	document.removeEventListener("mousemove",this.circleMouseMoveBound);
	document.removeEventListener("mouseup",this.circleMouseUpBound);
	document.removeEventListener("mouseout",this.circleMouseOutBound);


}

Slider.prototype.onMouseOut=function(event)
{
//	console.log("out");
	document.body.removeEventListener("mousemove",this.circleMouseMoveBound);
	document.body.removeEventListener("mouseup",this.circleMouseUpBound);
	document.body.removeEventListener("mouseout",this.circleMouseOutBound);
}

