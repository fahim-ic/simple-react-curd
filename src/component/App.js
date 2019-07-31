import React, { Component } from "react";
import EmployeeList from "./EmplyeeList";
import EmployeeAddForm from "./EmployeeAddForm";

class App extends Component {
    constructor() {
        super();
        this.state = {
            employeeData: {},
            employeeList: [
                { "name": "Mario Speedwagon", "age": 54, "id": 1 },
                { "name": "Petey Cruiser", "age": 23, "id": 2 },
                { "name": "Anna Sthesia", "age": 68, "id": 3 },
                { "name": "Paul Molive", "age": 10, "id": 4 },
                { "name": "Anna Mull", "age": 85, "id": 5 }
            ]
        }
        this.idCount = this.state.employeeList.length
        this.addEditEmployee = this.addEditEmployee.bind(this)
        this.updatedEmployee = this.updatedEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    deleteEmployee(index) {
        this.setState(prevState => ({
            employeeList: prevState.employeeList.filter((_, itemIndex) => itemIndex != index)
        }));
    }

    updatedEmployee(index) {
        this.setState({
            employeeData: this.state.employeeList[index]
        });
    }

    addEditEmployee(data) {
        if (data.id) {
            this.setState(prevState => ({
                employeeList: prevState.employeeList.map(
                    item => item.id == data.id ? {...item, ...data} : item
                )
            }));
        } else {
            this.idCount += 1;
            data["id"] = this.idCount;
            this.setState({
                employeeList: [...this.state.employeeList, data],
            });
        }
        this.setState({
            employeeData: {}
        });
    }

    render() {
        return (
            <div className="container home">
                <EmployeeList
                    employeeList={this.state.employeeList}
                    updatedEmployee={ this.updatedEmployee }
                    deleteEmployee={this.deleteEmployee} />
                <EmployeeAddForm
                    addEditEmployee={ this.addEditEmployee }
                    employeeData={ this.state.employeeData } />
            </div>
        )
    }
}

export default App;
