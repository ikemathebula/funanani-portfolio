import React, { useState } from 'react';
import en from '../lang/en';
import tsonga from '../lang/tsonga';

function LanguageSelector({ onLangChange }) {
  const [lang, setLang] = useState('en');

  const handleChange = (e) => {
    const selected = e.target.value;
    setLang(selected);
    onLangChange(selected === 'ts' ? tsonga : en);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
      <select onChange={handleChange} value={lang}>
        <option value="en">English</option>
        <option value="ts">Xitsonga</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
