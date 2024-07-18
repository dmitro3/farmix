import './App.css';
import React, { useEffect } from 'react';

window.Telegram.WebApp.MainButton.show();
window.Telegram.WebApp.MainButton.setText("Hello World");
window.Telegram.WebApp.MainButton.onClick(() => {
  window.Telegram.WebApp.showAlert("Hello World");
});


function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>  
    </div>
  );
}

export default App;
