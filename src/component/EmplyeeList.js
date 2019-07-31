import React, { Component } from "react";


class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.keyCount = 0
        this.getKey = this.getKey.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    getKey() {
        return this.keyCount++
    }

    handleEdit(index) {
        if (this.props.updatedEmployee) {
            this.props.updatedEmployee(index)
        }
    }

    handleDelete(index) {
        if (this.props.deleteEmployee) {
            this.props.deleteEmployee(index)
        }
    }

    render() {
        const { employeeList } = this.props;
        return (
            <div>
                <ul className="list-group">
                {employeeList.map( (item, index) => {
                    return (
                        <li className="list-group-item" key={this.getKey()}>
                            Name: {item.name}, Age: {item.age}
                            <button type="button" className="btn btn-primary" onClick={ () => this.handleEdit(index) }>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={ () => this.handleDelete(index) }>Delete</button>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default EmployeeList;
