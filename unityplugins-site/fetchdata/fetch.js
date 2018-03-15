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

  // var url = "./fetchdata/fetch.php";
  // url = url + "?func=viewSlides";
  // url = url + "&sid=" + Math.random();
  // xmlhttp.onreadystatechange = getSlides_callback;
  // xmlhttp.open("GET", url, true);
  // xmlhttp.send(null);
}

function getList_callback() {
  if (xmlhttp.readyState == 4) {
    var response = xmlhttp.responseText;
    if (response != "undefined") {
      // console.log('plugins_list called');
      document.getElementById("plugins_list").innerHTML = response;
    } else {
      // make a sample div for could not load error etc.
    }
  }
}

///////////////////////////////////////////////////// get slides
// load 3 slides based on selected by the user
function getSlides() {
  xmlhttp = GetXmlHttpObject();
  if (xmlhttp == null) {
    alert("Browser does not support HTTP Request");
    return;
  }
  var url = "./fetchdata/fetch.php";
  url = url + "?func=viewSlides";
  url = url + "&sid=" + Math.random();
  xmlhttp.onreadystatechange = getSlides_callback;
  xmlhttp.open("GET", url, true);
  xmlhttp.send(null);

}

function getSlides_callback() {
  if (xmlhttp.readyState == 4) {
    var response = xmlhttp.responseText;
    if (response != "undefined") {
      // console.log('getSlides called');
      document.getElementById("loadSlides").innerHTML = response;
      getList();
    } else {
      // make a sample div for could not load error etc.
    }
  }
}

///////////////////////////////////////////////////// Update modal info and load
function updateModal(pluginId) {

  document.getElementById("plugin").innerHTML = '<div class="uk-modal-dialog uk-modal-body"><div class="uk-grid-collapse uk-child-width-1-1@s uk-flex-middle" uk-grid><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div></div>';

  xmlhttp = GetXmlHttpObject();
  if (xmlhttp == null) {
    alert("Browser does not support HTTP Request");
    return;
  }

  // attempt to check for user/pass in database
  var url = "./fetchdata/fetch.php";
  url = url + "?func=updatePluginModal&pluginId=" + pluginId;
  url = url + "&sid=" + Math.random();
  xmlhttp.onreadystatechange = updateModal_callback;

  xmlhttp.open("GET", url, true);

  setTimeout(function() {
    xmlhttp.send(null);
  }, 600);
}

function updateModal_callback() {
  if (xmlhttp.readyState == 4) {
    var response = xmlhttp.responseText;
    document.getElementById("plugin").innerHTML = response;
  }
}

///////////////////////////////////////////////////// Function to test localhost connection
function testDBConnect() {
  xmlhttp = GetXmlHttpObject();
  if (xmlhttp == null) {
    alert("Browser does not support HTTP Request");
    return;
  }

  // attempt to check for user/pass in database
  var url = "./fetchdata/connect.php";
  url = url + "?func=checkConnection";
  url = url + "&sid=" + Math.random();
  xmlhttp.onreadystatechange = testDBConnect_callback;
  xmlhttp.open("GET", url, true);
  xmlhttp.send(null);
}

function testDBConnect_callback() {
  if (xmlhttp.readyState == 4) {
    var response = xmlhttp.responseText;
    alert(response);
  }
}

///////////////////////////////////////////////////// Function to test localhost connection
function morelesstoggle() {
  document.getElementById('fullDesc').style.display="inline";
  document.getElementById('moreless').style.display="none";
}
