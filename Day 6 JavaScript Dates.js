function getDayName(dateString) {
    
    let date= new Date (dateString)
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];
    
    return days[date.getDay()];
    
}