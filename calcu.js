function displaynum(num){
    result.value+=num
    //result.value=result.value+num
}
function allclear(){
    result.value=""
}
function evaluvatexp(){
    // exp=result.value
    // out=eval(exp)
    // result.value=out
result.value=eval(result.value)
}
function removelmt(){
    curntexp=result.value
    result.value=curntexp.slice(0,-1)
}