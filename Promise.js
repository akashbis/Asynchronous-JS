/*const statu = true;
console.log('task 1');
const promise = new Promise(function(res,rej){
    setTimeout(function(){
        if(statu){
            res('aa');
        }else{
            rej('failed');
        }
    },1000)

});

function add(){
    console.log('add function');
    const promise =new Promise(function(res,rej){
        res('akash');
    })
    return promise;
}

promise
    .then(add)
    .then(function(val){
        console.log(val);
    })
    .catch(function(err){
        console.log(err);
    })

console.log('task 3');

*/


const paymentSuccess = false;
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

enroll()
    .then(progress)
    .then(certificate)
    .then(function(val){
        console.log(val);
    })
    .catch(function(err){
        console.log(err);
    })
