function getMaxLessThanK (n,k)  {
    let max= 0;
    for(let a=1; a<n; a++){
        for(let b=a+1; b<=n; b++){
            if((Number(a&b)<k) && (Number(a&b)>max)) {
                max = a&b;
            }
        }
    }
    
    return max;
}