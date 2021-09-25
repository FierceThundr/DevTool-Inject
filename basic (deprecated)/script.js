
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

//Build the UI and inject header information

document.body.innerHTML = ""

var css = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
css.href='https://unpkg.com/simplebar@5.2.1/dist/simplebar.css'
css.rel='stylesheet'

var css = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'))
css.href='https://common-test-ground.glitch.me/inject/inject-css.css'
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
  {"name":"Play Short Sound","value":"shortTroll","description":"Play a specified short sound file. A list of sounds can be found below. If the value provided is not a valid sound, mlg is played.<br><br>[Available Sounds]: mlg, balloonboy, virus, swamp<br><br>(Only one sound can be played at a time)","additional":"Name of sound to play"},
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
  {"name":"Manipulate Key Cue","value":"keyManipulator","description":"Modify the players key cue to be enabled or disabled. The available options are enabled and disabled. If an invalid option is provided, the command does nothing. The effect expires after a duration of 10 minutes.","additional":"The wifi speed you want"},
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
  document.cookie = "PHPSESSID=" + document.getElementById("token").value
  var request = new XMLHttpRequest()
  request.open("GET","./",true)
  request.onload = function() {
    if (request.responseText == "Go away. There is nothing here.") {
      update_notice("INVALID TOKEN")
    } else {
      animate_toPanel()
    }
    document.getElementById("token").value = ""
  }
  request.send()
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

//Randomizer Concept Code

var tools_random = [
    
  //{"value":"","chance":"10","additional":{"type":1,"options":[1,8]}},
  //{"value":"","chance":"","additional":{"type":0,"range":[]}},
  //{"value":"","chance":""},
  
  {"value":"openWindow","chance":"1"},
  {"value":"closeWindow","chance":"1"},
  {"value":"trippower","chance":"1"},
  {"value":"toggleLock","chance":"-1"},
  {"value":"INSANITY","chance":"1000"},
  {"value":"spawnAdam","chance":"1"},
  {"value":"deSpawnAdam","chance":"1"},
  {"value":"spawnDancing","chance":"1"},
  {"value":"despawnDancing","chance":"1"},
  
  {"value":"playTrollPoll","chance":"1","additional":{"type":1,"options":["vacation","triangle","polishcow","nyancat","stickbug","jebaited","keyboardcat","running","stal","chungus","gnome","rickroll","diarrhea","blue","coffin","crab","thomas"]}},
  {"value":"shortTroll","chance":"1","additional":{"type":1,"options":["mlg","balloonboy","virus","swamp"]}},
  {"value":"trollScanner","chance":"1"},
  {"value":"trollLockPick","chance":"1"},
  {"value":"killTrollPoll","chance":"-1"},
    
  {"value":"GoldenFreddy","chance":"100"},
    
  {"value":"doomersElevator","chance":"-1"},
  {"value":"doomersOutside","chance":"-1"},
  {"value":"doomersHome","chance":"1"},
  {"value":"doomersHallway","chance":"-1"},
  {"value":"doomersApartment","chance":"-1"},
    
  {"value":"diffIncrease","chance":"10","additional":{"type":0,"range":[1,8]}},
  {"value":"noircult","chance":"1"},
  {"value":"dollMaker","chance":"100"},
  {"value":"breatherOn","chance":"10"},
  {"value":"breatherOff","chance":"1"},
  {"value":"casual","chance":"-1"},
  {"value":"noCasual","chance":"-1"},
  {"value":"killp","chance":"1000","additional":{"type":1,"options":["police","lucas","noir"]}},
  
  {"value":"zeroDiscount","chance":"100"},
  {"value":"shadowDiscount","chance":"100"},
  
  {"value":"addCoins","chance":"1","additional":{"type":0,"range":[1,1000]}},
  {"value":"subCoins","chance":"1","additional":{"type":0,"range":[1,1000]}},
  {"value":"setloan","chance":"10","additional":{"type":0,"range":[1,1000]}},
  {"value":"changeVPN","chance":"1","additional":{"type":0,"range":[1,3]}},

  {"value":"keyDoc","chance":"10","additional":{"type":0,"range":[1,8]}},
  {"value":"doc","chance":"1","additional":{"type":2,"text":""}},
  {"value":"giveTenant","chance":"1"},
  
  {"value":"clearNotes","chance":"1"},
  {"value":"shutdownPC","chance":"1"},
  {"value":"virus","chance":"10","additional":{"type":0,"range":[1,10]}},
  {"value":"vwipe","chance":"10"},
  {"value":"swan","chance":"100"},
  {"value":"dosdrainer","chance":"1"},
  
  {"value":"hack","chance":"3"},
  {"value":"hackpog","chance":"2"},
  {"value":"blackhat","chance":"1"},
  {"value":"whitehat","chance":"10"},
  {"value":"itemwhitehat","chance":"10"},
  {"value":"drainBackdoor","chance":"1"},
  
  {"value":"wifiDoc","chance":"1"},
  {"value":"disconnectWifi","chance":"1"},
  {"value":"speedManipulator","chance":"1","additional":{"type":1,"options":["faster","slower"]}}
  ]

/*
setInterval(function () {
  var formData = new FormData(), request = new XMLHttpRequest(), temp_data, tool_data, keynum, keyval
  console.log(`=========================================`)
  do {
    tool_data = tools_random[Math.floor(Math.random() * tools_random.length)]
    console.log(`# Trying "${tool_data.value}"`)
  } while (Math.floor(Math.random() * tool_data.chance) !== 0)
  
  console.log(`-----------------------------------------`)
  console.log(`# Executing ${JSON.stringify(tool_data)}`)
    
  if (tool_data.additional != undefined) {
    switch (tool_data.additional.type) {
      case 0:
        tool_data.additional.value = (Math.floor(Math.random() * tool_data.additional.range[1]) + tool_data.additional.range[0])
        break;
      case 1:
        tool_data.additional.value = tool_data.additional.options[Math.floor(Math.random() * tool_data.additional.options.length)]
        break;
      case 2:
        keynum = (Math.floor(Math.random() * 8) + 1)
        keyval = "1234567890abcdef1234567890abcdef1234567890abcdef".split("").sort(function(a, b){return 0.5 - Math.random()}).join("").slice(0,12);
        tool_data.additional.value = `Key${keynum}.txt:${keynum} - ${keyval}`
        break;
    }
  }

  formData.append("submitData",command.session);
  formData.append("TheAction",tool_data.value);
  formData.append("TheAdditional",(tool_data.additional == undefined) ? "":tool_data.additional.value);
  request.open("POST","./",true);
  request.send(formData);
  
  console.log(`# Sent "${tool_data.value}" with additional data of "${(tool_data.additional == undefined) ? "":tool_data.additional.value}" to session "${command.session}"`)
},300000)
//*/