myanswr.style.display= "none"
get.style.display="none"
 function shwcrntTime(){
     var myDate= new Date();
     var myHour= myDate.getHours(); 
     var myMinutes= myDate.getMinutes();
     var mySeconds= myDate.getSeconds();
     var ap= (myDate.getHours()) < 12 ? 'AM' : 'PM';
     gettym.innerHTML= myHour + ":" + myMinutes + " : " + mySeconds + " : " + ap;
         
     
     if (hr.value == myHour && mn.value == myMinutes && sc.value == mySeconds) {
        
         Snd.play()
      }
    
 }
 var curntTime = setInterval(shwcrntTime,1000);
 function alarmSet(){
     var myDate= new Date();
     var myHour= myDate.getHours(); 
     var myMinutes= myDate.getMinutes();
     var mySeconds= myDate.getSeconds();
     if (hr.value == myHour && mn.value == myMinutes && sc.value == mySeconds) {
    //    alert("Hi")
         Snd.play();
      }
 }
 function resetTime(){
    hr.value = "";
    mn.value = "";
    sc.value = "";
    ply.pause();
}

function stopTime(){
    var myRndNum= Math.floor(Math.random()*10);
    var myRandNum= Math.floor(Math.random()*10);
    var sign = [ '+', '-', '/', '*'];
    var myRndSign= Math.floor(Math.random()*3);
    console.log(myRndSign);
    myanswr.style.display="block";
    myqstn.innerHTML=  myRndNum +  sign[myRndSign]  + myRandNum;
    get.style.display= "block"
        
    }
function submitAns(){
    var output= eval(myqstn.innerHTML);
    var mainOutput= Math.round(output);
    console.log(mainOutput)
    setTimeout(function(){
        if(myanswr.value==mainOutput){
            Snd.pause();
        }
        else(
            Snd.play
        )
    }
    ,5000)


}
// const selectMenu = document.getSelectorAll("select")
// let myHrs = 12
// let mySec = 59
// let myMin = 60


// for (let i = 12; i>0; i--) {
//     let myHour = i< 12 ? "0" + i : i;
//     let option = `<option value="${i}"> ${i}</option>`;
//     selectMenu [0].firstElementsChild.insertAdjacentHTML("afterend", option);

// }
// for (let i = 59; i>0; i--) {
//     let myMin = i < 59 ? "0" + i : i;
//     let option = `<option value="${i}"> ${i}</option>`;
//     selectMenu [0].firstElementsChild.insertAdjacentHTML("afterend", option);

// }
// for (let i = 12; i>0; i--) {
//     let ampm = i == 1 ? "AM" : "PM";
//     let option = `<option value="${i}"> ${i}</option>`;
//     selectMenu [0].firstElementsChild.insertAdjacentHTML("afterend", option);

// }