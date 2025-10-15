//fork() 
//Creates a new Node.js process and establishes a communication channel for exchanging messages.

const express = require('express');
const { fork } = require('child_process')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;

app.get('/one', (req, res) => { // took approx 15secs
    const sum = longComputation();
    res.send({ sum: sum });
})
app.get('/two', async (req, res) => { //took approx 16secs
    const sum = await longComputationPromise();
    res.send({ sum: sum });
})

//through child process using fork method
app.get('/three', (req, res) => { // to offload CPU intensive operations by utilizing full power of CPU
    const child = fork('./longtask.js'); //uses separate thread 
    child.send('start');
    child.on('message', (sum) => {
        res.send({ sum: sum }); //  took 6secs approximately making it much faster for long comp or heavy tasks
    })
})

app.listen(port, () => { console.log(`Server listening at port ${port}`) });

//synchronous operation
function longComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}
//asynchronous operation
function longComputationPromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) { //1e9=10 to pow 9
            sum += i;
        }
        resolve(sum);
    })

}

//to check loadtest do- npm install -g loadtest
//cmnd to chk load is --> npx loadtest -n 1200 -c 400 -k http://localhost:3000/api
//-n no of requests, -c is concurrent requests -k and then specify the url for which load test has to be done
//loadtest -n 10 -c 10 http://localhost:3000/one