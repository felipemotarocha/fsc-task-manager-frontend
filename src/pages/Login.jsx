import CustomButton from "../components/CustomButton";

import "./Login.scss";
import logo from "../assets/images/logo-2.png";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="Full Stack Club" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
