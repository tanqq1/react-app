import React, { useState, useEffect } from 'react';

function UseIsOdd(count) {
    const [isOdd, setIsOdd] = useState(0);

    useEffect(() => {
        setIsOdd(count % 2 !== 0)
    }, [count])

    return isOdd;
}

export default UseIsOdd;

function renderTable(renderData) {

}


export function useEventQueue(renderTable) {
    // 数据缓存
    const cacheData = []
    // 是否正在执行标识
    let isExecuting = false
    // 上个定时器任务
    let prevTimer = '';

    const handlePushData = React.useCallback(async () => {
        if (cacheData.length === 0) {
            if (prevTimer) {
                clearTimeout(prevTimer)
            }
            isExecuting = false;
            return
        }
        console.log("cacheData.length", cacheData.length)
        // 如果正在渲染过程中，就先不做任务推入
        if (!isExecuting) {
            // 先将正在执行标识置为true
            isExecuting = true
            const renderData = cacheData.splice(0, 20)
            const a = await renderTable(renderData)
            console.log("aaaaaaaaaaa", a)
            // 渲染完之后再将正在执行标识置为false
            isExecuting = false
            // 执行过程标识为true,去执行数据渲染
            const curTimer = setTimeout(() => {
                // 将上个定时器任务关闭
                console.log(2222222222222222222, 'excuteing time ')
                clearTimeout(prevTimer)
                prevTimer = curTimer
                handlePushData()
            }, 3)
        }

    }, [])

    const eventPush = React.useCallback((data) => {
        // 要是有立即执行的函数，则在这里执行
        // const newData = await immediateFun()
        // 每次将推送数据缓存
        cacheData.push(...data)
        if (isExecuting) return
        handlePushData()
    }, [])

    return eventPush

}