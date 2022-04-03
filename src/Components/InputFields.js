import React from 'react'

class InputFields extends React.Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" name='todo' placeholder='Enter your Todo...'/>
        </form>
      </div>
    )
  }
}
export default InputFields;