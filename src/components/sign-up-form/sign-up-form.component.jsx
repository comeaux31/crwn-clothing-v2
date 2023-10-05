import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromSignUpForm } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.jsx';
import Button, {buttonTypesClasses} from "../button/button.component";
import { SignUpContainer, SignUpHeader } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields


    console.log('hit');

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Your passwords do not match")
         return;
        }
        try {
            const user = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            createUserDocumentFromSignUpForm(user.user, {displayName})
            resetFormFields();
        } catch(exception) {
            console.log('User encountered an error',exception)
            if(exception.code === 'auth/email-already-in-use') {
                alert("Email is already in System");
            } else {
                console.log(exception)
            }
        }
       

    };

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <SignUpHeader>Don't have an account?</SignUpHeader>
            <span> Sign up with your email & password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button buttonType= {buttonTypesClasses.base} type="submit">Sign Up</Button>
            </form>

        </SignUpContainer>
    );
}

export default SignUpForm;