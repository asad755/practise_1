async function combinedLoop() {
    for (let i = 0; i < 5; i++) {
        console.log(`Combined loop iteration ${i}`);
        const randomValue = Math.floor(Math.random() * 100);
        console.log(`Random value: ${randomValue}`);

        if (i % 2 === 0) {
            await (1000);  // Synchronous delay on even iterations
        } else {
            setTimeout(() => {
                console.log(`Asynchronous action for iteration ${i}`);
            }, 1000);  // Asynchronous delay on odd iterations
        }
    }
    console.log("Combined loop completed");
}

combinedLoop();
