document.getElementsByTagName('head')[0].appendChild(document.createElement('link')).href='https://fiercethundr.github.io/DevTool-Inject/style.css'
	
var element = document.createElement("div")
element.setAttribute("id","new_ui");
document.body.insertBefore(element,document.body.firstChild);
	
document.getElementById("new_ui").style.top = "0";