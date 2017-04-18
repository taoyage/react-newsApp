/*
 * @Author: accord
 * @FileName: pc_home_news_block.js                            
 * @Date:   2017-04-08 18:07:52                            
 * @Last Modified by:   accord     
 * @Last Modified time: 2017-04-17 18:52:46        
 */

import React from 'react';
import { Card } from 'antd';
import axios from 'axios';

/*css*/
import '../assets/css/pc_home_news_block.css';

export default class PCNewsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: ''
        };
    };
    componentWillMount() {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=guoji&count=6`)
            .then((response) => {
                this.setState({ news: response.data });
            });
    };
    render() {
        const { news } = this.state;
        const newsList = news.length ? news.map((newsItem, index) => {
            return (
                <div className="news_block" key={index}>
                    <div className="custom_img">
                        <img src={newsItem.thumbnail_pic_s} className="image_style" alt=""/>
                    </div>
                    <div className="custom_card">
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>
                </div>
            );
        }) : 'not any news';
        return (
            <div className="top_world_news">
                <Card title={this.props.cartTitle} bordered={true}>
                    <div className="news_wrap">
                        {newsList}
                    </div>
                </Card>
            </div>
        );
    };
};
