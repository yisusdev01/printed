import logo from './image/uatf.png';
import './stylesheets/login.css';
const Login = ()=>{
    return(
        <div className="body-login">
            <div className="body-left">
                <div className='slide'>
                    <img src={logo}/>
                    <h1>Universidad Autonoma Tomas Frias</h1>
                    <h4>Direccion de Extension Universitaria</h4>
                </div>
            </div>
            <div className="body-right">
                <h1>Login</h1>
            </div>
        </div>
    )
}
export default Login;