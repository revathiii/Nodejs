/*const isRideAccepted = true;
const p1 = () => {
    return new Promise((resolve, reject) => {
    if(isRideAccepted){
        resolve('Enjoy your ride');
    }else{
        rejected('Please look for other cab driver');
    }
})
}
p1().then((message) =>{
    console.log(message);
}).catch((message) => {
    console.log(message);
})
*/

const fs=require('fs');
const read = (fileName) =>{
    return new Promise((resolve,reject) =>{
        fs.readFile(fileName,(err,data) =>{
            if(err){
                reject("Unable to read file! ")
            }
            resolve(data);
        })
    })
}

read(`${__dirname}/pet1.txt`)
.then((data) =>{ 
    console.log(data.toString());
}).catch((message) => {
    console.log(message);
})