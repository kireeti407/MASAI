function createOTPSystem(){
    let otp=false
    return {
        generateOTP:function(){
            otp=Math.floor(Math.random()* (999999- 100000 + 1)) + 100000 //i create a random number from 100000 to 999999 and store it in otp
            return `Your OTP is: ${otp}`
        },
        getOTP:function(){
            if(otp){
                let k=otp //here i use variable for storing otp temperly
                otp=false //i assign false because of otp will expire after one use.
                return k
            }
            return "OTP expired"
        }   
    }
}
const otpSystem = createOTPSystem();  
console.log(otpSystem.generateOTP()); // "Your OTP is: 482193"  
console.log(otpSystem.getOTP());      // "482193"  
console.log(otpSystem.getOTP());      // "OTP expired"  
console.log(otpSystem.generateOTP()); // "Your OTP is: 739182"  
console.log(otpSystem.getOTP());      // "739182"  
console.log(otpSystem.getOTP());      // "OTP expired"  
