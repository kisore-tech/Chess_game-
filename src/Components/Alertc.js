import React, {useState} from 'react';

export default function Alertc(props) {
  return (
    <div>
      {props.check === 'check' ? (
        <div className="alert alert-danger" role="alert">
           check
        </div>
      ) : null}
    </div>
  );
}
