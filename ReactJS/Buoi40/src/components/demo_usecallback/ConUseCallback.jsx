import React, { memo } from 'react'

function ConUseCallback(props) {
  console.log("con useCallback")
  console.log(props)
  return (
    <div>{props.object.hoTen}</div>
  )
}

export default memo(ConUseCallback)

// this.tenHam
// thus.tenHam()