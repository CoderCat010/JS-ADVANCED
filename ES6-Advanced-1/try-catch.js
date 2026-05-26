function submitBtn(){
    // input box
    const input = document.getElementById('inputBox');
    const inputText = input.value;
    const errorMsg = document.getElementById('errorMsg');
    
    // error handleling
    try{
        console.log(bBaria);
    }
    catch(err){
        console.log('ERROR: ', err);
        errorMsg.innerHTML = 'Something is wrong...!'
    }
}