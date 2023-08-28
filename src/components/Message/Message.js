const { useState } = require("react");
// import styled from 'styled-components';


const Message = ({msg}) => {
    const [ actualMsg, setActualMsg ] = useState(0);
    const quantity = msg?.length;

    const timer = setTimeout(() => {
        setActualMsg(actualMsg === 0 ? quantity - 1 : actualMsg - 1)
        clearTimeout()
    }, 5000)

    return(
        <div className="">
            {msg.map((message, idx) => {
                return (
                    <div onChange={timer}>
                        {actualMsg === idx && (
                            <h1 key={idx}>{message}</h1>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Message;