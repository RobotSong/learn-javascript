import React, {Component} from 'react';
import { Button, Space, DatePicker, Select } from 'antd';
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';
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
            </div>
        );
    }
}

export default App;