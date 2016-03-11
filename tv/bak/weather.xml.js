var Template = function(count) { return `<?xml version="1.0" encoding="UTF-8" ?>

<document>
    <showcaseTemplate mode="showcase">
   <background>
         <img src="http://pixelcaster.com/yosemite/webcams/sentinel.jpg?${new Date().getTime()}" />
      </background>
      <banner>
         <title ><text color='black'>Outside ${count}, ${new Date()}</text></title>
<!--
         <row>
		<text color='black'> Temperature Outside is 15c</text>
            <button>
               <text>Slideshow</text>
            </button>
            <button>
               <text>Screensaver</text>
            </button>
         </row>
-->
      </banner>
      <carousel>
         <section>
            <lockup>
               <img src="http://pixelcaster.com/yosemite/webcams/sentinel.jpg?${new Date().getTime()}" width="1200" height="900" />
               <title>Yosemite</title>
            </lockup>
            <lockup>
               <img src="http://pixelcaster.com/yosemite/webcams/ahwahnee2.jpg?${new Date().getTime()}" width="1200" height="800" />
               <title>Yosemite</title>
            </lockup>
            <lockup>
               <img src="http://192.168.1.140/weewx/daytempdew.png?${new Date().getTime()}" width="800" height="600" />
               <title>Temperature</title>
            </lockup>
            <lockup>
              <img src="http://192.168.1.140/weewx/daywind.png?${new Date().getTime()}" width="800" height="600" />
              <title>Wind</title>
            </lockup>
            <lockup>
               <img src="http://192.168.1.140/weewx/weektempdew.png?${new Date().getTime()}" width="800" height="600" />
               <title>Week Temperature</title>
            </lockup>
            <lockup>
               <img src="http://192.168.1.140/weewx/weekwind.png?${new Date().getTime()}" width="800" height="600" />
               <title>Week Wind</title>
            </lockup>
            <lockup>
               <img src="http://192.168.1.140/weewx/dayrain.png?${new Date().getTime()}" width="800" height="600" />
               <title>Rain</title>
            </lockup>
            <lockup>
               <img src="http://radar.weather.gov/ridge/lite/N0R/MUX_loop.gif?${new Date().getTime()}" width="800" height="600" />
               <title>Radar</title>
            </lockup>
         </section>
      </carousel>
   </showcaseTemplate>
  </document>`
}
