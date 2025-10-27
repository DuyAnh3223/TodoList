import Task from '../models/Task.js';


export const getAllTasks = async (request, response) => {
    try {
        const tasks = await Task.find().sort({createdAt: 'desc'});
        response.status(200).json(tasks);

    } catch (error) {
        console.error("Error while fetching tasks:", error);
        response.status(500).json({ message: "Error fetching tasks" });
    }
}

export const createTask = async (req, res) =>{
    try{
        const {title} = req.body;
        const task = new Task({title});

        const newTask = await task.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error while creating task:", error);
        res.status(500).json({message: "Error creating task"});
    }
}

export const updateTask = async (req,res) =>{
    try {
        const {title, status, completedAt} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt
            },
            {new: true}
        );

        if(!updatedTask){
            return res.status(404).json({message: "Task not found"});
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error while updating task:", error);
        res.status(500).json({message: "Error updating task"});
    }
    
}

export const deleteTask = async (req,res) =>{
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if(!deletedTask){
            return res.status(404).json({message: "Task not found"});
        }
        res.status(200).json(deletedTask);
    } catch (error) {
        console.error("Error while deleting task:", error);
        res.status(500).json({message: "Error deleting task"});
    }
}