import React, { Component } from "react";


class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.keyCount = 0
        this.getKey = this.getKey.bind(this)
    }

    getKey() {
        return this.keyCount++
    }

    handleEdit(index) {
        this.props.updatedEmployee(index)
    }

    render() {
        const { employeeList } = this.props;
        return (
            <div>
                {employeeList.map( (item, index) => {
                    return (
                        <li key={this.getKey()}>
                            Name: {item.name}, Age: {item.age}
                            <button onClick={ () => this.handleEdit(index) }>Edit</button>
                        </li>
                    )
                })}
            </div>
        )
    }
}

export default EmployeeList;
