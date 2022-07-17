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
        },1000)
    })
}

// Async & Await
async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()