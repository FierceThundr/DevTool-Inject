function transform() {
	//document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='http://domain.com/scripts/external.js?'
	
	var element = document.createElement("div")
	element.setAttribute("id","new_ui");
	document.body.insertBefore(element,document.body.firstChild);
	
	
	
	document.getElementById("new_ui").style.top = "0";
}

console.log('Injection success')

setTimeout(transform,5000)