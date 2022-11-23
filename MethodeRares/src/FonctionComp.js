import React,  { memo }  from 'react'

function FonctionComp(props) {


  console.log('%c render du functionComponent enfant simple!','color:purple')
  return (

    <div>
        <p>
            <span className='purple'>Fonction component</span> {props.name}
        </p>
    </div>
  )
}

export default (FonctionComp);
