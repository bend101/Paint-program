function Colour(r,g,b,a)
{
	this.r=r;
	this.g=g;
	this.b=b;
	this.a=a;
}

Colour.prototype.convertToString=function()
{
	return "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
}

