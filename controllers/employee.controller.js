import Employee from "../models/employee.model.js";

export async function createEmployee(req, res) {
  try {
    const userData = new Employee(req.body);
    const { email } = userData;
    const employeeExist = await Employee.findOne({ email });
    if (employeeExist) {
      res.status(400).json({ message: "Employee already exist" });
    }
    const savedEmployee = await userData.save();
    res.status(200).json(savedEmployee);
  } catch (error) {
    res.status(500).json({
      message: "Error in creating employee function..",
      error: error.message,
    });
  }
}

//get all employees

export async function getAllEmployee(req, res) {
  try {
    const users = await Employee.find();
    if (users === 0) {
      res.status(404).json({ message: "No employees found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error in getting all employees",
      error: error.message,
    });
  }
}

//update the employee

export async function updateEmployee(req, res) {
  try {
    const id = req.params.id;
    const employeeExist = await Employee.findOne({ _id: id });
    if (!employeeExist) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const updateEmployee = await Employee.findByIdAndUpdate(id, rq.body, {
      new: true,
    });
    res.status(200).json(updateEmployee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in updating employee", error: error.message });
  }
}

//delete the employee

export async function deleteEmployee(req, res) {
  try {
    const id = req.params.id;
    const employeeExist = await Employee.findOne({ _id: id });
    if (!employeeExist) {
      return res.status(404).json({ message: "Employee not found" });
    }
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in updating employee", error: error.message });
  }
}
