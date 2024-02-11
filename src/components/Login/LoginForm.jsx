import React, { useState, useEffect } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const { username, password } = JSON.parse(storedUser);
            setUsername(username);
            setPassword(password);
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        if (username === 'Abdulaziz' && password === 'abdulaziz') {
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <li className="nav-itemmm ">
              <a className="nav-link" href="/"> Home</a>
             </li>
            <div style={{ width: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                {isLoggedIn ? (
                    <>
                        <h2>Welcome, {username}!</h2>
                        <button onClick={handleLogout} style={{ width: '100%', backgroundColor: '#ff4d4f', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
                    </>
                ) : (
                    <>
                        <h2 style={{color: 'blue'}}>Login</h2>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        <button onClick={handleLogin} style={{ width: '100%', backgroundColor: 'blue', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
