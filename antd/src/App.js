import React from 'react'
import { DatePicker, message ,Button} from 'antd'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toString(),
        current: 'mail'
    }
  }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

  handleChange = (date) => {
    message.info('您选择的日期是: ' + date.toString())
    this.setState({ date })
  }


  render() {
    return (
      <div style={{ width: '900px', margin: '100px auto' }}>
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal">
              <Menu.Item key="mail">
                  <Icon type="mail" />Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled>
                  <Icon type="appstore" />Navigation Two
              </Menu.Item>
              <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                  <MenuItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
          </Menu>
          <br/> <br/> <br/> <br/>
          <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
          <br/>  <br/> <br/>
          <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    )
  }
}

export default App
