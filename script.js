
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

if (location.href != "https://naskogdps17.7m.pl/wttg/dev/") {
  alert("This code injection can only be used at https://naskogdps17.7m.pl/wttg/dev/")
  throw new Error("This code injection can only be used at https://naskogdps17.7m.pl/wttg/dev/");
}

//Build the UI and inject header information

var css = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
css.href='https://unpkg.com/simplebar@5.2.1/dist/simplebar.css'
css.rel='stylesheet'

var css = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
css.href='https://fiercethundr.github.io/DevTool-Inject/style.css'
css.rel='stylesheet'

var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'))
style.innerHTML='.new_ui {color:hsl(120,100%,50%)} .simplebar-scrollbar::before {background-color:hsl(120,100%,50%)}'
style.id='dynamic_color'

document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://unpkg.com/simplebar@5.2.1/dist/simplebar.min.js'

document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://use.fontawesome.com/b51eec3906.js'
	
window.scrollTo(0,0);

var div = document.body.insertBefore(document.createElement("div"),document.body.firstChild);
div.className='new_ui'
div.id='new_ui'
div.innerHTML = `
<p class="block_ver"><i>Devtools Version 1.0.1</i></p>
    
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
      <textarea id="command_additional" oninput="document.getElementById('getAdditional').value = this.value" class="command_additional" placeholder="Please choose a command"></textarea>
      <button onclick="document.getElementById('submitData').click()" class="command_submit">Submit Command</button>
    </div>
  </div>
  <div class="databar">
    <button onclick="document.getElementById('resetData').click()">Reset Data</button>
    <button onclick="location.href='https://naskogdps17.7m.pl/wttg/dev/util/logOut.php'">Logout</button>
    <button onclick="window.open('https://naskogdps17.7m.pl/wttg/dev/Data/data.json','_blank')">View Incoming Data</button>
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

<div><div class="colorbox">Interface Color<b>:</b><input oninput="setcolor(0,this.value)" type="range" min="0" max="360" value="120" id="primary"></div></div>`

//Interface Configuration

var tools = [
  {"name":"Modify Tick Count","value":"updateTickCount","description":"Modify the delay in seconds between when the game checks for commands.","additional":"Amount of seconds between checks"},
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
  {"name":"Play Sound","value":"playTrollPoll","description":"Play a specified sound file. A list of sounds can be found below. If the value provided is not a valid sound, vacation is played.<br><br>[Available Sounds]: vacation, triangle, polishcow, nyancat, stickbug, jebaited, keyboardcat, running, stal, chungus, gnome, rickroll, diarrhea, blue, coffin, crab, thomas<br><br>(Only one sound can be played at a time)","additional":"Name of sound to play"},
  {"name":"Stop Sound","value":"killTrollPoll","description":"Stop the current troll sound playing."},
  {"name":"Play Lockpick","value":"trollLockPick","description":"Play the lockpicking noise made by the Hitman."},
    {"section":"&gt; Teleport"},
  {"name":"Teleport Elevator","value":"doomersElevator","description":"Teleport the player inside the elevator."},
  {"name":"Teleport Lobby","value":"doomersOutside","description":"Teleport the player to the lobby."},
  {"name":"Teleport Apartment","value":"doomersHome","description":"Teleport the player inside the apartment."},
  {"name":"Teleport Hallway","value":"doomersHallway","description":"Teleport the player into the apartment hallway."},
  {"name":"Teleport Bathroom","value":"doomersApartment","description":"Teleport the player inside the apartment bathroom."},
    {"section":"&gt; Enemies"},
  {"name":"Increase Difficulty","value":"diffIncrease","description":"Increase the players difficulty value. Functionally maxes out at a value of 8. Accepts negative values, results untested.","additional":"Amount to increase difficulty"},
  {"name":"Spawn Noir","value":"noircult","description":"Spawn the Noir to stalk the player."},
  {"name":"Spawn Doll Maker","value":"dollMaker","description":"Immediately summon the Doll Maker at the apartment of the player."},
  {"name":"Always Breather (Enable)","value":"breatherOn","description":"Force the Breather to always spawn when the player enters the alley."},
  {"name":"Always Breather (Disable)","value":"breatherOff","description":"Undo the effect of the command \"Always Breather (Enable)\" above."},
  {"name":"Disable Enemies (Enable)","value":"casual","description":"Disable all enemies. This includes the Breather, Police, Doll Maker, Noir, and Hitman. Additionally blocks random hacks from occuring."},
  {"name":"Disable Enemies (Disable)","value":"noCasual","description":"Undo the effect of the command \"Disable Enemies (Enable)\" above."},
  {"name":"Kill Player","value":"killp","description":"Force the player die via a chosen method. The available methods are police, lucas, or noir. If the value provided is not valid, [awaiting answer].","additional":"Method to kill player"},
    {"section":"&gt; Discount"},
  {"name":"Discount ZeroDay Market","value":"zeroDiscount","description":"Discount the prices of the ZeroDay Market."},
  {"name":"Discount Shadow Market","value":"shadowDiscount","description":"Discount the prices of the Shadow Market."},
    {"section":"&gt; DosCoin"},
  {"name":"Modify DosCoins (Add)","value":"addCoins","description":"Give the player a specified amount of DosCoin and play a positive sound effect.","additional":"Amount of DosCoin to give"},
  {"name":"Modify DosCoins (Remove)","value":"subCoins","description":"Remove a specified amount of DosCoin from the player and play a negative sound effect.","additional":"Amount of DosCoin to take"},
  {"name":"Set Loan","value":"setloan","description":"Set a loan the player must repay before beating the game.","additional":"The amount the player must repay"},
  {"name":"Change Remote VPN Level","value":"changeVPN","description":"","additional":""},
    {"section":"&gt; Documents"},
  {"name":"Spawn Key File","value":"keyDoc","description":"Spawn a file containing the specified key on the players desktop. If an invalid key is provided, no file will be made.","additional":"The number of the key you want to give"},
  {"name":"Spawn Custom File","value":"doc","description":"Create a custom file on the players desktop. Your file must be provided in the following format... \"name:content\"","additional":"The file you want to make"},
  {"name":"Spawn Tenant File","value":"giveTenant","description":"Spawn a file on the players desktop containing the information of a random tenant in the building including room number."},
    {"section":"&gt; Viruses"},
  {"name":"Delete Notes","value":"clearNotes","description":"Delete the contents of the computers notepad."},
  {"name":"Shutdown Computer","value":"shutdownPC","description":"Shutdown the players computer."},
  {"name":"Viruses (Add)","value":"virus","description":"Download a specified amount of viruses to the players computer.","additional":"The amount of viruses to download"},
  {"name":"Viruses (Remove)","value":"vwipe","description":"Open VWipe and run a virus scan."},
  {"name":"Activate TH3SW4N","value":"swan","description":"Download TH3SW4N virus to the players computer. It requires the player to input a code before the swans timer reaches zero. If the player fails to do this, TH3SW4N will shutdown the computer, clear the players notepad, and steal DosCoin."},
  {"name":"Activate D05_DR41N3R","value":"dosdrainer","description":"Infect the players current wifi network with D05_DR41N3R. When the player is on a wifi network with D05_DR41N3R, they will lose one DosCoin every second they stay on that network."},
    {"section":"&gt; Hacks"},
  {"name":"Send Hack (Normal)","value":"hack","description":""},
  {"name":"Send Hack (1337)","value":"hackpog","description":""},
  {"name":"Send Hack (Blackhat)","value":"blackhat","description":""},
  {"name":"Whitehat","value":"whitehat","description":""},
  {"name":"Whitehat (Force Item)","value":"itemwhitehat","description":""},
  {"name":"Drain Backdoors","value":"drainBackdoor","description":""},
    {"section":"&gt; WiFi"},
  {"name":"Spawn Network Password","value":"wifiDoc","description":"Spawn a file on the players desktop containing the password of a random WiFi network."},
  {"name":"Disconnect from WiFi","value":"disconnectWifi","description":"Force a player to disconnect from their current WiFi network."},
  {"name":"Change WiFi Speed","value":"speedManipulator","description":"Modify the players wifi speed to be faster or slower than normal. The available options are faster and slower.","additional":"The wifi speed you want"},
  ]

//Build Dynamic Interfaces

tools.forEach(function (v,i) {
  var button = document.createElement("button")
  document.getElementById("toollist").appendChild(button)
  if (v.section != undefined) {
    button.outerHTML = `<button><h3 style="display:inline">&nbsp;${v.section}</h3></button>`
  } else {
    button.outerHTML = `<button onclick="toolupdate(${i})">${v.name}</button>`
  }
})

var table = document.querySelector(".table > tbody"),sessions = []
for (var i = 0, row; row = table.rows[i]; i++) {
  sessions[i] = {}
  for (var j = 0, col; col = row.cells[j]; j++) {
    if (j == 1) {sessions[i].hash = col.innerText}
    if (j == 3) {sessions[i].log = col.innerText}
  }  
}
sessions.reverse().forEach(function (v,i) {
  var a = document.getElementById("sessions").insertRow(-1);
  var b = a.insertCell(0);
  var c = a.insertCell(1);
  var d = a.insertCell(2);
  b.innerHTML = v.hash
  c.innerHTML = v.log
  d.innerHTML = `<button onclick="sessionupdate(${i})">Make Current Session</button>`
})

//Retrieve Saved Color of Interface

if (localStorage.getItem('color0') == undefined) {localStorage.setItem('color0',120)}
document.getElementById("dynamic_color").innerHTML = `.new_ui {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)}`

//Update Functions

function setcolor(i,c) {
  localStorage.setItem(`color${i}`,c)
  document.getElementById("dynamic_color").innerHTML = `.new_ui {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)}`
}

function sessionupdate(i) {
  document.getElementById("hashCode").value = sessions[i].hash
  document.getElementById("current_session").innerHTML = "[Current Session] " + sessions[i].hash
}

function toolupdate(i) {
  var data = tools[i]
  document.getElementById("getAction").value = data.value
  document.getElementById("command_name").innerHTML = data.name
  document.getElementById("command_description").innerHTML = data.description
  document.getElementById("command_additional").value = ""
  document.getElementById("command_additional").disabled = (data.additional == null);
  document.getElementById("command_additional").placeholder = (data.additional != null) ? data.additional:"This command does not have input";
}

setTimeout(function () {document.getElementById("new_ui").style.top = "0"},1000)