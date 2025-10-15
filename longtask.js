function longComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}
//when child process calls this function of the file, parent process performs/listens the event
process.on('message', (message) => { //this is called communication between the child process and the master/parent processes
    if (message === 'start') {
        const sum = longComputation();
        process.send(sum);
    }

})