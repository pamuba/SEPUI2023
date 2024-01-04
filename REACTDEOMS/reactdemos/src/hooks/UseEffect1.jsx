import React, {useEffect, useState} from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);
    const [name, setName ] = useState('');
    //componentDidMount = initial Render +  componentDidUpdate
    useEffect(()=> {
        console.log("UseEffcts Runs")
        document.title = `U Clicked ${count} times`
    }, [count])

    return (
      <div>
          <input type='text' value={name} onChange={e => setName(e.target.value)}/>
          <button onClick={()=> setCount(count + 1)}>Count {count}</button>
      </div>
    )
}

export default UseEffect1