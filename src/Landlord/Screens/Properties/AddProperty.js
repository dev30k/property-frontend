import React, { Component } from "react";
import AddressDetails from "./Components/AddressDetails";
import AddressVerification from "./Components/AddressVerification";
import Success from "../../../Components/Success";
import PropertyType from "./Components/PropertyType";
import axios from "axios";

export default class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      propertyID: 0,
      responseMessage: "",
      loading: false,
      name: "",
      address: "",
      county: "",
      city: "",
      zipcode: "",
      type: "",
      specifictype: "",
      formValues: [{ number_of_units:"",market_rent:"",beds:"",square_feet:"",unit_type:""}],
    };
    this.ids = this.state.propertyID;
    
  }
  
  getandSend = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Token " + JSON.stringify(localStorage.getItem("token")).slice(1, -1),
    };
    axios.post(
      "http://127.0.0.1:8000/property/api/v1/addProperty/residential/",
      this.state.formValues,
      { headers: headers }
    );
  };
  sendProperties = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Token " + JSON.stringify(localStorage.getItem("token")).slice(1, -1),
    };
    axios
      .post(
        "http://127.0.0.1:8000/property/api/v1/addProperty/",
        {
          property_name: this.state.name,
          address: this.state.address,
          county: this.state.county,
          city: this.state.city,
          zipcode: this.state.zipcode,
          property_type: this.state.type,
        },
        { headers: headers }
      )
      .then((response) => {
        alert(response.data.status);
        alert(response.data.property);

        if (response.status == 200) {
          this.setState({ responseMessage: response.data.message });
          this.setState({ propertyID: response.data.property });
          const { step } = this.state;
          this.setState({ step: step + 1 });
        } else {
          alert("Error occured try again");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleFormChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }
  addFormFields() {
    console.log("EXECUTING THE ADD FIELDS");
    this.setState({
      formValues: [
        ...this.state.formValues,
        { number_of_units:"",market_rent:"",beds:"",square_feet:"",unit_type:""},
      ],
    });
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
    const { formValues } = this.state;
    const {
      address,
      name,
      specifictype,
      city,
      county,
      zipcode,
      type,
      step,
      responseMessage,
    } = this.state;
    const values = {
      address,
      name,
      specifictype,
      city,
      zipcode,
      type,
      county,
      responseMessage,
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
            nextStep={this.sendProperties}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <PropertyType
            values={formValues}
            add={this.addFormFields.bind(this)}
            remove={this.removeFormFields.bind(this)}
            handleChange={this.handleFormChange.bind(this)}
            prevStep={this.prevStep}
            nextStep={this.getandSend}
          />
        );
      case 4:
        return <Success message={"DONE"} />;

      default:
    }
  }
}
