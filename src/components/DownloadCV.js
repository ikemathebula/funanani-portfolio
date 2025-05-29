import React from 'react';

function DownloadCV() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <a
        href={`${process.env.PUBLIC_URL}/Funanani-Ramabulana-CV.pdf`}
        download
        style={{
          backgroundColor: '#007ACC',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        📄 Download CV
      </a>
    </div>
  );
}

export default DownloadCV;
