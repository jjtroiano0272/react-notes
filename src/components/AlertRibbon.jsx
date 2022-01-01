import React, { useState } from 'react';

export default function AlertRibbon(props) {
  return (
    <div className='container bg-primary'>
      {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}
      {/* <div className='collapse navbar-collapse' id='navbarSupportedContent'> */}

      <small style={{ fontSize: '0.3rem' }}>
        Please note that this website is still in development. (30 DEC 2021)
      </small>

      {/* </div> */}
    </div>
  );
}
