import React, {Component} from "react";
import {Carousel} from "antd";
import "../css/home.css";
const imgs = [
	{img:"imgs/01.jpg",
	content:"第一张图"
	},
	{img:"imgs/01.jpg",content:"第二张图"},
	{img:"imgs/01.jpg",content:"第三张图"},
	{img:"imgs/01.jpg",content:"第四张图"},
]
class Home extends Component {

	render(){
		return(
			<div className="home">
				<Carousel autoplay>
				{
					imgs.map((img,i) =>{
						return(
							<div key={i}>
								<img style={{margin:"auto"}} src={img.img} alt={img.img}/>
								<h3>{img.content}</h3>
							</div>
						)
					})
				}
				</Carousel>
			</div>
		);
	}
}
export default Home;


