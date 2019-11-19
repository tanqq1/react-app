import React, {useState, useEffect} from 'react';
function GetTable(){
    const [name,setName] = useState('tanqq');
    useEffect(()=>{
        setName("tqq");
    },[])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>title1</td>
                        <td>title2</td>
                        <td>title3</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>第一列</td>
                        <td>第二列</td>
                        <td>第三列</td>
                    </tr>
                    <tr>
                        <td>第一列</td>
                        <td>第一列</td>
                        <td>第二列</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>{name}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default GetTable;
