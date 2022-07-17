const url1="mhee.dev/file1.json"
const url2="mhee.dev/file2.json"
const url3="mhee.dev/file3.json"
const url4="mhee.dev/file4.json"
const url5="mhee.dev/file5.json"
function downloading(url,callback){
    console.log(`กำลังโหลดไฟล์จาก ${url}`)
    setTimeout(()=>{
        callback(url)
    },1000)
}

downloading(url1,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
    downloading(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        downloading(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        })
    })
})
