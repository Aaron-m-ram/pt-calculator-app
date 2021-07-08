// Submit button click //

var inputBTN = document.getElementById("SubmitBtn");
inputBTN.addEventListener('click', myfunction);

// takes input for runtime, situps and pushups then adds them to array // 

function myfunction(){
   var x = document.getElementById("input name");
    var text = [];
    var i;
    for (i = 0; i < x.length -1 ;i++) {
      text.push(x.elements[i].value);
    }
    
    // Turns sit ups and push ups to number from string //

    var newNum = parseInt(text[1]);
    var newNum2 = parseInt(text[2]);
    
    // ------------- testing codes below --------- //
    //console.log(typeof(newNum), typeof(newNum2)); **
    //console.log(func2(newNum, newNum2)); // <= call functions to do input ** 
    //return text; ** 

    // Takes input of Gender //

    var inpobj = document.getElementById("inlineFormCustomSelect");
    strUser = inpobj.value;
    
    //console.log(typeof strUser); **test**

    // checks if gender is female or male then sends output //
    
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
    // ------ Test ----- //
    // sum of situps and pushups //
function func2(num1, num2){
    totalscore = num1 += num2;
    return totalscore;
}


    //console.log(text); **test**
    //document.getElementById("SubmitBtn").innerHTML = text; **test**