import { useState, useRef, useEffect } from "react";

function Form(){

    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        notifications: ''
    });

    const[errors, setErrors] = useState([]);

    const handleChange = (incomingKey) => {
        return e => {
          
          const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
          // const newObj = {...user, [incomingKey]: e.target.value}
    
          setUser(newObj);
          // won't work; need to give the set function a new object
          // user[incomingKey] = e.target.value
          // setUser(user)
          
        }
    }

    const validate = ()=>{
        let errors = [];
        if(user.name.length === 0){
          errors.push("Name cannot be blank")
        }
        if (user.email.length === 0) {
            errors.push("Email cannot be blank")
        }
        const emailRegex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
        if (!emailRegex.test(user.email)) {
            errors.push("Invalid email format");
        }
        const phoneRegex = new RegExp("^\d{10}$");
        if (!phoneRegex.test(user.phoneNumber)) {
            errors.push("Invalid phone number");
        }
        if (user.phoneNumber && !user.phoneType) {
            errors.push("Phone type must be present with phone number");
        }
        if (user.bio.length > 280) {
            errors.push("Bio cannot be over 280 charecters");
        }
        return errors;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let errors = validate();
        console.log(user);

        if(errors.length){
          setErrors(errors)
        } else {
          //submitting to backend;
          console.log(user);
    
          //clear form
          setUser({
            name: '',
            email: '',
            phoneNumber: '',
            phoneType: '',
            staff: '',
            bio: '',
            notifications: ''
          });

          //clear the errors
          setErrors([]);
        }
    }

    const showErrors = () => {
        if(!errors.length) return null;
        return(
          <ul>
            {errors.map((error, i)=> <li key={i}>{error}</li>)}
          </ul>
        )
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={handleChange('name')} value={user.name}/><br />
                <input type="text" placeholder="Email" onChange={handleChange('email')} value={user.email}/><br />
                <input type="text" placeholder="Phone Number" onChange={handleChange('phoneNumber')} value={user.phoneNumber}/><br />
                <select name="Phone Type" defaultValue={"Phone Type"} onChange={handleChange('phoneType')}>
                    <option value="Phone Type" disabled>Phone Type</option>
                    <option value="Home">Home</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Work">Work</option>
                </select><br />
                <label>Instructor<input type="radio" name="Staff" value="Instructor" onChange={handleChange('staff')}/></label>
                <label>Student<input type="radio" name="Staff" value="Student" onChange={handleChange('staff')}/></label><br />
                <textarea name="bio" id="" cols="30" rows="10" placeholder="Write your bio" onChange={handleChange('bio')} value={user.bio}></textarea><br />
                <label>Sign Up For Email Notifications<input type="checkbox" onChange={handleChange('notifications')} value={user.notifications}/></label><br />
                <button>Submit</button>
            </form>
            {showErrors()}
        </>
    )
}

export default Form;
