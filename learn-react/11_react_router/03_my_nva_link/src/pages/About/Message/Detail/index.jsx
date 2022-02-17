import React from 'react';
import {useParams} from "react-router-dom";

const messageArr = [
    {id: '001', content: '我是消息1'},
    {id: '002', content: '我是消息2'},
    {id: '003', content: '我是消息3'},
]

function Detail(props) {

    const params = useParams();
    console.log(params)
    let data = messageArr.find( msg => {
        return msg.id === params.id
    })
    return (
        <div>
            <p className="px-2">ID:{params.id}</p>
            <p className="px-2">TITLE:{params.title}</p>
            <p className="px-2">CONTENT:{data.content}</p>
        </div>
    );
}

export default Detail;