function getLetter(s) {
    
    let firstValue= s.charAt(0); //inputun ilk karakterini bulduk.
    
    let firstly ="aeiou";
    let secondly = "bcdfg";
    let thirdly = "hjklm";
    let fourthly = "npqrstvwxyz";
    let letter="";
    
    switch(true) {
        case firstly.includes(firstValue):
        letter="A";
        break;
        
        case secondly.includes(firstValue):
        letter="B";
        break;
        
        case thirdly.includes(firstValue):
        letter="C";
        break;
        
        case fourthly.includes(firstValue):
        letter="D";
        break;
    }
    return letter;
}

/*
let letter="";

if (firstly.includes(firstValue)) {
    letter="A";
}

else if (secondly.includes(firstValue)) {
    letter="B";
}

else if (thirdly.includes(firstValue)) {
    letter="C";
}

else if (fourthly.includes(firstValue)) {
    letter="D";
}

else {
    letter="Error!";
}


return letter;
}
*/
