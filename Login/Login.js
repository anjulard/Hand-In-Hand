import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Logo from '../../source/Logo/RD_black.png';
import classes from '../../source/css/Auth/auth.css';



class Login extends Component {
    state = {
        email: null,
        password: null,
        formErrors : {
            email: ""
        },
        isFormErrors: false,
        isLoding: true
    };



    render() {
        return(
        
                <div className={classes.container}>
                <header className={classes.main_header}>
                    <div className={classes.logo_container}>
                        <img src={Logo} className={classes.logo} alt="logo"/>
                        <h2 className={classes.logo_name}>Right Decision</h2>
                    </div>
                    <nav className={classes.main_nav}>
                        <a href="/signup">Get Started</a>
                    </nav>
                </header>
                <form className={classes.form_container} onSubmit={event => this.props.onLogin(event, this.state)}>  
                    <h2>Login</h2>
                    <input
                        className={classes.form_input}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required={true}
                        //onChange={this.handleChange}
                     />
                    {this.props.onEmailValid && <span className={classes.form_errors}>Invalid Email!</span> }
                    {this.props.onEmailExits && <span className={classes.form_errors}>A user with this email could not be found.</span>} 

                    <input
                        className={classes.form_input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required={true}
                        //onChange={this.handleChange} 
                    />
                    {this.props.onIncorrectPassword && <span className={classes.form_errors}>Incorrect Password!</span>}
                    
                    <button 
                        className={classes.form_button}
                        type="submit"
                    >
                        Login
                    </button><br /><br />
                    <div className={classes.reset_password_link}>
                        <a href="/">Don't remember password</a>
                    </div>
                </form>
                <footer className={classes.main_footer}>
                    <a href="/">Terms & support</a>
                    <a href="/">Contact us</a>
                </footer>
            </div>
        )
        } 
        
    }


export default Login;