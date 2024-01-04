const users = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    }
]
export default {
    findAll: () => {
        return users
    },
    findById: (userId)=>{
        return users.find(user => user.id == userId)
    }
}