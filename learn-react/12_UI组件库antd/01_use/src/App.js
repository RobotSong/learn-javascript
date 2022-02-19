import React, {Component} from 'react';
import { Button, Space, DatePicker } from 'antd';
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'; //

const { RangePicker  } = DatePicker

class App extends Component {

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        return (
            <Space>
                App...
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
        );
    }
}

export default App;