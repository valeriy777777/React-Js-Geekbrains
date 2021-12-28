import { Link } from 'react-router-dom';
//
import { SignUp } from '../../components/signUp/SignUp.jsx';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                Already have an account? <Link to="/login">Sign in</Link>   
            </p>            
        </div>
    )
}

export {RegisterPage};
