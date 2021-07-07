

var inputBTN = document.getElementById("SubmitBtn");
inputBTN.addEventListener('click', myfunction);

function myfunction(e){
    e.preventDefault();
    var x = document.getElementById("input name");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "\n";
    }
    console.log(text);
    //document.getElementById("SubmitBtn").innerHTML = text;
}