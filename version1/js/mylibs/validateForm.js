// JavaScript Document
function validateForm()
{
var x=document.forms["myForm"]["name"].value
if (x==null || x=="")
  {
  alert("Please enter your name.");
  return false;
  }
  
var x=document.forms["myForm"]["email"].value
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Please enter a valid e-mail address.");
  return false;
  }
  
var x=document.forms["myForm"]["message"].value
if (x==null || x=="")
  {
  alert("Please enter a message.");
  return false;
  }
}