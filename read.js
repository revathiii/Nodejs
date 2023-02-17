const fs=require('fs');

fs.readFile(`${__dirname}/pet.txt`,(err, data) => {
    if(err){
        console.log("Error Happened")
        return;
    }
     console.log(data.toString());

})