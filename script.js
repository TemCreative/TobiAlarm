
 var curntTime = setInterval(shwcrntTime,1000);
 function alarmSet(){
     var myDate= new Date();
     var myHour= myDate.getHours(); 
     var myMinutes= myDate.getMinutes();
     var mySeconds= myDate.getSeconds();
     if (hr.value == myHour && mn.value == myMinutes && sc.value == mySeconds) {
         // alert("Hi")
         snd.play();
      }
 }
