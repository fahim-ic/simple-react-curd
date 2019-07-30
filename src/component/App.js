import React, { Component } from "react";
import EmployeeList from "./EmplyeeList";
import EmployeeAddForm from "./EmployeeAddForm";

class App extends Component {
    constructor() {
        super();
        this.state = {
            employeeData: {},
            employeeList: [
                { "name": "Mario Speedwagon", "age": 54},
                { "name": "Petey Cruiser", "age": 23},
                { "name": "Anna Sthesia", "age": 68},
                { "name": "Paul Molive", "age": 10},
                { "name": "Anna Mull", "age": 85}
            ]
        }
        this.addEditEmployee = this.addEditEmployee.bind(this)
        this.updatedEmployee = this.updatedEmployee.bind(this)
    }

    updatedEmployee(index) {
        this.setState({
            employeeData: this.state.employeeList[index]
        })
    }

    addEditEmployee(data) {
        this.setState({
            employeeList: [...this.state.employeeList, data]
        })
    }

    render() {
        return (
            <div>
                <EmployeeList employeeList={this.state.employeeList} updatedEmployee={ this.updatedEmployee } />
                <EmployeeAddForm
                    addEditEmployee={ this.addEditEmployee }
                    employeeData={ this.state.employeeData }
                />
            </div>
        )
    }
}

export default App;
