

var inputBTN = document.getElementById("SubmitBtn");
inputBTN.addEventListener('click', myfunction);

function myfunction(){
    //e.preventDefault();
    var x = document.getElementById("input name");
    var text = [];
    var i;
    for (i = 0; i < x.length -1 ;i++) {
      text.push(x.elements[i].value);
    }
    
    console.log(func2(text[1], text[2])); // <= call functions to do input
    //return text;

}



function func2(num1, num2){
    totalscore = num1 += num2;
    return totalscore;

}


    //console.log(text);
    //document.getElementById("SubmitBtn").innerHTML = text;