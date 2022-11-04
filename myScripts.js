//CLOCK SCRIPT
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

//POST-IT NOTE

if (localStorage["note"]) {
  var note = localStorage["note"];
  document.getElementById("note").value = note;
}

function autoSave() {
  var note = document.getElementById("note").value;
  localStorage.setItem("note", note);
}