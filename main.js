
 var x= document.getElementById("txt")     ;
function bd()
{ 
  if (x.style.fontWeight!="bold")
{
  x.style.fontWeight="bold";
}
else 

x.style.fontWeight="normal";


}

function ic()
{
  if (x.style.fontStyle!="italic" )

  x.style.fontStyle="italic";   
  
  else 
  x.style.fontStyle="normal"; 

}
function ue()
{
  if (x.style.textDecoration!="underline")
  x.style.textDecoration="underline";  
  else 
  x.style.textDecoration="none" ; 

}

var y= document.getElementById("slc");


function bigger()
{
x.style.fontSize=y.value;
 }
 var z= document.getElementById("ff");

 function ffam()
 
 {
  x.style.fontFamily=z.value;

 }



$(".course1").hover(function(){
  $(".btnCourses1").toggleClass('btnCourses1Hover')
})

$(".course2").hover(function(){
  $(".btnCourses2").toggleClass('btnCourses2Hover')
})

$(".course3").hover(function(){
  $(".btnCourses3").toggleClass('btnCourses3Hover')
})

$(".course4").hover(function(){
  $(".btnCourses4").toggleClass('btnCourses4Hover')
})

$(".course5").hover(function(){
  $(".btnCourses5").toggleClass('btnCourses5Hover')
})

$(".course6").hover(function(){
  $(".btnCourses6").toggleClass('btnCourses6Hover')
})
$(".course7").hover(function(){
  $(".btnCourses7").toggleClass('btnCourses7Hover')
})

$(".course8").hover(function(){
  $(".btnCourses8").toggleClass('btnCourses8Hover')
})

$(".course9").hover(function(){
  $(".btnCourses9").toggleClass('btnCourses9Hover')
})
  
