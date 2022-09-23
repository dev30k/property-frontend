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
      loading:false,
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
  submitInformation =(event)=>{
    this.setState({loading:true});
  
    event.preventDefault();
    fetch(
        'http://127.0.0.1:8000/property/api/v1/appProperty/',
        {
          method:"POST",
          body:JSON.stringify({
            property_name:this.state.name,
            address:this.state.address,
            county:this.state.county,
            city:this.state.city,
            zipcode:this.state.zipcode,
            property_type:this.state.type


          }),
          headers: {
            'Content-Type': 'application/json'
        }
        }
    ).then((res)=>{
      console.log(res);
      this.setState({loading:false});
      if (res.ok){
        return res.json();
      }else{
        return res.json.then((data) =>{
          throw new Error(data);
        })
      }
    }).then(data =>{
      console.log(data);
      const { step } = this.state;
      this.setState({ step: step + 1 });

    })

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
            nextStep={this.submitInformation}
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
