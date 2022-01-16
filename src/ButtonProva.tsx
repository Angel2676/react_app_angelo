import './Button.css';

type ButtonParams = {
    buttonText:string
}

const Button=( par: ButtonParams )=>{


    const {buttonText} = par;
    
    return(
        <p className="btn app-btn trial-btn">{buttonText}</p>
    );    
}

export default Button;
