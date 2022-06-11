import React from "react";
import SendLocalStorage from "../../components/SendLocalStorage";

const SendLocalStorageExample = () => {

  return (
    <SendLocalStorage url={'http://localhost'} sendSuccessCall={() => {
      console.log('发送成功，回调!')
    }} />
  )
}

export default SendLocalStorageExample;