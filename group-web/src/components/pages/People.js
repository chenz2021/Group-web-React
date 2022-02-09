import React from 'react';
import EmployeeCardList from "../EmployeeCardList";
import Footer from "../footer";
import Scroll from '../Scroll';


function People() {
  return (
    <>
      <Scroll showBelow={250}/>
        <EmployeeCardList/>
        <Footer />
    </>

  );
}


export default People;
