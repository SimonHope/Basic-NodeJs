
const connect = true;
const url1="mhee.dev/file1.json"
const url2="mhee.dev/file2.json"
const url3="mhee.dev/file3.json"
const url4="mhee.dev/file4.json"
const url5="mhee.dev/file5.json"
function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }
            else{
                reject(`เกิดข้อผิดพลาด`)
            }
        },3000)
    })
}

//Promise Hell
// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })

//Promise Then
downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
})