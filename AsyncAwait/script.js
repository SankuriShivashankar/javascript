async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3000);
    })

}
async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    

}
async function main(){

    console.log("Loading modules")
    
    console.log("do something")
    
    console.log("Load the data")
    let data = await getData()
    console.log(data)
    
    console.log("Load the data")
        
    console.log("process the data")
}
main()


// settle means resolve or reject
//resolve means promise has settled successfully
//reject means means promise has not settled successfully

// data.then((v) => {

//     console.log("Load the data")
    
//     console.log("process the data")
// }
// )

