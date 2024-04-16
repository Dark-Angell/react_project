import React, { Fragment } from 'react'

export default function useState() {
  const [state, setState] = React.useState(3)

  const add = () => {
    console.log(22)
    setState(state+1)
  }

  return (
    <Fragment>
      <h1>{state}</h1>
      <button onClick={add}>+</button>
    </Fragment>
  )
}
