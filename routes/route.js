import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  updateEmployee,
} from "../controllers/employee.controller.js";

const route = express.Router();

route.post("/add", createEmployee);
route.get("/allemp", getAllEmployee);


export default route;
