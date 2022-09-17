import React, { Component } from "react";
import AddressDetails from "./Components/AddressDetails";
import AddressVerification from "./Components/AddressVerification";
import Success from "../../../Components/Success";
import PropertyType from "./Components/PropertyType";
export default class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name:"",
      address: "",
      county:"",
      city: "",
      zipcode: "",
      type: "",
      specifictype: "",
      formValues:[{beds:"",rent:"",numUnits:0,squarefeet:""}]
    };
  }
  handleFormChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    console.log("EXECUTING THE ADD FIELDS");
    this.setState({
      formValues: [...this.state.formValues, { beds:"",rent:"",numUnits:0,squarefeet:""}]
    })
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };


  render() {
    const { step } = this.state;
    const {
      address,
      name,
      specifictype,
      city,
      county,
      zipcode,
      type,
      formValues,
    } = this.state;
    const values = {
      address,
      name,
      specifictype,
      city,
      zipcode,
      type,
      county,
      formValues
    } ;

    switch (step) {
      case 1:
        return (
          <AddressDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <AddressVerification
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return(
            <PropertyType
                values={values}
                add={this.addFormFields.bind(this)}
                remove = {this.removeFormFields.bind(this)}
                handleChange={this.handleFormChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}

            />
        )
      case 4:
        return(
            <Success message={"DONE"} />
        )

      default:
    }
  }
}
