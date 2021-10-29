const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('The site is under maintenance')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

// const User = require('./models/user');
// const main = async () => {
//     // const task = await Task.findById('6168e30184ea203c7ce30feb');
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);
//
//     const user = await User.findById('6168e22dee0c791fd471f203');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }
//
// main();