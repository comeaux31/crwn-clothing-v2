import {BaseButton, GoogleSignInButton, InvertedButton } from './button.styles.jsx';

export const buttonTypesClasses = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = buttonTypesClasses.base) => (
    {
        [buttonTypesClasses.base]: BaseButton,
        [buttonTypesClasses.google]: GoogleSignInButton,
        [buttonTypesClasses.inverted]: InvertedButton
    }[buttonType]
    )

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
};

export default Button;

