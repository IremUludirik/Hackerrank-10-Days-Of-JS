function modifyArray(nums) {
    
    const func = num => num%2==0 ? num*2 : num*3 ;
    
    let arr=nums.map(func);
    
    return arr;
} 