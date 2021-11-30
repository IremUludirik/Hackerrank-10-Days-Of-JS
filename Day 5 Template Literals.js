function sides(literals, ...expressions) {
    let a=expressions[0];
    let p=expressions[1];
    let s1= (p+((p*p-16*a)**(1/2)))/4;
    let s2= (p-((p*p-16*a)**(1/2)))/4;
    return [s2,s1];
}