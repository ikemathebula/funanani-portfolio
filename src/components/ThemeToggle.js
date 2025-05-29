import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : '';
  }, [dark]);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: '8px 20px',
          borderRadius: '8px',
          backgroundColor: dark ? '#f0f0f0' : '#222',
          color: dark ? '#000' : '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;
