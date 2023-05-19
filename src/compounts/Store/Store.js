import React from 'react';
import Generics from '../Header/Generics'; 
import NavbarS from '../Header/navibar';
import cart from '../Header/cart';
const Store = () => {
  return (
    <div>
      <NavbarS ></NavbarS>
      <div style={{paddingTop:'3px'}}>
     <Generics
     ></Generics>
      </div>
      <h1>Annual Report</h1>
    </div>
  );
};
  
export default Store;