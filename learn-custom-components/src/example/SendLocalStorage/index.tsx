import React, {useState} from "react";
import SendLocalStorage from "../../components/SendLocalStorage";

const SendLocalStorageExample = () => {

  // 是否
  const [isStartSend, setIsStartSend] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => { setIsStartSend(true) }}>发送LocalStorage</button>
      <SendLocalStorage url={'http://localhost'} isStartSend={isStartSend} sendSuccessCall={() => {
        setIsStartSend(false)
        console.log('发送成功，回调!')
      }} />
    </div>
  )
}

export default SendLocalStorageExample;