import React from 'react';
import { Filmlist, RecommendFilm } from './object/Filmlist';
import Content from './content';
import Recommend from './recommend';


export default function Main() {
  return (
    <>
    <Recommend film={RecommendFilm}/>
    <Content films={Filmlist}/>
     
    </>
    
  )
}
