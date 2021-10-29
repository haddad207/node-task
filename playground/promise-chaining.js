require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('6165e160795c4a20d46c33e7', {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((users) => {
//     console.log(users)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count;
}

updateAgeAndCount('6165d9a4a586c01da023dbfa', 2).then(
    count => {
        console.log(count)
    }
).catch(
    e => {
        console.log(e)
    }
)
