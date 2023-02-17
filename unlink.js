const fs=require('fs');
fs.unlink(`${__dirname}/pet1.txt`,(err) => {
    if(err){
        console.log("Error Happened")
        console.log(err);
        return
    }
    console.log("Deleted successfully");
})