import React,{useState} from 'react';
import { ChromePicker } from 'react-color';

export default function ColorPicker() {
  const [Color, setColor] = useState("#fff")

 const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
    return (
      <ChromePicker
        color={ Color }
        onChangeComplete={ handleChangeComplete }
        width={300}/>
    );
}