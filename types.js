//defining zod schema
const z = require('zod');

const createTodo = z.object({
    title:z.string().max(20),
    description:z.string().max(100)
})

const updateTodo = z.object({
    id:z.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
