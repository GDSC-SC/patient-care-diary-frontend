import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

export function ColorSelector({selectedColor ,onColorChange}: {selectedColor?: string, onColorChange?:(c:string)=>void}) {
  const [hex, setHex] = useState(selectedColor || '#F7C0BE');
  return (
    <Circle style={{width: '200px', margin: '0 auto', justifyItems:'center'}}
        colors={['#F7C0BE', '#FADCDA', '#F4C3AC', '#F9DED1', '#F4E1CA',
        '#EDE4C8', '#E6E6C9', '#C6D5A3', '#DFE7CC', '#BAD8AD',
        '#D8E9D2', '#ACDABD', '#D1EADA', '#A2DBCE', '#CCEBE3',
        '#CBEAF1', '#AAD4F8', '#D0E7FB', '#B7CFFE', '#D7E5FE',
        '#C6CBFF', '#DFE2FE', '#D5C6F9', '#E7E0FC', '#EDC1E0',
        '#F5DDEE', '#E2C3EF', '#EFDDF5', '#F4C0CF', '#F9DCE4'
        ]}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          if (onColorChange)
            onColorChange(color.hex);
    }}/>
  );
}