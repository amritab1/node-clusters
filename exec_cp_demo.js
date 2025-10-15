const { spawn, execFile , exec, fork} = require('child_process');

// exec( 'dir /b /s' , (error, stdout, stderr) => { //for windows use dir else ls-lh
//     //Executes a command in a shell and buffers the output.
//     //  It's convenient for running simple commands and retrieving their results.
//     if (error) {
//         console.log(`error : ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr : ${stderr}`);
//         return;
//     }
//     console.log(`stdout : ${stdout}`);
// })

// execFile('./my_script.sh', (error, stdout, stderr) => {
//     //Similar to exec(), but executes a file directly without invoking a shell.
//     if (error) {
//         console.log(`error : ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr : ${stderr}`);
//         return;
//     }
//     console.log(`stdout : ${stdout}`);
// })

// const child = spawn('find', ['/']);
//Launches a new process with the given command and arguments. 
// It's suitable for handling large amounts of data through streams.

// child.stdout.on('data', (data) => {
//     console.log(`stdout:${data}`);
// })

// child.stderr.on('data', (data) => {
//     console.log(`stderr:${data}`);
// })

// child.on('error', (error) => {
//     console.log(`error:${error.message}`);
// })

// child.on('exit', (code, signal) => {
//     if (code) console.log(`Process exit with code:${code}`);
//     if (signal) console.log(`Process killed with signal:${signal}`);
//     console.log('done');
// })