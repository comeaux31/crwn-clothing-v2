import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


const SignIn = () => {
    const logGoogleUser = async () => {
            const {user} = await signInWithGooglePopUp();
            console.log(user);
            const userDocRef = createUserDocumentFromAuth(user)

    }
    return (
        <div>
            <h1> Sign In Page </h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;

