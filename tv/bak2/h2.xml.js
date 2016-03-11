var Template = function(count) { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <alertTemplate>
     <title>Hello World Example</title>
     <description>This is the Hello World ${count} description</description>
     <button>
        <text>Hit Me!</text>
     </button>
     <text>Hint: Try pressing the button</text>
 <img src="http://192.168.1.140/weewx/dayrain.png" width="800" height="600" id="img" />
  </alertTemplate>
</document>`
}
