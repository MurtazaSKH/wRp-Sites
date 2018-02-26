var xmlhttp;

///////////////////////////////////////////////////// Ajax web service
function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
return null;
}

///////////////////////////////////////////////////// load plugins list
function login()
{
 xmlhttp=GetXmlHttpObject();
 if (xmlhttp==null)
 {
 alert ("Browser does not support HTTP Request");
 return;
 }
 var user=document.getElementById("username").value;
 var pass=document.getElementById("password").value;
 var loggedin=document.getElementById("loggedin").checked;


 if(loggedin==true)
 {
   // global variable so the cookies can be saved
   usercook=user;
   passcook=pass;
 }

 // attempt to check for user/pass in database
 if(user != "" && pass !="")
 {
   var url = "./includes/ajax.php";
   url = url + "?func=login&user="+user+"&pass="+pass+"&loggedin="+loggedin;
   url=url+"&sid="+Math.random();
   xmlhttp.onreadystatechange=login_callback;
   xmlhttp.open("GET",url,true);
   xmlhttp.send(null);
   //alert(url);
 }
 else
 {
   notifContent = '<div class="alert alert-dark media fade in bd-0" style="background:#920000;" id="message-alert"><div class="media-body width-100p"><h4 class="alert-title f-14">Could not log you in!</h4><p class="f-12 alert-message pull-left">Please do not leave field(s) empty</p><p class="pull-right"></p></div></div>';
       setTimeout(function() {
           if (!$('#quickview-sidebar').hasClass('open') && !$('.page-content').hasClass('page-builder') && !$('.morphsearch').hasClass('open')) generateError(notifContent);
       }, 100);
 }
}

function login_callback()
{
if (xmlhttp.readyState==4)
{
 var response= xmlhttp.responseText;
 if(response.length<14)
 {
   window.location.href=response;
   document.cookie = "username="+usercook+"; expires=Sun, 1 Jan 2017 12:00:00 UTC; path=/";
   document.cookie = "password="+passcook+"; expires=Sun, 1 Jan 2017 12:00:00 UTC; path=/";
 }
 else
 {
   notifContent = '<div class="alert alert-dark media fade in bd-0" style="background:#920000;" id="message-alert"><div class="media-body width-100p"><h4 class="alert-title f-14">Could not log you in!</h4><p class="f-12 alert-message pull-left">'+response+'</p><p class="pull-right"></p></div></div>';
   setTimeout(function() {
       if (!$('#quickview-sidebar').hasClass('open') && !$('.page-content').hasClass('page-builder') && !$('.morphsearch').hasClass('open')) generateError(notifContent);
   }, 100);
 }
}
}
