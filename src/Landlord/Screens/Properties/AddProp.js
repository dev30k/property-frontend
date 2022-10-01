import React ,{useState}from 'react'
import AddressDetails from "./Components/AddressDetails";
import AddressVerification from "./Components/AddressVerification";
import Success from "../../../Components/Success";
import PropertyType from "./Components/PropertyType";
import axios from "axios";

export default function AddProp() {
   const [propertyID, setPropertyID] = useState(0);
   
   const [step,setStep] = useState(1);
   
   const [values,setValues] = useState({  
    responseMessage: "",
    loading: false,
    name: "",
    address: "",
    county: "",
    city: "",
    zipcode: "",
    type: "",
    specifictype: "",})

  const [formValues, setFormValues] = useState([
    { number_of_units: "", market_rent: "", square_feet: "", beds: "", property:propertyID },
  ]);

  let handleFormChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {  number_of_units: "", market_rent: "", square_feet: "", beds: "" ,property:propertyID},
    ]);
  };
   let getandSend = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Token " + JSON.stringify(localStorage.getItem("token")).slice(1, -1),
    };
    axios.post(
      "http://127.0.0.1:8000/property/api/v1/addProperty/residential/",
      formValues,
      { headers: headers }
    );
  };
  let sendProperties = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Token " + JSON.stringify(localStorage.getItem("token")).slice(1, -1),
    };
    const response = await axios
      .post(
        "http://127.0.0.1:8000/property/api/v1/addProperty/",
        {
          property_name: values.name,
          address: values.address,
          county: values.county,
          city: values.city,
          zipcode: values.zipcode,
          property_type: values.type,
        },
        { headers: headers }
      )
      setPropertyID(response.data.property);
    formValues.pop(0);
      if(response.status == 200){        
        setStep(step + 1 );
      }else{
        alert("An error occurred");
      }
        

    
  };

  let prevStep = () => {
    setStep(step - 1 );
  };
  let nextStep = () => {
    setStep(step + 1 );
  };
  let handleChange = (e,prop) => {
    setValues({
        ...values,
        [prop] : e.target.value
    })
    
}
 

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  switch (step) {
    case 1:
      return (
        <AddressDetails
          nextStep={nextStep}
          handleInputChange={handleChange}
          values={values}
        />
      );

    case 2:
      return (
        <AddressVerification
          nextStep={sendProperties}
          handleInputChange={handleChange}
          prevStep={prevStep}
          values={values}
        />
      );
    case 3:
      return (
        <PropertyType
        values={formValues}
        handleChange={handleFormChange}
        add={addFormFields}
        remove={removeFormFields}
        prevStep={prevStep}
        nextStep={getandSend}
      />
      );
      case 4:
        return <Success message={"DONE"} />;

      default:
    }
}
  
 



