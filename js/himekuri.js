var now = new Date();
document.getElementById("date").innerHTML = now.getDate();
document.getElementById("month").innerHTML = now.getFullYear() + " / " +(now.getMonth()+1);
