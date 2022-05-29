import React, {useEffect, useRef, useState} from 'react';
import './index.css'

export type AddNotesProps = {
    text: string;
    notes: Note[];
}

export type Note = {
    // 主键
    id: string;
    // 标注文字开始的位置
    from: number;
    // 标注文字结束的位置
    to: number;
    // 添加的标注
    text: string;
}

const getSelection = () => {
    // @ts-ignore
    if (document.selection) {
        // @ts-ignore
        return document.selection;
    } else {
        return document.getSelection();
    }
}

const getContainerInnerTextIndexByBackward = (container: Node, node: Node, initial: number) => {
    let idx = initial; // 初始值
    let cur = node;
    // 下面*代表光标
    /**
     * <div><a>123</a>4*56</div> initial = 1
     * <div><a>123</a><a>4*56</a></div> initial = 1
     * <div>123<a>4*56</a></div> initial = 1
     * <div>1234*56</div> initial = 4
     */
    while (cur !== container) {
        if (cur.parentNode == null) {
            return idx
        }
        Array.from(cur.parentNode.childNodes).find((child: any) => {

            if (child !== cur) {
                // 可能是element，可能是文本节点，需要注意
                let s = 0;
                if (child.innerText) {
                    s = child.innerText.length
                } else if (child.data) {
                    s = child.data.length
                }
                idx += s;
            }
            return child === cur;
        });
        cur = cur.parentNode;
    }
    return idx;
}

const AddNotes: React.FC<AddNotesProps> = ({text, notes}) => {
    // 新增的标注路径
    const [note, setNote] = useState<Note | null>(null)
    // 标注列表
    const [noteArr, setNoteArr] = useState<Note[]>([])
    // 弹出编辑框的值
    const [textValue, setTextValue] = useState<string>('')
    // 弹出编辑框的 ID
    const [editId, setEditId] = useState<string | null>(null)


    // 包含全
    const textRef = useRef<any>()
    const addRef = useRef<any>()
    const addBtnRef = useRef<any>()
    const editNoteRef = useRef<any>()

    // 处理新增
    const doAddTextNote = () => {
        let choseNote = getSelection().containsNode(textRef.current, true);
        // 如果选中的文字是 ''， 则不处理， 并且设置 note 为 null
        let t = getSelection().toString()
        if (t === '' || !choseNote) {
            // 没选中任何文字， 又存在选中的情况
            if (note != null) {
                // addRef.current = null
                setNote(null)
            }
            addBtnRef.current.style.display = 'none'
            console.log('没选中任何文字:', t)
            return
        }
        let range = getSelection().getRangeAt(0)
        // 判断 元素 是否是在 当前组件中
        let startIndex;
        if (textRef.current.contains(range.startContainer)) {
            startIndex = getContainerInnerTextIndexByBackward(textRef.current, range.startContainer, range.startOffset)
        } else {
            // 如果不在，则认为是从头开始就被选中了
            startIndex = 0;
        }
        let endIndex;
        if (textRef.current.contains(range.endContainer)) {
            endIndex = getContainerInnerTextIndexByBackward(textRef.current, range.endContainer, range.endOffset)
        } else {
            // 如果不在，则代表最后都被选中了
            endIndex = text.length;
        }
        console.log('开始下标', startIndex, '结束下标', endIndex)
        if (startIndex === endIndex) {
            return
        }
        const newNote: Note = {
            id: `addNote-${Math.random()}`,
            from: startIndex,
            to: endIndex,
            text: ''
        }

        setNote(newNote)
    }

    // 监听 mouseup 事件
    const mouseup = () => {
        setTimeout(doAddTextNote, 10)
    }

    useEffect(() => {
        if (notes.length > 0) {
            // TODO 根据 from 排序
            setNoteArr([...notes])
        }
        document.addEventListener('mouseup', mouseup)
        return () => {
            document.removeEventListener('mouseup', mouseup)
        }
    }, [])

    useEffect(() => {
        // 如果存在 addRef
        if (addRef.current && note != null) {
            addBtnRef.current.style.display = 'block'
            addBtnRef.current.style.top = (addRef.current.offsetTop - 30) + 'px'
            addBtnRef.current.style.left = (addRef.current.offsetLeft) + 'px'
            // 这里 change 了一次
            const range = new Range()
            range.setStartBefore(addRef.current)
            range.setEndAfter(addRef.current)
            // 如何清楚的
            getSelection().removeAllRanges()
            getSelection().addRange(range)
        }
    }, [note])

    const getSpanLabel = (oprType: number, from: number, to: number, note: Note | null): JSX.Element => {
        // 操作类型 -1 - 默认，什么都不做 0-普通 span 1-新增 选中 2-已经存在的节点
        if (oprType === 0) {
            return <span key={`key-${Math.random()}`}>{text.substring(from, to)}</span>
        }
        if (oprType === 1) {
            return <span key={`key-${Math.random()}`} className={'add'} ref={addRef}>{text.substring(from, to)}</span>
        }
        if (oprType === 2) {
            return <span key={`key-${Math.random()}`} className={'text-note'}
                         onClick={(event: any) => {
                             if (note == null) {
                                 return
                             }
                             setEditId(note.id)
                             setTextValue(note.text)
                             editNoteRef.current.style.top = (event.currentTarget.offsetTop - 55) + 'px'
                             editNoteRef.current.style.left = event.currentTarget.offsetLeft + 'px'
                             editNoteRef.current.style.display = 'block'
                         }}>
                {text.substring(from, to)}
            </span>
        }
        return <span></span>
    }

    const getSpan = (): JSX.Element[] => {
        const arr: JSX.Element[] = []
        // 操作类型 -1 - 默认，什么都不做 0-普通 span 1-新增 选中 2-已经存在标注
        let oprType = 0
        let from = 0
        // 可能最后一位 Note
        let lastNote: Note | null = null
        // 渲染文字
        for (let i = 0; i < text.length; i++) {
            // 存在新增的标注
            if (note != null && i >= note.from && i <= note.to) {
                // 存在新增节点
                if (i === note.from) {
                    // 新增 span 标签 , 普通标签
                    if (from !== i) {
                        const label = getSpanLabel(oprType, from, i, null)
                        arr.push(label)
                    }
                    // 下一个的开始
                    from = i
                }
                oprType = 1
                // 已经大于，则说明
                if (i === note.to) {
                    const label = getSpanLabel(oprType, from, i, null)
                    arr.push(label)
                    from = i
                    oprType = 0
                }
            } else {
                for (let j = 0; j < noteArr.length; j++) {
                    // 判断 存在已经文字 标注
                    let n = noteArr[j]
                    if (i >= n.from && i <= n.to) {
                        // 存在新增节点
                        if (i === n.from) {
                            // 新增 span 标签 , 普通标签
                            if (from !== i) {
                                const label = getSpanLabel(oprType, from, i, null)
                                arr.push(label)
                            }
                            // 下一个的开始
                            from = i
                        }
                        oprType = 2
                        lastNote = n
                        // 已经大于，则说明处理结束
                        if (i === n.to) {
                            const label = getSpanLabel(oprType, from, i, n)
                            arr.push(label)
                            from = i
                            oprType = 0
                        }
                        break
                    }
                }
            }

        }
        const label = getSpanLabel(oprType, from, text.length, lastNote)
        arr.push(label)
        return arr
    }

    // 确认添加标注
    const doAdd = () => {
        if (note === null) {
            return
        }
        let isAdd = false
        // 新增
        const newNoteArr = []
        for (let i = 0; i < noteArr.length; i++) {
            let n = noteArr[i]
            // 如果已经存在的标注在选择范围内的，则不处理
            if (note.from <= n.from && note.to >= n.to) {
                continue
            }
            // 如果 新增的 from 比 它小，则先插入
            if (note.from < n.from) {
                isAdd = true
                newNoteArr.push(note)
                newNoteArr.push(n)
            } else if (note.from === n.from) {
                isAdd = true
                // 如果相等，则取 to 大的值
                let to = note.to > n.to ? note.to : n.to
                note.to = to
                note.text = n.text
                newNoteArr.push(note)
            } else {
                newNoteArr.push(n)
            }
        }
        if (!isAdd) {
            newNoteArr.push(note)
        }
        setTextValue(note.text)
        setNote(null)
        setNoteArr(newNoteArr)
        setEditId(note.id)
        // 弹出 编辑框
        editNoteRef.current.style.display = 'block'
        editNoteRef.current.style.top = addBtnRef.current.style.top
        editNoteRef.current.style.left = addBtnRef.current.style.left
        // 关闭
        addBtnRef.current.style.display = 'none'
    }

    const handleTextChange = (e: any) => {
        // 更改值
        setTextValue(e.target.value)
    }

    return (
        <div className="text-note-box">
            <div ref={editNoteRef} className="add-note-btn">
                <textarea value={textValue} onChange={handleTextChange} />
                <button onClick={() => {
                    if (editId === null) {
                        return
                    }
                    // 获取当前的值
                    const newNoteArr = []
                    for (let i = 0; i < noteArr.length; i++) {
                        const n = noteArr[i]
                        if (n.id === editId) {
                            n.text = textValue
                        }
                        newNoteArr.push(n)
                    }
                    setNoteArr(newNoteArr)
                    setEditId(null)
                    editNoteRef.current.style.display = 'none'
                }}>确认</button>
                <button onClick={() => {
                    editNoteRef.current.style.display = 'none'
                }}>取消</button>
            </div>
            <button ref={addBtnRef} className="add-note-btn" onClick={doAdd}>添加标注</button>
            <div ref={textRef}>
                {getSpan()}
            </div>
        </div>
    )
}

export default AddNotes;