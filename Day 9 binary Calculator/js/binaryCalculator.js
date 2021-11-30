let res= getElementById("res");
let operator;

function click0(){
    res.innerHTML += "0";  //innerHTML ile sayfaya yazdırıyorum 0'i vs
}

function click1(){
    res.innerHTML += "1";
}

function clickClr(){
    res.innerHTML += "";
}

function clickEql(){
    let ans;
    let result;
    
    if(operator=="+"){
        let i=(res.innerHTML).indexOf("+"); 
        // indexOf ile + işaretinin index numarası tespit edilip i değişkenine atandı.
        let sum= parseInt((res.innerHTML).substr(i+1),2);
        // parseInt() ile fonksiyona girdiğiniz ikinci parametre ile dönüştürmek 
        //istediğiniz sayı sistemine dönüşüm yaptırabilirsiniz.
        // örneğin, console.log(parseInt("10110", 2)) 
        // 22, yani 10110 sayısının 2'li sistemdeki onluk karşılığı 22'dir. parseInt("a",b) 
        //a parametresi string veya sayı olabilir.
        
        //substr(i+1) dememizin nedeni operatörden sonraki sayıyı alabilmek için.
        and= result + sum;
        
    } else if(operator=="-"){
        let i=(res.innerHTML).indexOf("-"); 
        let sum= parseInt((res.innerHTML).substr(i+1),2);
        and= result - sum;
        
    } else if(operator=="*"){
        let i=(res.innerHTML).indexOf("*");
        let sum= parseInt((res.innerHTML).substr(i+1),2);
        and= result * sum;
        
    } else if(operator=="/"){
        let i=(res.innerHTML).indexOf("/");
        let sum= parseInt((res.innerHTML).substr(i+1),2);
        and= result / sum;
        
    } else {"error!"}
    
    res.innerHTML=ans.toString(2);
    // toString(2) ile birlikte parseInt ile 2'lik tabandan 10'luk 
    //tabana çevirdiğimiz sayıyı tekrar string halde 2'lik tabana geri çeviriyoruz.
}

function clickSum(){
    res.innerHTML+="+";
    operator="+"
    result=parseInt(res.innerHTML,2); 
}

function clickSub(){
    res.innerHTML+="-";
    operator="-"
    result=parseInt(res.innerHTML,2); 
}

function clickMul(){
    res.innerHTML+="*";
    operator="*"
    result=parseInt(res.innerHTML,2); 
}

function clickDiv(){
    res.innerHTML+="/";
    operator="/"
    result=parseInt(res.innerHTML,2); 
}