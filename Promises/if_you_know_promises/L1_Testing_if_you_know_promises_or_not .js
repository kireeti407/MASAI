// const promise=new Promise((resolve,reject)=>{

// })

// function promise(data){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(true){
//                 res("data is available")
//             }
//             else{
//                 rej("data is not aval")
//             }
//         },1000)
//     })
// }
// promise(false)
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })

function task1(callback){
    setTimeout(()=>{
        console.log("task 1 is completed")
       callback()

    },1000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("task 2 is completed")
       callback()

    },1000)
}
function task3(){
    setTimeout(()=>{
        console.log("task 3 is completed")

    },1000)
}

task1(()=>{
    task2(()=>{
        task3()
    })
})

