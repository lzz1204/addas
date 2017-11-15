import React, {Component} from "react";
import {Switch,Link,Route} from "react-router-dom";
class User extends Component {

	render(){
		return(
			<div>
				<h1>这里是用户中心</h1>
				<Link to="/user/userinfo">用户信息</Link>
				<br/>
				<Link to="/user/userarticles">用户日志</Link>
				<Switch>
					<Route path="/user/userinfo" render={()=>{
							return(
								<div>
									查看用户信息
								</div>
							)
						}}
					/>
					<Route path="/user/userarticles" 
						render={()=>{
							return(
								<div>
								查看用户日志
								</div>
							)
						}}
					/>
				</Switch>
			</div>
		)
	}
}

export default User;