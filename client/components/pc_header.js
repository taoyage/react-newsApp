/*
 * @Author: accord
 * @FileName: pc_header.js 						   
 * @Date:   2017-04-05 10:32:19 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-04-12 15:28:03 	   
 */


import React from 'react';
import { Row, Col, Menu, Icon, Modal, Tabs, Form, Button, Input } from 'antd';

import logo from '../assets/images/logo.png';
import '../assets/css/pc_header.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false,
            logined: false,
            action: 'login'
        }
    };
    componentWillMount() {

    };
    setModalVisible(value) {
        this.setState({ modalVisible: value });
    };
    handleClick(e) {
        if (e.key === "register") {
            this.setModalVisible(true);
        }
    };
    handleSubmit(e) {
        e.preventDefault();
    };
    TabsChange(key) {
        if (key === '1') {
            this.setState({ action: 'login' });
        } else if (key === '2') {
            this.setState({ action: 'register' });
        }
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const userShow = this.state.logined ?
            <Menu.Item key="logout" >
				退出
    		</Menu.Item> :
            <Menu.Item key="register" class="register">
				<Icon type="user"/>注册/登陆
			</Menu.Item>

        return (
            <header className="header">
						<Row>
							<Col span={2}></Col>
							<Col span={4}>
								<a href="/" className="logo">
									<img src={logo} alt="logo"/>
									<span>雅阁新闻</span>
								</a>
							</Col>
							<Col span={16}>
								<Menu mode="horizontal" onClick={this.handleClick.bind(this)}>
									<Menu.Item key="top">
										<Icon type="appstore"/>头条
									</Menu.Item>
									<Menu.Item key="shehui">
										<Icon type="appstore"/>社会
									</Menu.Item>
									<Menu.Item key="guonei">
										<Icon type="appstore"/>国内
									</Menu.Item>
									<Menu.Item key="guoji">
										<Icon type="appstore"/>国际
									</Menu.Item>
									<Menu.Item key="yule">
										<Icon type="appstore"/>娱乐
									</Menu.Item>
									<Menu.Item key="tiyu">
										<Icon type="appstore"/>体育
									</Menu.Item>
									<Menu.Item key="keji">
										<Icon type="appstore"/>科技
									</Menu.Item>
									<Menu.Item key="shishang">
										<Icon type="appstore"/>时尚
									</Menu.Item>
									{userShow}
								</Menu>
								<Modal title="用户中心" visible={this.state.modalVisible} 
								onCancel={()=>this.setModalVisible(false)} 
								onOk={()=>this.setModalVisible(false)}>
									<Tabs type="card" onChange={this.TabsChange.bind(this)}>
										<TabPane tab="登陆" key="1">
											<Form onSubmit={this.handleSubmit.bind(this)}>

												<FormItem>
												{getFieldDecorator('userName', {rules: [{ required: true, message: 'Please input your username!' }],
												})(
												    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
												)}
												</FormItem>

												<FormItem>
												{getFieldDecorator('password', {rules: [{ required: true, message: 'Please input your Password!' }],
										        })(
										            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
										        )}
												</FormItem>

												<Button type="primary" htmlType="submit">登录</Button>
											</Form>
										</TabPane>
										<TabPane tab="注册" key="2">
											<Form onSubmit={this.handleSubmit.bind(this)}>
												<FormItem>
												{getFieldDecorator('r_userName', {rules: [{ required: true, message: 'Please input your username!' }],
												})(
												    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="username" />
												)}
												</FormItem>

												<FormItem>
												{getFieldDecorator('r_password', {rules: [{ required: true, message: 'Please input your Password!' }],
										        })(
										            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="password" />
										        )}
												</FormItem>

												<FormItem>
												{getFieldDecorator('confirm_password', {rules: [{ required: true, message: 'Please confirm your password Password!' }],
										        })(
										            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="confirm password" />
										        )}
												</FormItem>
												<FormItem>
													<Button type="primary" htmlType="submit">注册</Button>
												</FormItem>
											</Form>
										</TabPane>
									</Tabs>
								</Modal>
							</Col>
							<Col span={2}></Col>
						</Row>
					</header>
        );
    };
};

export default PCHeader = Form.create()(PCHeader);
