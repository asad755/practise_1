const angelMowersPromise = new Promise<string>((resolve, reject) => {
    // simulating an async operation that resolves after 100,000ms
    setTimeout(() => {
        // assuming the operation is successful
        resolve('We finished mowing the lawn')
    }, 100000)
    // Note: reject should not be called after resolve
})

const myPaymentPromise = new Promise<Record<string, number | string>>((resolve, reject) => {
    // simulating an async operation that resolves after 100,000ms
    setTimeout(() => {
        // assuming the payment operation is successful
        resolve({
            amount: 1000,
            note: 'Thank You',
        })
    }, 100000)
    // Note: reject should not be called after resolve
})

// Example of using the promises
angelMowersPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

myPaymentPromise.then((payment) => {
    console.log(payment);
}).catch((error) => {
    console.log(error);
});
