import React, { Component } from "react";

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.ageRef = React.createRef()
        this.nameRef = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.nameRef.current.value
        let age = this.ageRef.current.value
        this.props.addEditEmployee({name: name, age: age})
        this.refs.employeeForm.reset()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.employeeData.name !== this.props.employeeData.name) {
            this.nameRef.current.value = this.props.employeeData.name;
        }
        if (prevProps.employeeData.age !== this.props.employeeData.age) {
            this.ageRef.current.value = this.props.employeeData.age;
        }
    }

    render() {
        return (
            <form ref="employeeForm" onSubmit={ this.handleSubmit }>
                <input
                    ref={this.nameRef}
                    type="text"
                    placeholder="Name"
                    name="name" />
                <input
                    ref={this.ageRef}
                    type="text"
                    placeholder="Age"
                    name="age" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default EmployeeAddForm;
