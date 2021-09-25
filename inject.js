
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

//Determine if the bookmark is being run at the correct address

if (location.href != "https://naskogdps17.7m.pl/wttg/dev/") {
  var response = window.confirm("This code injection can only be used at https://naskogdps17.7m.pl/wttg/dev/\nWould you like to go there?")
  if (response == true) {
    location.href = "https://naskogdps17.7m.pl/wttg/dev/"
  } else {
    alert("Code Injection Cancelled")
  }
  throw new Error("This code injection can only be used at https://naskogdps17.7m.pl/wttg/dev/");
}

//Build the UI and inject header information

document.body.innerHTML = ""

var css = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
css.href='https://unpkg.com/simplebar@5.2.1/dist/simplebar.css'
css.rel='stylesheet'

var css = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
css.href='inject.css'
css.rel='stylesheet'

var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'))
style.innerHTML='.new_ui {color:hsl(120,100%,50%)} .simplebar-scrollbar::before {background-color:hsl(120,100%,50%)}'
style.id='dynamic_color'

var icon = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
icon.href='data:image/x-icon;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAKBEAAJ4EAAAwMAAAAQAgAGgmAADGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wICAv+fn5//g4OD/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wEBAf8ZGRn/qamp/6CgoP8LCwv/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wMDA/+oqKj/zMzM/3BwcP93d3f/2dnZ/4qKiv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wQEBP8XFxf/srKy//7+/v////////////39/f+cnJz/FRUV/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wICAv+vr6//39/f/1hYWP8tLS3/XV1d/1lZWf8lJSX/ampq//Dw8P+QkJD/AAAA/wAAAP8AAAD/AAAA/wcHB/8mJib/jo6O//39/f//////7u7u/8DAwP/BwcH/7+/v///////5+fn/cnJy/yoqKv8BAQH/AAAA/wAAAP+1tbX/9PT0/2hoaP83Nzf/oaGh/+bm5v/+/v7//f39/9/f3/+VlZX/Li4u/35+fv/7+/v/lJSU/wAAAP8AAAD/YmJi//f39///////1NTU/3BwcP8yMjL/Hx8f/yAgIP84ODj/e3t7/+Dg4P//////7u7u/0lJSf8AAAD/AAAA/wAAAP8oKCj/rq6u//z8/P/////////////////////////////////4+Pj/np6e/xsbG/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8cHBz/ZmZm/5mZmf+wsLD/rq6u/5SUlP9eXl7/FBQU/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/DQ0N/62trf+AgID/AQEB/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wsLC//ExMT///////7+/v+NjY3/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Xl5e//7+/v////////////n5+f8iIiL/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/BQUF/wgICP8AAAD/NjY2/3R0dP9paWn/ISEh/wAAAP8NDQ3/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/xISEv/ExMT/29vb/1paWv8HBwf/AAAA/wAAAP8UFBT/eXl5//Dw8P+SkpL/AgIC/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8MDAz/y8vL//////////////////Dw8P/Jycn/z8/P//n5+f////////////7+/v+Wlpb/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/ysrK//v7+///////////////////////////////////////////////////////9PT0/8HBwf/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/xAQEP8yMjL/AAAA/yUlJf+1tbX//f39//////////////////////////////////f39/+RkZH/DQ0N/wQEBP9JSUn/AgIC/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8ZGRn/09PT//r6+v+Hh4f/CwsL/wAAAP8pKSn/enp6/6+vr//Gxsb/w8PD/6SkpP9nZ2f/FRUV/wAAAP8nJyf/w8PD//////+lpaX/BAQE/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/CgoK/9HR0f/////////////////l5eX/cXFx/xISEv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8bGxv/jY2N//b29v////////////////+ampr/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8HBwf/tLS0////////////////////////////+fn5/8HBwf+Pj4//dnZ2/3h4eP+RkZH/xMTE//v7+////////////////////////f39/3p6ev8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8cHBz/h4eH/w0NDf8EBAT/goKC//n5+f///////////////////////////////////////////////////////////////////////////+rq6v9TU1P/AAAA/ygoKP+BgYH/BwcH/wAAAP8AAAD/AAAA/wAAAP8AAAD/IiIi/+Dg4P//////1dXV/y0tLf8AAAD/Kioq/6qqqv/6+vr//////////////////////////////////////////////////////+/v7/+Kior/ExMT/wAAAP9UVFT/7+/v//////+3t7f/CQkJ/wAAAP8AAAD/AAAA/wAAAP/T09P/////////////////9vb2/35+fv8JCQn/AAAA/xwcHP9vb2//tbW1/+fn5//9/f3//v7+//7+/v/7+/v/3Nzc/6SkpP9aWlr/DAwM/wAAAP8bGxv/p6en//7+/v////////////////+SkpL/AAAA/wAAAP8AAAD/AAAA/1lZWf/39/f//////////////////////+Pj4/9xcXH/EhIS/wAAAP8AAAD/AAAA/wsLC/8YGBj/FhYW/wcHB/8AAAD/AAAA/wAAAP8lJSX/j4+P//T09P//////////////////////4uLi/ysrK/8AAAD/AAAA/wAAAP8AAAD/AAAA/zk5Of/f39/////////////////////////////39/f/ubm5/3t7e/9QUFD/NDQ0/ygoKP8rKyv/Ojo6/1lZWf+Kior/zMzM//39/f///////////////////////v7+/729vf8ZGRn/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w8PD/+Tk5P/+vr6/////////////////////////////////////////////////////////////////////////////////////////////////+zs7P9ra2v/AgIC/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8mJib/nJyc//X19f///////////////////////////////////////////////////////////////////////////+bm5v99fX3/ERER/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/EBAQ/2JiYv+urq7/6+vr//7+/v/////////////////////////////////9/f3/3t7e/5ycnP9LS0v/BQUF/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8CAgL/ISEh/0ZGRv9bW1v/aWlp/2dnZ/9WVlb/Pj4+/xYWFv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAADAAAABgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wEBAf8pKSn/pqam/3l5ef8ODg7/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/ysrK//CwsL//Pz8//f39/+Ojo7/ERER/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/ISEh/9nZ2f/9/f3///////7+/v/4+Pj/lpaW/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8BAQH/o6Oj//7+/v/////////////////+/v7/+vr6/0JCQv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Q0ND/6Wlpf/a2tr/9vb2//Hx8f/Jycn/ioqK/xgYGP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Dg4O/xoaGv8AAAD/AAAA/wkJCf8XFxf/IiIi/x8fH/8SEhL/BAQE/wAAAP8BAQH/IiIi/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wEBAf82Njb/z8/P/+np6f9kZGT/HBwc/wQEBP8AAAD/AAAA/wAAAP8AAAD/CwsL/ygoKP+Wlpb/9PT0/5ubm/8TExP/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/zQ0NP/MzMz//f39//7+/v/39/f/x8fH/4aGhv9ZWVn/R0dH/0pKSv9oaGj/m5ub/93d3f/+/v7///////n5+f+ZmZn/FRUV/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/JCQk/9/f3//+/v7///////////////////////39/f/19fX/8PDw//Hx8f/4+Pj//v7+//////////////////7+/v/5+fn/oKCg/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Z2dn//T09P/+/v7////////////////////////////////////////////////////////////////////////////+/v7/4eHh/xQUFP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/CQkJ/3Fxcf/g4OD//v7+//////////////////////////////////////////////////////////////////v7+/+/v7//Q0ND/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/LS0t/4KCgv8ODg7/AAAA/wMDA/8tLS3/pKSk//v7+//////////////////////////////////////////////////+/v7/6Ojo/3R0dP8TExP/AQEB/wEBAf9JSUn/fX19/wcHB/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wICAv9HR0f/4ODg//39/f+3t7f/NTU1/wcHB/8AAAD/AAAA/yYmJv+JiYn/ycnJ/97e3v/n5+f/6urq/+rq6v/k5OT/2dnZ/7u7u/9lZWX/EBAQ/wAAAP8BAQH/FhYW/29vb//v7+///////7i4uP8bGxv/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/zw8PP/W1tb//v7+///////+/v7/4+Pj/4qKiv8wMDD/AwMD/wAAAP8AAAD/CwsL/ygoKP8/Pz//SEhI/0dHR/84ODj/Hh4e/wMDA/8AAAD/AAAA/wgICP9SUlL/t7e3//z8/P////////////v7+/+np6f/Ghoa/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/HR0d/+Pj4//+/v7///////////////////////z8/P/o6Oj/oKCg/zQ0NP8CAgL/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8FBQX/R0dH/8DAwP/y8vL//v7+///////////////////////7+/v/nJyc/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/EhIS/8PDw//6+vr///////////////////////////////////////z8/P/R0dH/i4uL/1VVVf83Nzf/LCws/ywsLP86Ojr/V1dX/4uLi//W1tb//Pz8//////////////////////////////////7+/v/w8PD/enp6/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/xQUFP8FBQX/AAAA/xwcHP+hoaH/9vb2//////////////////////////////////////////////////7+/v/5+fn/9PT0//T09P/6+vr//v7+/////////////////////////////////////////////////+jo6P9tbW3/CwsL/wAAAP8ODg7/CAgI/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/T09P/9vb2/98fHz/CAgI/wAAAP8MDAz/Y2Nj/+7u7v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v7/xcXF/y8vL/8EBAT/AAAA/xYWFv+0tLT/urq6/xUVFf8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wMDA/9cXFz/6+vr///////6+vr/lpaW/xsbG/8BAQH/AAAA/x0dHf+jo6P/5eXl//z8/P/////////////////////////////////////////////////////////////////////////////////+/v7/9fX1/9fX1/9zc3P/DAwM/wAAAP8HBwf/ODg4/9LS0v/+/v7//////8/Pz/8mJib/AQEB/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0pKSv/g4OD//v7+/////////////v7+/8XFxf9PT0//BwcH/wAAAP8ICAj/Pj4+/4SEhP/FxcX/9PT0//7+/v///////////////////////////////////////////////////////v7+/+jo6P+tra3/bGxs/yUlJf8BAQH/AAAA/xMTE/96enr/5OTk//////////////////39/f+2trb/Hx8f/wAAAP8AAAD/AAAA/wAAAP8AAAD/AgIC/9bW1v/+/v7///////////////////////7+/v/w8PD/p6en/x0dHf8AAAD/AAAA/wMDA/8RERH/KSkp/2lpaf+urq7/4ODg//v7+//9/f3//v7+//7+/v/9/f3/9vb2/9HR0f+Wlpb/T09P/xwcHP8LCwv/AQEB/wAAAP8CAgL/S0tL/9PT0//4+Pj//v7+///////////////////////8/Pz/dnZ2/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0hISP/i4uL//f39/////////////////////////////////+/v7/98fHz/KCgo/wsLC/8AAAD/AAAA/wAAAP8AAAD/AQEB/wsLC/8hISH/Jycn/ycnJ/8aGhr/BwcH/wAAAP8AAAD/AAAA/wAAAP8CAgL/ExMT/zg4OP+srKz/+Pj4//////////////////////////////////v7+/+3t7f/HR0d/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wMDA/9MTEz/zc3N//7+/v/////////////////////////////////9/f3/3Nzc/5ycnP9fX1//Li4u/woKCv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8CAgL/FRUV/z8/P/91dXX/srKy//Dw8P/+/v7/////////////////////////////////+vr6/6Ojo/8kJCT/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8BAQH/GRkZ/6Kiov/8/Pz///////////////////////////////////////7+/v/29vb/6urq/9ra2v+tra3/goKC/2FhYf9QUFD/Q0ND/0hISP9UVFT/bGxs/42Njf/BwcH/4eHh/+7u7v/6+vr//v7+//////////////////////////////////7+/v/r6+v/ZGRk/woKCv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wYGBv9ubm7/2dnZ//v7+//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v7/9PT0/8TExP86Ojr/AQEB/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8CAgL/Ly8v/4iIiP/c3Nz//f39//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////n5+f+/v7//aGho/xQUFP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wQEBP8fHx//c3Nz/+Hh4f/+/v7////////////////////////////////////////////////////////////////////////////////////////////////////////////6+vr/vr6+/0pKSv8QEBD/AQEB/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wgICP9XV1f/sbGx/9vb2//t7e3/+vr6//7+/v/////////////////////////////////////////////////+/v7//v7+//f39//n5+f/0tLS/5WVlf80NDT/AwMD/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AgIC/yIiIv9QUFD/d3d3/5iYmP+0tLT/ysrK/9fX1//j4+P/6urq/+np6f/e3t7/1NTU/8PDw/+qqqr/jY2N/2pqav8/Pz//ExMT/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AQEB/wYGBv8NDQ3/EhIS/xYWFv8YGBj/Ghoa/xoaGv8XFxf/FRUV/xEREf8KCgr/BAQE/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=='
icon.rel='icon'
icon.type='image/x-icon'

document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://unpkg.com/simplebar@5.2.1/dist/simplebar.min.js'

document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://use.fontawesome.com/b51eec3906.js'



/*<link rel="icon" href="https://cdn.glitch.com/d2f1be29-9083-4bd0-a116-f358140ae73d%2Ffavicon.ico?v=1601910620369" type="image/x-icon">*/
	
window.scrollTo(0,0);

var div = document.body.insertBefore(document.createElement("div"),document.body.firstChild);
div.className='new_ui'
div.id='new_ui'
div.innerHTML = `
<p class="block_ver"><i>Devtools Version 1.2.2.${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}</i></p>

<div id="partition_animate" class="partition_wrapper">
  <div id="login" class="partition">
    <div class="noticebar">
      <h1 class="noticebar_header" id="header_content">PLEASE LOG IN</h1>
    </div>
    <div class="login_wrap">
      <input id="username" placeholder="username" class="login_input" type="text">
      <input id="password" placeholder="password" class="login_input" type="password">
      <button class="login_submit" onclick="login()">Submit</button><br>

      <input id="token" placeholder="token" class="login_input" type="password">
      <button class="login_submit" onclick="override()">Override</button>
    </div>
  </div>

  <div id="panel" class="partition partition_panel">
    <div class="maindiv">
      <h1 style="margin: 10px 0 0 0">Devtools</h1><br>
      <div class="blocklist" data-simplebar>
        <div id="toollist">
        </div>
      </div>
      <div class="blockdata" style="text-align:left" data-simplebar>
        <div id="tooldata">
          <h2 id="command_name">WTTG2 Integration DevTools</h2>
          <p id="command_description">
            Welcome to the WTTG2 Twitch Integration Devtools Interface, in this version of the interface you can see descriptions of what each tool does and what information it may need. 
          </p>
          <input onchange="additionalupdate(this.value)" type="text" id="command_additional" class="command_additional" placeholder="Please select a command">
          <button onclick="submitData()" id="command_submit" class="command_submit" disabled>Submit Command</button>
        </div>
      </div>
      <div class="databar">
        <button onclick="resetData()">Reset Data</button>
        <button onclick="viewData()">View Incoming Data</button>
        <button onclick="logout()">Logout</button>
        <button onclick="tokenCopy()">Copy Token</button>
        <button onclick="refreshPlayers()">Refresh Sessions</button>
      </div>
    </div>

    <div class="maindiv">
      <h1 style="margin: 10px 0 0 0">Sessions</h1><br>
      <div class="sessionlist" data-simplebar>
        <table id="sessions">
        </table>
      </div>
      <div class="databar monospace" id="current_session">
        [Current Session] No Session Selected
      </div>
    </div>

    <div><div class="minordiv">Interface Color<b>:</b><input oninput="setcolor(0,this.value)" type="range" min="0" max="360" value="120" id="primary"></div></div>
  </div>
</div>`

//Interface Variables

var tools = [
  {"name":"Modify Tick Count","value":"updateTickCount","description":"Modify the delay in seconds between when the game checks for commands.","additional":"Amount of seconds between checks"},
  {"name":"Update Chat Developer","value":"chatdev","description":"Modify the currently selected chat developer.","additional":"Username of new chat developer"},
  {"name":"Send Chat Message","value":"sendChatMessage","description":"Send a message in the twitch chat.","additional":"Message to send"},
  
    {"section":"&gt; Apartment"},
  {"name":"Open Window","value":"openWindow","description":"Open the apartment window."},
  {"name":"Close Window","value":"closeWindow","description":"Close the apartment window."},
  {"name":"Trip Power","value":"trippower","description":"Trigger a blackout."},
  {"name":"Toggle Main Door Lock","value":"toggleLock","description":"Toggle the lock of the front door of the apartment. If the door is locked, it can only be unlocked from inside the apartment."},
  {"name":"Trigger Insanity","value":"INSANITY","description":"Spawns dancing Noirs, plays a troll sound, and causes a blackout. Please keep in mind that this makes the game impossible to win due to the fact it will eventually kill the player."},
  {"name":"Spawn Adam","value":"spawnAdam","description":"Spawn Adam clapping next to the players desk. Can be undone by using \"Despawn Adam\" below."},
  {"name":"Despawn Adam","value":"deSpawnAdam","description":"Undo the action of the command \"Spawn Adam\" above."},
  {"name":"Spawn Dancing Noir","value":"spawnDancing","description":"Spawn a dancing Noir in the kitchen area. Can be undone by using \"Despawn Dancing Noir\" below."},
  {"name":"Despawn Dancing Noir","value":"despawnDancing","description":"Undo the action of the command \"Spawn Dancing Noir\" above."},
  
    {"section":"&gt; Troll Sounds"},
  {"name":"Play Sound","value":"playTrollPoll","description":"Play a specified sound file. A list of sounds can be found below. If the value provided is not a valid sound, vacation is played.<br><br>[Available Sounds]: vacation, triangle, polishcow, nyancat, stickbug, jebaited, keyboardcat, running, stal, chungus, gnome, rickroll, conga, diarrhea, blue, coffin, crab, thomas<br><br>(Only one sound can be played at a time)<br><br>(Be aware that some sounds are version dependent and may be added or removed over time)","additional":"Name of sound to play"},
  {"name":"Play Short Sound","value":"shortTroll","description":"Play a specified short sound file. A list of sounds can be found below. If the value provided is not a valid sound, mlg is played.<br><br>[Available Sounds]: mlg, balloonboy, virus, swamp","additional":"Name of sound to play"},
  {"name":"Play Police Scanner","value":"trollScanner","description":"Play a fake police scanner cue noise."},
  {"name":"Play Lockpick","value":"trollLockPick","description":"Play the lockpicking noise made by the Hitman."},
  {"name":"Stop Sound","value":"killTrollPoll","description":"Stop the current troll sound playing."},
  
    {"section":"&gt; Trolls"},
  {"name":"Activate Golden Freddy","value":"GoldenFreddy","description":"Golden Freddy when spawned will occasionally appear and scare the player. Once enabled this cannot be disabled. This is non-lethal."},
  
    {"section":"&gt; Teleport"},
  {"name":"Teleport Elevator","value":"doomersElevator","description":"Teleport the player inside the elevator."},
  {"name":"Teleport Lobby","value":"doomersOutside","description":"Teleport the player to the lobby."},
  {"name":"Teleport Apartment","value":"doomersHome","description":"Teleport the player inside the apartment."},
  {"name":"Teleport Hallway","value":"doomersHallway","description":"Teleport the player into the apartment hallway."},
  {"name":"Teleport Bathroom","value":"doomersApartment","description":"Teleport the player inside the apartment bathroom."},
  
    {"section":"&gt; Enemies"},
  {"name":"Increase Difficulty","value":"diffIncrease","description":"Increase the players difficulty value by a specified amount. Functionally maxes out at a value of 8.","additional":"Amount to increase difficulty"},
  {"name":"Spawn Noir","value":"noircult","description":"Spawn the Noir to stalk the player."},
  {"name":"Spawn Doll Maker","value":"dollMaker","description":"Immediately summon the Doll Maker at the apartment of the player."},
  {"name":"Always Breather (Enable)","value":"breatherOn","description":"Force the Breather to always spawn when the player enters the alley."},
  {"name":"Always Breather (Disable)","value":"breatherOff","description":"Undo the effect of the command \"Always Breather (Enable)\" above."},
  {"name":"Disable Enemies (Enable)","value":"casual","description":"Disable all enemies. This includes the Breather, Police, Doll Maker, Noir, and Hitman. Additionally blocks random and forced hacks from occuring."},
  {"name":"Disable Enemies (Disable)","value":"noCasual","description":"Undo the effect of the command \"Disable Enemies (Enable)\" above."},
  {"name":"Kill Player","value":"killp","description":"Force the player die via a chosen method. The available methods are police, lucas, or noir. If the value provided is not valid, it will do nothing.","additional":"Method to kill player"},
  {"name":"Activate XOR Mode","value":"XOR","description":"Activate extreme difficulty. All enemies are max aggression and multiple new threats are added at once. Not for the faint of heart."},
  
    {"section":"&gt; Discount"},
  {"name":"Discount ZeroDay Market","value":"zeroDiscount","description":"Discount the prices of the ZeroDay Market."},
  {"name":"Discount Shadow Market","value":"shadowDiscount","description":"Discount the prices of the Shadow Market."},
  
    {"section":"&gt; DosCoin"},
  {"name":"Modify DosCoins (Add)","value":"addCoins","description":"Give the player a specified amount of DosCoin and play a positive sound effect. Maximum value that can be modified at a time is 1000, supports decimal values. If no value is provided, nothing happens.","additional":"Amount of DosCoin to give"},
  {"name":"Modify DosCoins (Remove)","value":"subCoins","description":"Remove a specified amount of DosCoin from the player and play a negative sound effect. Maximum value that can be modified at a time is 1000, supports decimal values. If no value is provided, nothing happens.","additional":"Amount of DosCoin to take"},
  {"name":"Set Loan","value":"setloan","description":"Set a loan the player must repay before beating the game. Does not support decimals or negative values.","additional":"The amount the player must repay"},
  {"name":"Change Remote VPN Level","value":"changeVPN","description":"Change the level of all Remote VPNs the player currently owns. If an invalid option is provided, the command does nothing. Options are as follows... [1] Default - All VPNs behave as normal [2] Purple - All VPNs function at two times speed [3] Blue - All VPNs function at three times speed","additional":"The VPN level you wish to set"},
  
    {"section":"&gt; Documents"},
  {"name":"Spawn Key File","value":"keyDoc","description":"Spawn a file containing the specified key on the players desktop. If an invalid key is provided, a random key will be made.","additional":"The number of the key you want to give"},
  {"name":"Spawn Custom File","value":"doc","description":"Create a custom file on the players desktop. Your file must be provided in the following format... \"name:content\"","additional":"The file you want to make"},
  {"name":"Spawn Tenant File","value":"giveTenant","description":"Spawn a file on the players desktop containing the information of a random tenant in the building including room number."},
  {"name":"Spawn Network Password","value":"wifiDoc","description":"Spawn a file on the players desktop containing the password of a random WiFi network."},
  
  {"name":"Spawn Wiki Address","value":"wikiDoc","description":"Spawn a file on the players desktop containing the address of the specified deep wiki. You can specify a number to indicate the wiki you wish to spawn.","additional":"The number of the wiki you wish to give"},
  
    {"section":"&gt; Viruses"},
  {"name":"Delete Notes","value":"clearNotes","description":"Delete the contents of the computers notepad."},
  {"name":"Shutdown Computer","value":"shutdownPC","description":"Shutdown the players computer."},
  {"name":"Viruses (Add)","value":"virus","description":"Download a specified amount of viruses to the players computer. The maximum amount that can be installed at a time is 10.","additional":"The amount of viruses to download"},
  {"name":"Viruses (Remove)","value":"vwipe","description":"Open VWipe and run a virus scan."},
  {"name":"Activate TH3SW4N","value":"swan","description":"Download TH3SW4N virus to the players computer. It requires the player to input a code before the swans timer reaches zero. If the player fails to do this, TH3SW4N will shutdown the computer, clear the players notepad, and steal DosCoin."},
  {"name":"Activate D05_DR41N3R","value":"dosdrainer","description":"Infect the players current wifi network with D05_DR41N3R. When the player is on a wifi network with D05_DR41N3R, they will lose one DosCoin every second they stay on that network."},
  
    {"section":"&gt; Hacks"},
  {"name":"Send Hack (Normal)","value":"hack","description":"Summon a normal hack on the players computer. If used during 1337 mode, the hack may be 1337 difficulty."},
  {"name":"Send Hack (1337)","value":"hackpog","description":"Summon a 1337 hack on the players computer."},
  {"name":"Send Hack (Blackhat)","value":"blackhat","description":"Summon a blackhat hack on the players computer. A blackhat hack cannot be skipped and will only give 0.5 DosCoin upon completion."},
  {"name":"Whitehat","value":"whitehat","description":"Causes the player to get a reward as if they beat a hack. If the player does not have a backdoor hack, the command does nothing. Will never trigger an item to spawn."},
  {"name":"Whitehat (Force Item)","value":"itemwhitehat","description":"Causes the player to recieve an item as if it was recieved from the whitehat poll result. When triggered it will spawn items for the player in the following order. First Police Scanner, Wifi Dongle 2 second, and finally Wifi Dongle 3."},
  {"name":"Drain Backdoors","value":"drainBackdoor","description":"Remove all backdoor the player currently has downloaded on their computer."},
  
    {"section":"&gt; WiFi"},
  {"name":"Spawn Network Password","value":"wifiDoc","description":"Spawn a file on the players desktop containing the password of a random WiFi network."},
  {"name":"Disconnect from WiFi","value":"disconnectWifi","description":"Force a player to disconnect from their current WiFi network."},
  {"name":"Change WiFi Speed","value":"speedManipulator","description":"Modify the players wifi speed to be faster or slower than normal. The available options are faster and slower. If an invalid option is provided, the command does nothing. The effect expires after a duration of ten minutes.","additional":"The wifi speed you want"},
  
    {"section":"&gt; Miscellaneous"},
  {"name":"Manipulate Key Cue","value":"keyManipulator","description":"Modify the players key cue to be enabled or disabled. The available options are enabled and disabled. If an invalid option is provided, the command does nothing. The effect expires after a duration of 10 minutes.","additional":"The option you want"},
  ], sessions, notice_timeout, partition_state = 0, command = {"session":"","action":"","additional":""}

//Query Login Status

query_login()

//Build Dynamic Interfaces

tools.forEach(function (v,i) {
  var button = document.createElement("button")
  document.getElementById("toollist").appendChild(button)
  if (v.section != undefined) {
    button.outerHTML = `<button><h3 style="display:inline">&nbsp;${v.section}</h3></button>`
  } else {
    button.outerHTML = `<button onclick="commandupdate(${i})">${v.name}</button>`
  }
})

refreshPlayers()

//Retrieve Saved Color of Interface

if (localStorage.getItem('color0') == undefined) {localStorage.setItem('color0',120)}
document.getElementById("dynamic_color").innerHTML = `.new_ui {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)}`

//Update Functions

function setcolor(i,c) {
  localStorage.setItem(`color${i}`,c)
  document.getElementById("dynamic_color").innerHTML = `.new_ui {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)}`
}

function sessionupdate(hash) {
  command.session = hash
  document.getElementById("current_session").innerHTML = "[Current Session] " + hash
}

function commandupdate(index) {
  var data = tools[index]
  command.action = data.value
  command.additional = ""
  interfaceupdate({
  "title":data.name,
  "description":data.description,
  "additional":{
    "disabled":(data.additional == null),
    "placeholder":(data.additional != null) ? data.additional:"This command does not have input"},
  "submit":{"disabled":false}})
}

function additionalupdate(data) {
  command.additional = data
}

function interfaceupdate(data) {
  //{"title":"","description":"","additional":{"disabled":true,"placeholder":""},"submit":{"disabled":true}}
  document.getElementById("command_name").innerHTML = data.title
  document.getElementById("command_description").innerHTML = data.description
  document.getElementById("command_additional").value = ""
  document.getElementById("command_additional").disabled = data.additional.disabled;
  document.getElementById("command_additional").placeholder = data.additional.placeholder;
  document.getElementById("command_submit").disabled = data.submit.disabled;
}

//Action Functions

function erase_cookie() {
  document.cookie = "PHPSESSID= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function submitData() {
  var formData = new FormData(), request = new XMLHttpRequest();
  formData.append("submitData",command.session);
  formData.append("TheAction",command.action);
  formData.append("TheAdditional",command.additional);
  request.open("POST","./",true);
  request.onload = function() {
    if (request.responseText == "Go away. There is nothing here.") {
      animate_toLogin()
    }
  }
  request.send(formData);
}

function resetData() {
  var formData = new FormData(), request = new XMLHttpRequest();
  formData.append("resetData","true");
  request.open("POST","./",true);
  request.send(formData);
}

function viewData() {  
  var request = new XMLHttpRequest()
  request.open("GET","Data/data.json",true)
  request.onload = function() {
    var data = JSON.parse(request.responseText)
    interfaceupdate({
      "title":"Viewing Incoming Data",
      "description":`<table><tbody><tr><td>[GameHash]</td><td>${data.GameHash}</td></tr><tr><td>[Action]</td><td>${data.Action}</td></tr><tr><td>[Additional]</td><td>${data.Additional}</td></tr></tbody></table>`,
      "additional":{"disabled":true,"placeholder":"Please select a command"},
      "submit":{"disabled":true}})
  }
  request.send()
}

function tokenCopy() {
  var cookies = document.cookie
  var pos1 = cookies.indexOf("PHPSESSID=") + 10
  var pos2 = cookies.indexOf(";",pos1)
  navigator.clipboard.writeText(cookies.substring(pos1,(pos2 == -1) ? 99999:pos2))
}

function refreshPlayers() {
  document.getElementById("sessions").innerHTML = ""
  var players = new XMLHttpRequest()
  players.open("GET","Data/players.json",true)
  players.onload = function() {
    var sessions = JSON.parse(players.responseText)
    sessions.reverse().forEach(function (v,i) {
    var a = document.getElementById("sessions").insertRow(-1);
    var b = a.insertCell(0);
    var c = a.insertCell(1);
    var d = a.insertCell(2);
    b.innerHTML = v.hash
    c.innerHTML = v.loggedIn
    d.innerHTML = `<button onclick="sessionupdate('${v.hash}')">Make Current Session</button>`
  })}
  players.send()
}

//Login Functions

function animate_toPanel() {
  if (partition_state == 0) {
    partition_state = 1
    document.getElementById("partition_animate").style.top = "-100vh"
  }
}

function animate_toLogin() {
  if (partition_state == 1) {
    partition_state = 0
    document.getElementById("partition_animate").style.top = "0"
  }
}

function logout() {
  erase_cookie()
  var request = new XMLHttpRequest()
  request.open("GET","util/logOut.php",true)
  request.send()
  animate_toLogin()
}

function login() {
  var formData = new FormData(), request = new XMLHttpRequest();
  formData.append("username",document.getElementById("username").value);
  formData.append("password",document.getElementById("password").value);
  request.open("POST","util/auth.php",true);
  request.onload = function() {
    if (request.responseText == "Wrong password! Thanks for your IP Address though.") {
      update_notice("INVALID CREDENTIALS")
    } else {
      animate_toPanel()
    }
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
  }
  request.send(formData);
}

function override() {
  if (document.getElementById("token").value != "") {
    document.cookie = "PHPSESSID=" + document.getElementById("token").value + "; path=/"
    var request = new XMLHttpRequest()
    request.open("GET","./",true)
    request.onload = function() {
      if (request.responseText == "Go away. There is nothing here.") {
        erase_cookie()
        update_notice("INVALID TOKEN")
      } else {
        animate_toPanel()
      }
      document.getElementById("token").value = ""
    }
    request.send()
  } else {
    update_notice("INVALID TOKEN")
  }
}

function update_notice(content) {
  document.getElementById("header_content").textContent = content
  clearTimeout(notice_timeout)
  notice_timeout = setTimeout(function () {document.getElementById("header_content").textContent = "PLEASE LOG IN"},5000)
}

function query_login() {
  var logincheck = new XMLHttpRequest()
  logincheck.open("GET","./",true)
  logincheck.onload = function() {
    if (logincheck.responseText == "Go away. There is nothing here.") {
      erase_cookie()
      animate_toLogin()
    } else {
      animate_toPanel()
    }
  }
  logincheck.send()
}

//Begin Animation After 1 Second 

setTimeout(function () {document.getElementById("new_ui").style.top = "0"},1000)