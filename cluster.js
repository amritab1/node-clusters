const express = require('express');
const app = express();
const cluster = require('cluster');
const os = require('os'); //to get no of cpus or cores available in our system
const port = 8000;

const numCpu = os.cpus().length;

app.get('/', (req, res) => {
    for (let i = 0; i < 1e8; i++) {
        //some long running task
    }
    res.send(`OK...${process.pid}`);
    // cluster.worker.kill(); //worker died
})
// if (cluster.isMaster) {
//     //if master process then create worker process 
//     for (let i = 0; i < numCpu; i++) {
//         cluster.fork();  // fork uses child process
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`); 
//         cluster.fork(); //creates new child process

//     })
// } else {
//     //if worker process
//     app.listen(port, () => {
//         console.log(`Server ${process.pid} @ http://localhost:8000`); //all workers shares same port and pid makes sure that it uses different pids of the workers
//     })
// }
app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
})
