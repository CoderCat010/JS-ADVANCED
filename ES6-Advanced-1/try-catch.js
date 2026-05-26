function submitBtn(){
    // input box
    const input = document.getElementById('inputBox');
    const inputText = input.value;
    const errorMsg = document.getElementById('errorMsg');
    
    // error handleling
    try{
        // console.log(bBaria);
        const num = parseInt(inputText);
        
        // check waether input value is a number 
        if(isNaN(num)){
            throw 'please enter a number'
        }
    }
    catch(err){
        console.log('ERROR: ', err);
        errorMsg.innerHTML = 'Something is wrong...!';
    }
    finally{
        console.log('all done');   
    }
}