import React, { useCallback, useState, useEffect } from 'react'
import { useEventQueue } from './useIsOdd'

export default function HooksEvent() {
  const [list, setList] = useState([])

  const renderList = useCallback((cacheList) => {
    setList(prev => {
      const prevList = prev.map(item => ({ ...item, isNew: false }))
      const newData = cacheList.map(item => ({ ...item, isNew: true }))
      const newState = newData.concat(prevList)
      return newState
    })
    return Promise.resolve("true")
  }, [])

  const eventQueue = useEventQueue(renderList)


  useEffect(() => {
    let i = 0
    const inTimer = setInterval(() => {
      if (i < 10) {
        i++;
        const time = new Date().getTime()
        const pushData = new Array(10).fill(1).map((item, index) => ({ id: `${time}-${index}`, name: `tanqq${time}` }))
        eventQueue(pushData)
      }else {
        clearInterval(inTimer)
      }
    }, 500)

    return () => {
      clearInterval(inTimer)
    }

  }, [])

  console.log(33333333333333, 'render time')

  return (
    <div>
      {
        list.map(item => <div id={item.id} style={item.isNew ? { color: 'orange' } : {}}>{`${item.id}-${item.name}`}</div>)
      }
    </div>
  )
}
