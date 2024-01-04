import React, { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setUser({ username: storedUsername, password: storedPassword });
    }
  }, []);

  if (!user) {
    return <LoginForm onLogin={(username, password) => setUser({ username, password })} />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="491bd523-a96f-4258-9822-f1a30e59573b"
      userName={user.username}
      userSecret={user.password}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
