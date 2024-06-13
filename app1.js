function asynchronousLoop() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(`Asynchronous loop iteration ${i}`);
            const randomValue = Math.floor(Math.random() * 100);
            console.log(`Random value: ${randomValue}`);
        }, i * 1000); // Wait for i seconds
    }
    console.log("Asynchronous loop started");
}
asynchronousLoop();
export {};
