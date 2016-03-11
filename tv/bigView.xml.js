var Template = function(dest) { return `<?xml version="1.0" encoding="UTF-8" ?>

<document>

  <alertTemplate>
     <title>Hello World Example</title>
     <description>This is the Hello World ${count} description</description>
     <button action='dismiss'>
        <text>Hit Me!</text>
     </button>
     <text>Hint: Try pressing the button</text>
 <img src="${dest}" width="1700" height="1000" />
  </alertTemplate>
</document>`
}
