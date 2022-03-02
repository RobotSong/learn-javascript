import React, {Component} from 'react';
import { Button, Space, DatePicker, Select, Tree } from 'antd';
import { WechatOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'; //

const { RangePicker  } = DatePicker
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i} value={i.toString()}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

const treeData = []

treeData.push({
    id: 1,
    name: '婚礼',
    parentId: 0
})

treeData.push({
    id: 2,
    name: '美甲',
    parentId: 0
})

treeData.push({
    id: 3,
    name: '美发',
    parentId: 0
})

treeData.push({
    id: 4,
    name: '婚纱',
    parentId: 1
})

treeData.push({
    id: 5,
    name: '婚车',
    parentId: 1
})

treeData.push({
    id: 6,
    name: '星星',
    parentId: 2
})

treeData.push({
    id: 7,
    name: '奥迪',
    parentId: 5
})

treeData.push({
    id: 8,
    name: '北极星',
    parentId: 6
})

// 列表数据转换为树形列表数据
const listToTree = (lst, pid) => {
    let tmp = []
    let treeLst = lst
    treeLst.forEach((item, index) => {
        if (item.parentId === pid) {
            const treeItem = {
                title: item.name,
                key: item.id,
                children: []
            }
            const children = listToTree(treeLst, item.id)
            console.log('children', children)
            if (children && (children.length > 0)) {
                treeItem.children = children
            }

            tmp.push(treeItem)
        }
    })
    return tmp
}

const data = listToTree(treeData, 0)

console.log(data)

class App extends Component {

    onChange(date, dateString) {
        console.log(date, dateString);
    }


    render() {

        return (
            <div>
                <Space>
                    <Button type="primary" loading={true} >Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <br />
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                    <WechatOutlined spin={true} />
                    <DatePicker onChange={this.onChange} />
                    <RangePicker
                        dateRender={current => {
                            const style = {};
                            if (current.date() === 1) {
                                style.border = '1px solid #1890ff';
                                style.borderRadius = '50%';
                            }
                            return (
                                <div className="ant-picker-cell-inner" style={style}>
                                    {current.date()}
                                </div>
                            );
                        }} />
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>

                </Space>
                <div>
                    <Select mode="tags" style={{ width: 200 }} placeholder="Tags Mode" onChange={handleChange}>
                        {children}
                    </Select>
                </div>
                <div>
                    <Tree
                        showIcon
                        defaultExpandAll
                        defaultSelectedKeys={['0-0-0']}
                        switcherIcon={<DownOutlined />}
                        treeData={data}
                    />
                </div>
            </div>
        );
    }
}

export default App;