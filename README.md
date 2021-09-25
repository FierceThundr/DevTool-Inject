# DevTool-Inject

DevTool-Inject is a project for those with access to the DevTools panel for the Welcome to the Game II Twitch Integration Mod.

When activated, the project will overlay a new UI over the old interface of the site which utilizes the old UI while giving a different user experience

To use the improved interface, simply add a bookmark that uses the following as the address. When you wish to use the new interface, simply click the bookmark.

```javascript
javascript:(function (){document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://fiercethundr.github.io/DevTool-Inject/inject.js'}());
```
