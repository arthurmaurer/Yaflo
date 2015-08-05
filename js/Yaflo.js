
function Yaflo(container)
{
	var that = this;

	this.canvas = document.getElementById('screen');
	this.event = new YafloEvent(this);

	this.bind = function ()
	{
		document.addEventListener('mousemove', that.event.handleEvent, true);
	};

	this.bind();
}