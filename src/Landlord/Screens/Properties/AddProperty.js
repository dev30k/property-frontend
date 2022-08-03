import React, { Component } from "react";
import AddressDetails from "./Components/AddressDetails";
import AddressVerification from "./Components/AddressVerification";
import Success from "../../../Components/Success";
export default class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      address: "",
      unit: "",
      city: "",
      state: "",
      zipCode: "",
      type: "",
      portfolio: "",
      numberUnits: 0,
    };
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
      unit,
      city,
      state,
      zipcode,
      type,
      portfolio,
      numberUnits,
    } = this.state;
    const values = {
      address,
      name,
      unit,
      city,
      state,
      zipcode,
      type,
      portfolio,
      numberUnits,
    };

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
        return <Success message="You are done" />;
      default:
    }
  }
}
