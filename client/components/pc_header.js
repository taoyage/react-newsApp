/*
 * @Author: accord
 * @FileName: pc_header.js 						   
 * @Date:   2017-04-05 10:32:19 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-04-10 12:11:46 	   
 */


import React from 'react';

import { Row, Col, Menu, Icon } from 'antd';

import logo from '../assets/images/logo.png';
import '../assets/css/pc_header.css';

export default class PCHeader extends React.Component {
        render() {
                return (
                 	<header className="header">
						<Row>
							<Col span={2}></Col>
							<Col span={4}>
								<a href="/" className="logo">
									<img src={logo} alt="logo"/>
									<span>ReactNews</span>
								</a>
							</Col>
							<Col span={16}>
								<Menu mode="horizontal">
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
								</Menu>
							</Col>
							<Col span={2}></Col>
						</Row>
					</header>	        
				);
    };
};
