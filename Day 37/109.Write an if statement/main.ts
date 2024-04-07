function greet():string{
    const today = new Date
    const time = today.getTime()
    if(time < 12){
        return "Good Morning"
    }else{
        return "Timeout"
    }
}
console.log(greet())