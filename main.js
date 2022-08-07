function displayTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  if (h == 0){
    h = 12;
  }
  if (h > 12){
    h = h - 12
    session = "PM";
  }
  if (h < 10){
    h = "0" + h;
  }
  if (m < 10){
    m = "0" + h;
  }
  if (s < 10){
    s = "0" + s;
  }
  var time = h + ":" + m + ":" + s + " " + session;
  
document.getElementById("myClock").innerHTML = time;
document.getElementById("myClock").textContent = time;
}
displayTime();
setInterval(displayTime,1000);
