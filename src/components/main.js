import React from 'react';
import { Filmlist } from './object/Filmlist';
import Content from './content';


export default function Main() {
  return (
    <Content films={Filmlist}/> 
  )
}
