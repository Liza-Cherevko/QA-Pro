function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (1001 - 100) + 100);
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const total = evenCount + oddCount;
    const evenPercentage = (evenCount / total) * 100;
    const oddPercentage = (oddCount / total) * 100;

    console.log(`Generated ${count} random numbers:`);
    console.log(`Even numbers: ${evenCount} (${evenPercentage.toFixed(2)}%)`);
    console.log(`Odd numbers: ${oddCount} (${oddPercentage.toFixed(2)}%)`);

    
    const deviation = Math.abs(evenPercentage - 50);
    if (deviation < 1) {
        console.log('The percentage ratio is close to 50%50.');
    } else {
        console.log('The percentage ratio is not close to 50%50.');
    }
}


checkProbabilityTheory(1000);