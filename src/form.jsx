import { useState, useRef, useEffect } from "react";

function Form(){
    return(
        <>
            <form>
                <input type="text" placeholder="Name"/><br />
                <input type="text" placeholder="Email"/><br />
                <input type="text" placeholder="Phone Number"/><br />
                <select name="Phone Type" >
                    <option value="Phone Type" selected disabled>Phone Type</option>
                    <option value="Home">Home</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Work">Work</option>
                </select><br />
                <label>Instructor<input type="radio" name="Staff" value="Instructor"/></label>
                <label>Student<input type="radio" name="Staff" value="Student"/></label><br />
                <textarea name="bio" id="" cols="30" rows="10" placeholder="Write your bio"></textarea><br />
                <label>Sign Up For Email Notifications<input type="checkbox"/></label><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;
