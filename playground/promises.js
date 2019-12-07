const doWorkPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej("things went wrong")
    }, 1000)
})

doWorkPromise.then((result) => {
    console.log("Success!", result);
}).catch((error) => {
    console.log("error!!!", error)
});