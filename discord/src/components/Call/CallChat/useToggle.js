import { useState } from "react"

function useToggle(initialValue = false) {

  const [state, setState] = useState(initialValue)

  function toggle(newStateValue) {
    if(newStateValue === undefined) 
      setState(prevToggle => !prevToggle)
    else 
      setState(newStateValue)
  }

  return [state, toggle]
}

export default useToggle