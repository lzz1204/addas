import React, { Component } from 'react';
import { Menu,Button } from 'antd';
import "../css/menu.css";
import { Link } from "react-router-dom";
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const imgs = {
 img1:"imgs/logo.png"
}
class AppNav extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="menu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="img">
            <img src={imgs.img1}/>
          </Menu.Item>
          <Menu.Item key="man">
            男子
          </Menu.Item>
          <Menu.Item key="woman">
            女子
          </Menu.Item>
          <Menu.Item key="childen">
            童装
          </Menu.Item>
          <Menu.Item key="signup" style={{float:"right",}}>
           <Link to="/signup"><Button>注册</Button></Link>
          </Menu.Item>
          <Menu.Item key="login" style={{float:"right",}}>
              <Link to="/login"><Button>登录</Button></Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default AppNav;
