function PaintProgram()
{
	this.newCanvasDialog=new NewCanvasDialog(this.onNewDialogClose.bind(this));
	this.bottomBar=document.querySelector(".bottomBar");
	this.cornerDiv=document.querySelector(".cornerDiv");

	this.leftSideBar=document.querySelector(".sideBar");
	this.optionsArea=document.querySelector(".topBar");
	this.colourBar= new ColourBar("Foreground",[new Colour(0,0,0,1),new Colour(255,0,0,1), new Colour(0,0,255,1),new Colour(0,128,0,1),new Colour(255,255,0,1),new Colour(255,165,0,1),new Colour(128,0,128,1),new Colour(255,192,203,1),new Colour(255,255,255,1)]);
	this.colourBarBackground= new ColourBar("Background",[new Colour(0,0,0,1),new Colour(255,0,0,1), new Colour(0,0,255,1),new Colour(0,128,0,1),new Colour(255,255,0,1),new Colour(255,165,0,1),new Colour(128,0,128,1),new Colour(255,192,203,1),new Colour(255,255,255,1)]);
	this.drawingArea=new DrawingArea(this);
	this.drawingArea.createCanvas(2000,2000);
	this.toolHeader=document.createElement("div");
	this.toolHeader.innerHTML="Tools";
	this.toolHeader.className="toolHeader";
	this.leftSideBar.appendChild(this.toolHeader);
	this.sideBar= new Sidebar(this.onChangeInTool.bind(this),this);
	this.leftSideBar.appendChild(this.sideBar.getElement());
	this.bottomBar.appendChild(this.colourBar.getElement());
	this.bottomBar.appendChild(this.colourBarBackground.getElement());
	this.mainDiv=document.querySelector(".mainDiv");
	this.toolHeader=document.createElement("div");
	this.toolHeader.innerHTML="Tools";
	this.toolHeader.className="toolHeader";

	this.undoButton=document.createElement("button");
	this.redoButton=document.createElement("button");
	this.newButton=document.createElement("button");
	this.undoButton.innerHTML="Undo";
	this.redoButton.innerHTML="Redo";
	this.newButton.innerHTML="New";
	this.undoButton.className="undo-redo";
	this.redoButton.className="undo-redo";
	this.newButton.className="undo-redo";
	this.undoButton.addEventListener("click",this.onUndoClick.bind(this));
	this.redoButton.addEventListener("click",this.onRedoClick.bind(this));
	this.newButton.addEventListener("click",this.onNewClick.bind(this));
	this.cornerDiv.appendChild(this.newButton);
	this.cornerDiv.appendChild(this.undoButton);
	this.cornerDiv.appendChild(this.redoButton);

	this.transparent=true;

	this.undoArray=[];
	this.redoArray=[];

	this.mainDiv.appendChild(this.drawingArea.getElement());
}
//
//PaintProgram.prototype.onChangeInColourBar=function(colour)
//{
//	this.foregroundColour=colour;
//}

PaintProgram.prototype.onUndoClick=function(event)
{
	event.preventDefault();
	this.undo();

}

PaintProgram.prototype.onRedoClick=function(event)
{
	event.preventDefault();
	this.redo();

}

PaintProgram.prototype.onNewClick=function(event)
{
	this.newCanvasDialog=new NewCanvasDialog(this.onNewDialogClose.bind(this));

}

PaintProgram.prototype.onNewDialogClose=function(dialog,returnCode)
{
	if(returnCode===Dialog.OK)
	{
		var width=dialog.widthValue();

		var height=dialog.heightValue();
		this.transparent=dialog.isTransparent();


			this.drawingArea.resizeCanvas(width, height,this.transparent);
			this.redoArray = [];
			this.undoArray = [];
	}

}
PaintProgram.prototype.undo=function()
{
	if (this.undoArray.length!==0)
	{
		var lastElementOfUndoArray = this.undoArray.pop();
		this.redoArray.push(lastElementOfUndoArray);
	}

	console.log(this.undoArray);
	this.drawDrawable();

}

PaintProgram.prototype.redo=function()
{
	if(this.redoArray.length!==0)
	{
		var lastElementOfRedoArray = this.redoArray.pop();
		this.undoArray.push(lastElementOfRedoArray);
	}

	this.drawDrawable();

}

PaintProgram.prototype.drawDrawable=function()
{
	var context=this.getCanvas().getContext('2d');
	context.clearRect ( 0 , 0 , this.getCanvas().width, this.getCanvas().height );
	if (this.transparent===false)
	{
		context.beginPath();
		context.rect(0,0,this.getCanvas().width,this.getCanvas().height);
		context.fillStyle="white";
		context.fill();
	}
	for (var i=0;i<this.undoArray.length;i++)
	{
		console.log(i);
		this.undoArray[i].draw(this.getCanvas());
	}
}

PaintProgram.prototype.addDrawable=function(drawableItem)
{
	this.undoArray.push(drawableItem);
	console.log(this.undoArray);
}


PaintProgram.prototype.getForeGroundColour=function()
{
	return this.colourBar.colour;
}

PaintProgram.prototype.getBackgroundColour=function()
{
	return this.colourBarBackground.colour;
}

PaintProgram.prototype.onChangeInTool=function(tool)
{
	this.tool=tool;
	this.optionsArea.innerHTML="";
	this.optionsArea.appendChild(this.tool.getOptionsPanel().getElement());

}

PaintProgram.prototype.getTool=function()
{
	return this.tool;
}

PaintProgram.prototype.getCanvas=function()
{
return this.drawingArea.getCanvas();
}

PaintProgram.prototype.copyToBackgroundCanvas=function()
{

	this.drawingArea.copyToBackgroundCanvas();
}

PaintProgram.prototype.copyToForegroundCanvas=function()
{
	this.drawingArea.copyToForegroundCanvas();
}


PaintProgram.prototype.getForegroundColourBar=function()
{
	return this.colourBar;
}







