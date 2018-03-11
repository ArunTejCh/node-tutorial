var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }else{
                reject('Arguments must be numbers');
            }
        }, 1000)
    });
}
/*

var somePromise = new Promise((resolve, reject) => {
   setTimeout(() => {
       // resolve('Hey it worked');
       reject('It didnt work!');
   }, 2000);
});

somePromise.then((message) => {
    console.log('Success: '+message);
}, (errorMessage) => {
    console.log(errorMessage);
});
*/

/*
somePromise.catch((message) => {
    console.log(message);
});*/

asyncAdd(5,'7').then((res) => {
    console.log('Result: '+res);
    return asyncAdd(res, 34);
}).then((res) => {
    console.log('Result: '+res);
}).catch((errMessage) => {
        console.log(errMessage);
    }
)

