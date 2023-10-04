import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.jsx';
import Button, {buttonTypesClasses} from "../button/button.component";
import { ButtonsContainer, SignUpContainer, SignUpHeader } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInGoogleUser = async () => {
        await signInWithGooglePopUp();
}

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch(exception) {
            console.log('User encountered an error',exception);
            
        }
       

    };

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <SignUpHeader>Already have an account?</SignUpHeader>
            <span> Sign In with your email & password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={buttonTypesClasses.google} onClick={signInGoogleUser}>Google SignIn</Button>
                </ButtonsContainer>
                
            </form>
           
        </SignUpContainer>
    );
}

export default SignInForm;