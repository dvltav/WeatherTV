var Template = function(count) { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <alertTemplate>
     <title>Hello World Example</title>
     <description>This is the Hello World ${count} description</description>
     <button>
        <text>Hit Me!</text>
     </button>
     <text>Hint: Try pressing the button</text>
 <img src="http://192.168.1.140/weewx/dayrain.png?${new Date().getTime()}" width="800" height="600" id="img" />
 <img src="http://pixelcaster.com/yosemite/webcams/sentinel.jpg?${new Date().getTime()}" width="1200" height="800" />
  </alertTemplate>
</document>`
}
