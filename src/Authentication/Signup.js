import React, {Component} from 'react';
import UserDetails from "./AuthComponents/UserDetails";
import Verification from "./AuthComponents/Verification";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            businessname:'',
            phone:'',
            units:'',

        };
    }
    prevStep =() =>{
        const {step} = this.state;
        this.setState({step: step-1});

    }
    nextStep = ()=>{
        const {step} = this.state;
        this.setState({step: step+1})
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    render() {
        const { step } = this.state;
        const { email, businessname, password, firstname, lastname ,phone,units} = this.state;
        const values = { email, businessname, password, firstname,lastname,phone,units }

       switch (step) {
           case 1:
               return(
                   <UserDetails  nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
               );

           case 2:
               return (
                   <Verification nextStep={this.nextStep} handleChange={this.handleChange} prevStep={this.prevStep} values={values} />
               )


           default:


       }
    }
}

export default Signup;