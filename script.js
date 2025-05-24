body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

button {
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

#start {
  background-color: #4CAF50;
  color: white;
}

#stop {
  background-color: #f44336;
  color: white;
}

button:hover {
  opacity: 0.9;
}

#message {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}
