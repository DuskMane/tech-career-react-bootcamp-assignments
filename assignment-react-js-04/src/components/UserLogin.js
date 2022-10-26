import React, { useState} from 'react'

function UserLogin() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");

    const handleClick = () => {
        console.log(loginEmail);
        console.log(loginPw);
    }

  return (
    <div>
        <div>
            <label htmlFor='email'>Email</label>
            <input id="email" onChange={(e) => setLoginEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input id="password" onChange={(e) => setLoginPw(e.target.value)}/>
        </div>
        <button onClick={handleClick}>Log-in</button>
    </div>
  )
}

export default UserLogin;