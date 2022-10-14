import "./login.css"

const Login = () => {
  return (
    
    <div>
        <div className="logo">A<span>AH</span>D</div>
        <div>
            <div className="form">
                <div className="signIn">
                    Sign In
                </div>
                <form className="formContainer">
                    <div className="email">
                        <label htmlFor="email">
                            Email
                        <input type="email" name="email" id="email" />
                        </label>
                    </div>
                    <div className="password">
                    <label htmlFor="password">
                            password
                        <input type="password" name="password" id="password" />
                        </label>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <div className="reg">Don't have account? <a href="#">Sign Up</a></div>
            </div>
        </div>
    </div>
  )
}

export default Login