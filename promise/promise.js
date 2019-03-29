require('../src/db/mongoose')
const User = require('../src/models/user')


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5c9ccb6524d5c4130c0a7f10', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
