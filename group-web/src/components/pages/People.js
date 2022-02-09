import React from 'react';
import EmployeeCardList from "../EmployeeCardList";
import Footer from "../footer";
import BackToTop from '../BackToTop';

function People() {
  return (
    <>
    <BackToTop/>
        <EmployeeCardList/>
        <Footer />
    </>

  );
}


export default People;
