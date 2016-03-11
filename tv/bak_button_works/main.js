var resourceLoader;
var count = 1;

	//http://jsfiddle.net/jW68r/
	//http://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success

function getWeather(callback) {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://bigpi.info:500/smallpi.temp.php";
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        //myFunction(myArr);
			count =  Math.floor((myArr["temp"]/1000)*10)/10;
			console.log("ajax count =" + count);
			callback(count);
			}
		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();		
	};

var showHelloWorld = function(count) {

     var resource = Template.call(this, count);
     var parser = new DOMParser();
     var doc = parser.parseFromString(resource, "application/xml");

	doc.addEventListener("select", _handleEvent);	
  return doc;
};

App.onLaunch = function(options) {

	evaluateScripts([`http://bigpi.local/tv/weather.xml.js`], function(success) {
		getWeather(function(ret_count){
			var doc = showHelloWorld(ret_count)
	    	navigationDocument.pushDocument(doc);
		});
		}
	);
};

App.onResume = function(options) {
    console.log('onResume');
    App.reload({when: "now"});
};

App.onSuspend = function() {
    console.log('onSuspend');
    navigationDocument.clear();
}

function _handleEvent(event) {
  // 1:
  var sender = event.target;
  var action = sender.getAttribute("action");
  // 2:
  switch(action) {
    case "showDetail":
      // 3:
      var data = {
        text: sender.textContent,
        title: sender.getAttribute("title")
      };
      // 4:
      //var expandedText = resourceLoader.getDocument("detail.tvml", data);
evaluateScripts([`http://bigpi.local/tv/hello_world.xml.js`], function(success) {
     var resource = Template.call(this, 1);
     var parser = new DOMParser();
     var expandedText = parser.parseFromString(resource, "application/xml");
      expandedText.addEventListener("select", _handleEvent);
      navigationDocument.presentModal(expandedText);
  });
      break;
    case "dismiss":
      // 5:
      navigationDocument.dismissModal();
      break;
  }

  /**
function() {
		getWeather(function(ret_count){
			console.log("ret_count =" + ret_count);
			var oldDoc = doc;
			var newDoc = showHelloWorld(ret_count)
			navigationDocument.replaceDocument(newDoc, oldDoc);
		});
	}
  **/
}

