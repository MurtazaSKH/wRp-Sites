var xmlhttp;

///////////////////////////////////////////////////// Ajax web service
function GetXmlHttpObject() {
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject) {
    // code for IE6, IE5
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  return null;
}

///////////////////////////////////////////////////// load plugins list
function getList() {
  xmlhttp = GetXmlHttpObject();
  if (xmlhttp == null) {
    alert("Browser does not support HTTP Request");
    return;
  }

  // attempt to check for user/pass in database
  var url = "./fetchdata/fetch.php";
  url = url + "?func=displayAllPlugins";
  url = url + "&sid=" + Math.random();
  xmlhttp.onreadystatechange = getList_callback;
  xmlhttp.open("GET", url, true);
  xmlhttp.send(null);
  alert(url);
}

function getList_callback() {
  if (xmlhttp.readyState == 4) {
    alert ('get list response' + response)
    var response = xmlhttp.responseText;
    if(response!="undefined")
    {
        document.getElementById("plugins_list").innerHTML = response
    }
    else {
      // make a sample div for could not load error etc.
      document.getElementById("plugins_list").innerHTML = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
    }
  }
}

///////////////////////////////////////////////////// Update modal info and load
function updateModal(pluginId) {
  xmlhttp = GetXmlHttpObject();
  // document.getElementById("plugin").innerHTML = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
  if (xmlhttp == null) {
    alert("Browser does not support HTTP Request");
    return;
  }

  // attempt to check for user/pass in database
  var url = "./fetchdata/fetch.php";
  url = url + "?func=updatePluginModal&pluginId="+pluginId;
  url = url + "&sid=" + Math.random();
  xmlhttp.onreadystatechange = updateModal_callback;
  xmlhttp.open("GET", url, true);
  xmlhttp.send(null);
}

function updateModal_callback() {
  if (xmlhttp.readyState == 4) {
    var response = xmlhttp.responseText;
    document.getElementById("plugin").innerHTML = response;
  }
}
