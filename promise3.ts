//Snippet 1
const myAsynFunction = async (url: string): Promise<T> => {
    const { data } = await fetch(url)
    return data
}

//Snippet 2
const immediatelyResolvedPromise = (url: string) => {
    const resultPromise = new Promise((resolve, reject) => {
        resolve(fetch(url))
    })
    return  resultPromise
}
console.log(immediatelyResolvedPromise)
console.log(immediatelyResolvedPromise)