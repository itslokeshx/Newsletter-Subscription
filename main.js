function userinput()
{
var emailName = document.getElementById("inp").value;
 document.getElementById("rytu").style.display="none";
 document.getElementById("top").style.display="none";
 document.getElementById("lone").innerText="Thanks for subscribing!";
 document.getElementById("ltwo").innerText="A confirmation email has been sent to -- "+ emailName+" --  Please open it and click the  button inside to confirm your subscription";
 document.getElementById("lab").style.display="none";
 document.getElementById("inp").style.display="none";
 document.getElementById("but").innerText="Dismiss message";
 document.getElementById("leftt").style.height="90%";
 document.getElementById("leftt").style.marginTop="40px";
 document.getElementById("suc").style.marginRight="81%";
 document.getElementById("ltwo").style.marginTop="8px";
 document.getElementById("ltwo").style.marginBottom="10px";
 document.getElementById("suc").style.display="flex";
 
}
const mediaQuery = window.matchMedia('(max-width:600px)')
if (mediaQuery.matches) {
  document.getElementById("ghost").style.display="flex";
  document.getElementById("cont").style.borderBottomRightRadius="0px"
  document.getElementById("cont").style.borderBottomLeftRadius="0px"
}