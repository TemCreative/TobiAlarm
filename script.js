myanswr.style.display= "none"
get.style.display="none"
 function shwcrntTime(){
     var myDate= new Date();
     var myHour= myDate.getHours(); 
     var myMinutes= myDate.getMinutes();
     var mySeconds= myDate.getSeconds();
     var ap= (myDate.getHours()) < 12 ? 'AM' : 'PM';
     gettym.innerHTML= myHour + " : " + myMinutes + " : " + mySeconds + " " + ap;
         
     
     if (hr.value == myHour && mn.value == myMinutes && sc.value == mySeconds) {
         // alert("Hi")
         snd.play()
      }
    
 }