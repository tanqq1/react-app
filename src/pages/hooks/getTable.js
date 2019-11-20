import React, {useState, useEffect} from 'react';
function GetTable(props){
    const [name,setName] = useState('tanqq');
    const [tableList,setTableList] = useState([
        {name:'tqq',age:24,sex:'femeal'},
        {name:'tmm',age:22,sex:'meal'},
        {name:'tan',age:30,sex:'femeal'},
    ])

    useEffect(()=>{
        setName("tqq");
        return () => {
            console.log("remove时")
        }
    },[])

    useEffect(()=>{
        console.log("seconde")
    },[props.initalValue])

    function getTableList(prev){
        const tempTableList = tableList.map(item => {
            if(prev){
                return ({
                    ...item,
                    age:item.age -1,
                })
            }else {
                return ({
                    ...item,
                    age:item.age + 1,
                })
            }
        })
        setTableList(tempTableList);
    }

    return (
        <>
            <input onChange={(e)=>{props.onchangeCount(e.target.value)}} defaultValue={props.initalValue} />
            <div>
                <button onClick={() => getTableList(false)}>next year</button>
                <button onClick={() => getTableList(true)}>previous year</button>
            </div>
            <div style={{marginTop:20,marginBottom:20}}>
                <select defaultValue={props.initalValue} defaultChecked={props.initalValue}>
                    <option value="first">first</option>
                    <option value="second">second</option>
                </select>
            </div>
            <table border={1} style={{width:400,height:200,textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>sex</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableList.map((item, index) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.sex}</td>
                        </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr style={{width:400}}>
                        <td>{name}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default GetTable;
