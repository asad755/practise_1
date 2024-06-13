function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function synchronousLoop() {
    for (let i = 0; i < 5; i++) {
        console.log(`Synchronous loop iteration ${i}`);
        const randomValue = Math.floor(Math.random() * 100);
        console.log(`Random value: ${randomValue}`);
        await delay(1000); // Wait for 1 second
    }
    console.log("Synchronous loop completed");
}
synchronousLoop();
export {};
