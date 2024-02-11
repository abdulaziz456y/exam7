import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SecretPage from './SecretPage';

const MainComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SecretPage />
      )}
    </div>
  );
};

export default MainComponent;
