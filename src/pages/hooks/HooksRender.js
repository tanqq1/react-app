import React from 'react'

// 测试引用类型的数据的改变对数据的影响
// 因为react采取的是浅比较，所以如果引用类型只是改变了值，引用地址并没有改变，这时候
// 不管是hooks里的依赖项还是作为props的参数，都会被认为值没有改变，因此也不会产生渲染
// 往往这样都与我们的意识违背
function HooksRender() {
    const [list, setList] = React.useState([])
    const [map, setMap] = React.useState({})

    React.useEffect(() => {
        console.log("list state is changed")
    }, [list])

    const onPushData = React.useCallback(() => {
        setList(prevList => {
            prevList.push(1)
            console.log("prevList.....", prevList)
            return prevList
        })
    }, [])

    React.useEffect(() => {
        console.log("map is changes")
    }, [map])

    const onChangeMap = React.useCallback(() => {
        setMap(prevMap => {
            prevMap.name = 'tanqq1'
            return prevMap
        })
    }, [])

    console.log("parent list", list)
    console.log("map.......", map)

    return (
        <div>
            <button style={{ backgroundColor: 'pink' }} onClick={onPushData}>push</button>
            <button style={{ backgroundColor: 'orange' }} onClick={onChangeMap}>add</button>
            <HooksRenderChild list={list} />
        </div>
    )
}

export default HooksRender

export function HooksRenderChild({ list }) {
    console.log("child list", list)
    React.useEffect(() => {
        console.log("child list props is changed")
    }, [list])

    return <div> this is child</div>
}
