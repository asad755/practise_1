console.log("start")
async function f1(){

    let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let res = await fetchData.json()

    console.log(res)
    console.log("The end")
}

f1()
