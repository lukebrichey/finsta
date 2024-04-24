'use client'

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

export function InputDemo() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      type="email"
      placeholder="Create your own feed"
      value={inputValue}
      onChange={handleChange}
      style={{
        width: '300px',
        color: 'white',           
        backgroundColor: 'black', 
        borderColor: 'white',    
        borderWidth: '1px',       
        borderStyle: 'solid'      
      }}
    />
  );
}
