const {Employee, Task} = require('../models')

const seedDB = async() => {
    const dummyEmployee = await Employee.create({
        firstname: "Spongebob",
		lastname: "Squarepants",
		department: "Kitchen"
    })

    const dummyEmployee2 = await Employee.create({
		firstname: "Patrick",
		lastname: "Star"
    });
    
    const dummyTask = await Task.create({
		description: "Flip burgers",
        prioritylevel: 5,
        completionstatus: false
    });
    
    await dummyTask.setEmployee(dummyEmployee);
}

module.exports = seedDB;
