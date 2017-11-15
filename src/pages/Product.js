import React,{Component} from "react";
import UploadImg from "../components/UploadImg";
import {Form, Button, Input,message} from "antd";
import { product } from "../service/api";
const FromItem = Form.Item;

class NormalProduct extends Component{
	state={
		imgList:[],
	}
	getImgList(imgList){
		this.setState({
			imgList:imgList
		})
	}
	handleSubmit(e){
		e.preventDefault(e);
		const content = window.CKEDITOR.instances.info.getData();
		console.log("Content: ", content);
		this.props.form.validateFields((err,values)=>{
			if (!err) {
				// console.log("values",values);
				values.images = this.state.imgList;
				values.info = content;
				console.log("tag",values.tag);
				const tags = values.tag.split(" ");
				console.log("tags",tags);
				values.tag = tags;
				console.log("values",values);
				product(values).then((resJson)=>{
					if (resJson.OK) {
						message.success("添加成功");
					} else {
						message.error("添加失败"+ resJson.message)
					}
				}).catch((err)=>{
					message.error("错误")
					console.log(err);
				})
			} 
		})

	}
	componentDidMount(){
		window.CKEDITOR.replace("info", {
			height: 500,	
			filebrowserImageUploadUrl: "http://192.168.1.210:3000/manage/product/ckeditor?CKEditorFuncNum=",
		});	
	}
	render(){
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const {getFieldDecorator} = this.props.form;
		return(
		<div>
			<h1>新增商品</h1>
			<Form onSubmit={this.handleSubmit.bind(this)}>
				<FromItem {...formItemLayout}
					label="商品名称" hasFeedback
					>
					{getFieldDecorator('name', {
            rules: [{ required: true, message: '商品名称名不能为空', whitespace: true },
            ],
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="商品描述" hasFeedback
					>
					{getFieldDecorator('discription', {
            rules: [{ required: true, message: '商品描述不能为空', whitespace: true },
            ],
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="商品价格" hasFeedback
					>
					{getFieldDecorator('price', {
            rules: [{ required: true, message: '请输入商品价格' }
            ],
            validateTrigger: "onBlur"
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="库存" hasFeedback
					>
					{getFieldDecorator('storage', {
            rules: [{ required: true, message: '库存数量' }
            ],
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="分类" hasFeedback
					>
					{getFieldDecorator('category', {
            rules: [{ required: true, message: '商品分类' }
            ],
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="单位" hasFeedback
					>
					{getFieldDecorator('unit', {
            rules: [{ required: true, message: '商品单位' }
            ],
            validateTrigger: "onBlur"
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="图片列表" 
					>	
					{getFieldDecorator('images')(
            <UploadImg
            	action="http://192.168.1.210:3000/upload"
            	max={5}
            	getImgList={this.getImgList.bind(this)}
             />
          )}				
				</FromItem>
				<FromItem {...formItemLayout}
					label="标签" hasFeedback
					>
					{getFieldDecorator('tag', {
            rules: [{ required: true, message: '商品标签' }
            ],
            validateTrigger: "onBlur"
          })(
            <Input />
          )}
				</FromItem>

				<FromItem {...formItemLayout}
					label="商品详细描述" hasFeedback
					>
					{getFieldDecorator('info')(
            <textarea id="info"/>
          )}
				</FromItem>

			<Button htmlType="submit">提 交</Button>
			</Form>
		</div>	
		)
	}
}

export default Form.create()(NormalProduct);