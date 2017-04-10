/*
 * @Author: accord
 * @FileName: pc_home_container.js 						   
 * @Date:   2017-04-08 14:29:05 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-04-10 10:21:23 	   
 */

import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCHomeNewsBlock from './pc_home_news_block';
import PCHomeNewsList from './pc_home_news_list';

/*css*/
import '../assets/css/pc_home_container.css';

/*图片*/
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

const TabPane = Tabs.TabPane;

export default class PCHomeContainer extends React.Component {
    render() {
    	/*轮播配置*/
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            effect: "fade"
        };
        return (
            <div className="container">
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<div className="left">
							<div className="carousel_figure">
							<Carousel {...settings}>
							    <div><img src={carousel1} alt="carousel1"/></div>
								<div><img src={carousel2} alt="carousel2"/></div>
								<div><img src={carousel3} alt="carousel3"/></div>
								<div><img src={carousel4} alt="carousel4"/></div>
							</Carousel>
							</div>
							<PCHomeNewsBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
						</div>
						<Tabs class="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCHomeNewsList count={22} type="top" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCHomeNewsList count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
        );
    };
};
