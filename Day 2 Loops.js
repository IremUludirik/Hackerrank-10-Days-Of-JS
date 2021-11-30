function vowelsAndConsonants(s) {
    
    let sesli="aeiou";
    let sessiz="bcdfghjklmnpqrstvwxyz";
    
    let str = s.toString();
    for(let i=0; i<= str.length; i++){
        
        if(sesli.includes(str[i])){
            console.log(str[i]); 
        }
    } 
    for(let j=0; j<= str.length; j++){
        if(sessiz.includes(str[j])){
            console.log(str[j]);
        }
    } 
}