/*
 * @Author: accord
 * @FileName: pc_home.js 						   
 * @Date:   2017-04-08 14:09:44 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-04-18 15:46:14 	   
 */

import React from 'react';
import { Row, Col, Tabs } from 'antd';
import PCHeader from '../../components/pc_header';
import PCCarousel from '../../components/pc_home_carousel';
import PCHomeNewsBlock from '../../components/pc_home_news_block';
import PCHomeNewsList from '../../components/pc_home_news_list';

/*test input format*/
import NumberFormat from 'react-input-number-format';
// import PCHomeSidebar from '../../components/pc_home_sidebar';

const TabPane = Tabs.TabPane;

/*css*/
import '../../assets/css/pc_home.css';

export default class PCHome extends React.Component {
    render() {
        return (
            <section id="home">
				<PCHeader></PCHeader>
				<section className="container">
					<Row>
						<Col span={2}>
							<NumberFormat displayType="text" value={1231} thousandSeparator={true} prefix={'$$'}/>
						</Col>
						<Col span={5}>
							
						</Col>
						<Col span={8}>
							<Tabs className="tabs_news">
								<TabPane tab="头条新闻" key="1">
									<PCHomeNewsList count={22} type="top" width="100%" bordered="false"/>
								</TabPane>
								<TabPane tab="国际" key="2">
									<PCHomeNewsList count={22} type="guoji" width="100%" bordered="false"/>
								</TabPane>
							</Tabs>
						</Col>
						<Col span={7}>
							<section className="left">
								<PCCarousel />
								<PCHomeNewsBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
							</section>
						</Col>
						<Col span={2}></Col>
					</Row>
					<Row>
						<Col span={24}>
							<PCHomeNewsBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
						</Col>
					</Row>
				</section>
			
			</section>
        )
    };
};
