const paymentSuccess = true;
const mark = 70;

function enroll(callback){
    console.log('course enrollment in progress');
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }else{
            console.log('payment failed');
        }
    },2000);
}

function progress(callback){
    console.log('course on progress');
    setTimeout(function(){
        if(mark>=80){
            callback();
        }else{
            console.log('you could not get enough mark for ertificate');
        }
    },3000);
}

function certificate(){
    console.log('preparing certificate');
    setTimeout(function(){  
        console.log('congrass you got the certificate');
        
    },1000);
}

enroll(function(){
    progress(certificate);
});
