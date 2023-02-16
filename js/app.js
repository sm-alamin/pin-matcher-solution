function generateOtp(){
    const randomOtp = Math.round(Math.random()* 10000);
    const makeRandomOtpString = randomOtp.toString();
    if(makeRandomOtpString.length === 4){
        return makeRandomOtpString;
    }else{
        return generateOtp();
    }
    
}
document.getElementById('generate-btn').addEventListener('click', function(){
    const otp = generateOtp();
   
    const otpInputElement = document.getElementById('otp-input');
    otpInputElement.value = otp;

})
document.getElementById('calculator').addEventListener('click', function(event){
    const digit = event.target.innerText;
    const displayInputElement = document.getElementById('display-number');
    const previousNumber = displayInputElement.value;
   if(isNaN(digit)){
        if(digit === "C"){
            displayInputElement.value = '';
        }else if(digit === "<"){
            const splitPreviousNumber = previousNumber.split('');
            splitPreviousNumber.pop();
            const joinPreviousNumber = splitPreviousNumber.join('');
            displayInputElement.value = joinPreviousNumber;
        }
   }else{
    const newNumber = previousNumber + digit;
    displayInputElement.value = newNumber;
   }
   

})
document.getElementById('btn-submit').addEventListener('click', function(){
    const generatedOtp = document.getElementById('otp-input');
    const generatedOtpValue = generatedOtp.value;
    const typedOtp = document.getElementById('display-number');
    const typedOtpValue = typedOtp.value;
   const messageSuccess = document.getElementById('success-message');
   const messageWrong = document.getElementById('wrong-message');
    if(typedOtpValue === generatedOtpValue){
        messageSuccess.style.display = 'block'
        messageWrong.style.display = 'none';
    }else{
        messageSuccess.style.display = 'none';
        messageWrong.style.display = 'block';
    }

})