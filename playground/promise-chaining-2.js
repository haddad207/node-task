require('../src/db/mongoose');
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6165cc119fa5e54008b8a619').then((res) => {
//     console.log(res)
//     return Task.countDocuments({completed: false})
// }).then((res) => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})

    return count;
}

deleteTaskAndCount('6165e52aa616910fe80b002f').then(
    count => {
        console.log(count)
    }
).catch(
    e => {
        console.log(e)
    }
)