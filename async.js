const paymentSuccess = true;
const mark = 70;

function enroll(){
    console.log('course enrollment in progress');
    const promise = new Promise(function(res,rej){
        setTimeout(function(){
            if(paymentSuccess){
                res();
            }else{
                rej('payment failed');
            }
        },2000);
    });
    return promise;
}

function progress(){
    console.log('course on progress');
    const promise = new Promise(function(res,rej){
        setTimeout(function(){
            if(mark>=70){
                res();
            }else{
                rej('you could not get enough mark for ertificate');
            }
        },3000);
    });
    return promise;
}

function certificate(){
    console.log('preparing certificate');
    const promise = new Promise(function(res){
        setTimeout(function(){  
            res('congrass you got the certificate');
            
        },1000);
    })
    return promise;
}

async function course(){
    try{
        await enroll();
        await progress();
        const msg = await certificate();
        console.log(msg)
    }catch(err){
        console.log(err);
    }
    
}

course();
 