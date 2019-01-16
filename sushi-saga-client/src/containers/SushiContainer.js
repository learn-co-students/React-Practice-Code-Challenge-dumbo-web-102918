import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.slice(0,4).map(sushi => (
          <Sushi key={sushi.id} sushi={sushi} handleClick={props.handleClick} amount={props.amount}/>
        ))}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
