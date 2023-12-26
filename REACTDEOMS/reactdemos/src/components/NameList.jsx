import React from 'react'

function NameList() {
  const names = ['Alice', 'Bob', 'Charlie', 'Charlie']
  return (
    <div>
        {
            names.map(name => <h3 key={name}>{name}</h3>)
        }
    </div>
  )
}

export default NameList