import React from 'react';

function WhatsAppButton() {
  const phoneNumber = "+27774194249"; // Update if needed

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a
        href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          padding: '10px 25px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  );
}

export default WhatsAppButton;
