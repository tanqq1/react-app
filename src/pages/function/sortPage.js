import React, { useState} from 'react';
import { bubbleSort } from '../../common/utils'

function SortPage(){

    const [value, setValue] = useState('');
    const [sortValue, setSortValue] = useState([])

    function onChange(){
        setSortValue(bubbleSort(JSON.parse(value)))
    }

    return (
        <div>
            <input onChange={e => {setValue(e.target.value)}} placeholder="输入数组进行排序..." />
            <button className="circle-button" onClick={onChange}>点击</button>
            <p>排序结果：{`${sortValue}`}</p>
            <div className="b-margin">
                hello
            </div>
            <div className="t-margin">world</div>
        </div>
    )
}

export default SortPage;
