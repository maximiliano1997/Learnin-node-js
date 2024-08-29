const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const createTask = asyncWrapper(async (req, res) => {
    console.log(req.body)

    let task = new Task(req.body)
    if (task) {
        task.save()
            .then((data) => console.log(`Exito en la creacion de: ${data}`))
            .catch((err) => console.log(`Error: ${err}`))
    }
    res.status(201).json({ task })
})

const getAllTasks = asyncWrapper(async (req, res) => {
    console.log('getting tasks....')

    let tasks = await Task.find()
    res.status(200).json({ tasks })

})

const getTask = asyncWrapper(async (req, res, next) => {
    console.log('searching individual task....', req.params, req.body)

    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })

    if (!task) {
        return next(createCustomError(`...No task with id: ${taskID}... `, 404))
        // console.log('No task with id: ', taskID)
    }

    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res, next) => {
    console.log('updating...', req.body, req.params)
    const { name, completed } = req.body

    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate(
        { _id: taskID },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    )

    if (!task) {
        return next(createCustomError(`No task with id ${taskID}`, 404))
        console.log('Task not found')
    }

    console.log("Successfully Updated: ", task)
    res.status(200).json({ task })

})

const deleteTask = asyncWrapper(async (req, res, next) => {
    console.log(req.params)
    const { id } = req.params

    const deletedTask = await Task.findOneAndDelete({ _id: id })

    if (!deletedTask) {
        return next(createCustomError(`Task with id ${id} do not exist...`, 404))
    }

    res.status(200).json({ deletedTask })
})


module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}