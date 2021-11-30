  let clockwiseNum=[1,2,3,6,9,8,7,4];
  
  let btn5DOM=document.getElementById('btn5');
  
  btn5DOM.onclick= function(){
    
    clockwiseNum.unshift(clockwiseNum.pop());
    
    document.getElementById("btn1").innerHTML=clockwiseNum[0]
    document.getElementById("btn2").innerHTML=clockwiseNum[1]
    document.getElementById("btn3").innerHTML=clockwiseNum[2]
    document.getElementById("btn4").innerHTML=clockwiseNum[7]
    document.getElementById("btn6").innerHTML=clockwiseNum[3]
    document.getElementById("btn7").innerHTML=clockwiseNum[6]
    document.getElementById("btn8").innerHTML=clockwiseNum[5]
    document.getElementById("btn9").innerHTML=clockwiseNum[4]
  }
  ;
  