
/*  DevTool-Inject is built as an improved interface for the wttg devtools
    Copyright (C) 2021 Fierce Thunder

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

//Determine if the code should be run and allow the user to choose the interface they want

if (location.href != "https://naskogdps17.7m.pl/wttg/dev/") {
  var response = window.confirm("This code injection can only be used at https://naskogdps17.7m.pl/wttg/dev/\nWould you like to go there?")
  if (response == true) {
    location.href = "https://naskogdps17.7m.pl/wttg/dev/"
  } else {
    alert("Code Injection Cancelled")
  }
  throw new Error("This code injection can only be used at https://naskogdps17.7m.pl/wttg/dev/");
}

var response = prompt("Please enter the style you want!\nbasic\ncommandline (WIP)","")
switch(response) {
	case "basic":document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://fiercethundr.github.io/DevTool-Inject/basic/script.js';break;
	case "commandline":document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://fiercethundr.github.io/DevTool-Inject/commandline/script.js';break;
	case null:alert("Code Injection Cancelled");break;
	default:alert("Invalid Response");break;
}