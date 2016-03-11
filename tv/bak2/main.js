var count = 1;

function getWeatherwwww() {

	var xmlhttp = new XMLHttpRequest();
	var url = "http://bigpi.info:500/smallpi.temp.php";
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        //myFunction(myArr);
	count =  Math.floor((myArr["temp"]/1000)*10)/10;
	console.log("ajax count =" + count);
	return count;	    }
		};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
};


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

	//count = getWeather();
       var resource = Template.call(this, count);
        var parser = new DOMParser();
        var doc = parser.parseFromString(resource, "application/xml");

	//http://jsfiddle.net/jW68r/
	//http://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success

	doc.addEventListener("select", function() {
	//	count += 1;
		//count = getWeather();
		getWeather(function(ret_count){
		console.log("ret_count =" + ret_count);
		var oldDoc = doc;
		var newDoc = showHelloWorld(ret_count)
		navigationDocument.replaceDocument(newDoc, oldDoc);
		});
	});	
  return doc;
};

App.onLaunch = function(options) {
	evaluateScripts([`http://bigpi.local/tv/weather.xml.js`],
		function(success) {

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

