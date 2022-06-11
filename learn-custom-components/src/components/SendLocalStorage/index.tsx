import React, {useEffect, useRef} from 'react';

export type SendProps = {
  url: string;
  sendSuccessCall: () => void;
}
/**
 * 发送当前的 localStorage 到 url 中，发送成功后，进行 sendSuccessCall 回调
 */
const SendLocalStorage: React.FC<SendProps> = (props: SendProps) => {

  const frameRef = useRef<any>()

  const url = () => {
    if (props.url.endsWith('/'))
      return props.url + 'setLocalStorage.html'

    return props.url + '/setLocalStorage.html'
  }

  useEffect(() => {
    // 如果 url 的域名和端口 ，跟现在的保持 一致，则不处理
    const myURL = new URL(props.url)
    if (window.location.hostname === myURL.hostname
      && window.location.port === myURL.port) {
      console.log('域名和端口一致，不处理!')
      return
    }

    let obj: any = {}
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key === null) {
        continue
      }
      obj[key] = localStorage.getItem(key)
    }
    // 监听 frame 加载完成!
    if (frameRef.current.attachEvent){
      frameRef.current.attachEvent("onload", () => {
        console.log('开始发送信息!')
        // 发送所有的 localStorage 到 props.url 域名中
        frameRef.current.contentWindow.postMessage({localStorage: obj}, props.url)
      })

    } else {
      frameRef.current.onload = () => {
        console.log('开始发送信息!')
        frameRef.current.contentWindow.postMessage({localStorage: obj}, props.url)
      }
    }

    const messageFn = (event: any) => {
      if (event.data?.sendLocalStorageSuccess) {
        props.sendSuccessCall()
      }
    }

    window.addEventListener('message', messageFn);

    return () => {
      // 关闭资源
      window.removeEventListener('message', messageFn)
    };
  }, [props])

  return (
    <div className="send-local-storage">
      <iframe ref={frameRef} title="sendMessage" src={url()} style={{"display": "none"}} />
    </div>
  )
}

export default SendLocalStorage;