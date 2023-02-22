
function enroll(paymentSuccess, marks){
    console.log("Course enrollment is in progress..")
    const promise = new Promise((resolve, reject) =>{
        if(paymentSuccess){
            resolve(marks);
        }else {
            reject("Payment Failed!");
        }
    })
    return promise;
}

function progress(marks){
    console.log("Course on progress..");
    const promise = new Promise((resolve, reject) => {
        if(marks >= 60){
            resolve();
        }else {
            reject("You could not get enough marks to get certificate!");
        }
    })
    return promise;
}

function getCertificate(){
    console.log("Preparing Certificate..");
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Congrats! You got the certificate")
        }, 2000);
    })
    return promise;
}

// Promise Handling

enroll(true, 70)
.then((res)=>{
   return progress(res);
})
.then(getCertificate)
.then((res)=> console.log(res))
.catch((err)=> console.log(err));


const involkation = async()=>{
    try {
        const enrollres = await enroll(true, 80);
        const progressres = await progress(enrollres);
        const certificateres = await getCertificate();
        console.log(certificateres);
        
    } catch (err) {
        console.log(err);
    }
}
involkation();
