

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
    var newNum = parseInt(text[1]);
    var newNum2 = parseInt(text[2]);
    //console.log(typeof(newNum), typeof(newNum2));
    //console.log(func2(newNum, newNum2)); // <= call functions to do input
    //return text;

    var inpobj = document.getElementById("inlineFormCustomSelect");
    strUser = inpobj.value;
    console.log(typeof strUser);

    if(strUser == 1) { 
        girl();
    } else if(strUser == 2) {
        boy();
    }
    else {
        return null;
    }
}

function boy() {
    console.log('it is a boy')
    
}
function girl() {
    console.log('it is a girl')
}

function func2(num1, num2){
    totalscore = num1 += num2;
    return totalscore;
}


    //console.log(text);
    //document.getElementById("SubmitBtn").innerHTML = text;