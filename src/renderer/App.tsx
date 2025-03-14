import { useState } from 'react';
import { Button, Input, message, Card, Modal } from 'antd';

export default function App() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);

  const handleLogin = async () => {
    if (!email || !password) {
      message.error('Please enter your Gmail and App Password');
      return;
    }

    const success = await window.electron.loginGmail(email, password);
    if (success) {
      message.success('Logged in successfully!');
      setIsLoggedIn(true);
      setLoginVisible(false);
    } else {
      message.error('Login failed. Check your credentials.');
    }
  };

  const sendEmail = async () => {
    if (!isLoggedIn) {
      message.warning('Please log in first.');
      return;
    }

    if (!to || !subject || !body) {
      message.error('Please fill all fields');
      return;
    }

    const emailDetails = { to, subject, body };
    const response = await window.electron.sendEmail(emailDetails);

    if (response.success) {
      message.success('Email sent successfully!');
    } else {
      message.error('Failed to send email');
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Card title="Send Email with Gmail">
        <Input
          placeholder="Recipient Email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Input.TextArea
          placeholder="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Button type="primary" onClick={sendEmail} style={{ marginTop: 10 }}>
          Send Email
        </Button>
      </Card>

      {/* Gmail Login Modal */}
      <Modal
        title="Gmail Login"
        open={loginVisible}
        closable={false}
        footer={null}
      >
        <Input
          placeholder="Gmail Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password
          placeholder="App Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Button
          type="primary"
          onClick={handleLogin}
          style={{ marginTop: 10, width: '100%' }}
        >
          Login
        </Button>
      </Modal>
    </div>
  );
}
