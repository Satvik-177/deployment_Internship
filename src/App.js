import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example, sending data to a server
    console.log('Username:', username);
    console.log('PAN Number:', panNumber);
    console.log('File:', file);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="panNumber" style={styles.label}>PAN Number:</label>
          <input
            type="text"
            id="panNumber"
            value={panNumber}
            onChange={handlePanNumberChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="file" style={styles.label}>Upload File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            style={styles.fileInput}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  fileInput: {
    marginTop: '5px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default LoginForm;
