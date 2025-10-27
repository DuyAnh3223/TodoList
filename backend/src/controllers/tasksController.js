export const getAllTasks = (request, response) => {
    response.status(200).send("You have 20 job to do")

}

export const createTask = (req, res) =>{
    res.status(201).json({message: "Task added successfully"});
}

export const updateTask = (req,res) =>{
    res.status(200).json({message: "Task updated successfully"});
}

export const deleteTask = (req,res) =>{
    res.status(200).json({message: "Task deleted successfully"});
}