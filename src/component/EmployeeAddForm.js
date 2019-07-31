import React, { Component } from "react";
import '../sass/main.scss'

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.ageRef = React.createRef()
        this.nameRef = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault();
        let payload = {
            name: this.nameRef.current.value,
            age: this.ageRef.current.value
        }
        let errors = {}
        if (this.props.employeeData) {
            payload["id"] = this.props.employeeData.id
        }
        if (!payload.name) {
            errors["name"] = "Required field"
        }
        if (!payload.age) {
            errors["age"] = "Required field"
        }
        if (this.props.addEditEmployee && Object.keys(errors).length < 1) {
            this.props.addEditEmployee(payload)
            this.refs.employeeForm.reset()
        }
        this.setState({
            errors: errors
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.employeeData.name !== this.props.employeeData.name) {
            this.nameRef.current.value = this.props.employeeData.name || '';
        }
        if (prevProps.employeeData.age !== this.props.employeeData.age) {
            this.ageRef.current.value = this.props.employeeData.age || '';
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
                <span className="error">{this.state.errors["name"]}</span>
                <input
                    ref={this.ageRef}
                    type="text"
                    placeholder="Age"
                    name="age" />
                <span className="error">{this.state.errors["age"]}</span>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default EmployeeAddForm;
