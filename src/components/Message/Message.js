import { useState } from 'react'
// import styled from 'styled-components';


const Message = ({msg}) => {
    const [ actualMsg, setActualMsg ] = useState(0);
    const quantity = msg?.length;

    setTimeout(() => {
        setActualMsg(actualMsg === 0 ? quantity - 1 : actualMsg - 1)
        clearTimeout()
    }, 4999)

    return(
        <div className="">
            {msg.map((message, id) => {
                return (
                    <div key={id}>
                        {actualMsg === id && (
                            <h1>{message}</h1>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Message;