/*
 * @Author: accord
 * @FileName: pc_home_news_list.js                         
 * @Date:   2017-04-08 16:39:57                            
 * @Last Modified by:   accord     
 * @Last Modified time: 2017-04-12 12:55:05        
 */

import React from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../assets/css/pc_home_news_list.css';

export default class PCHomeNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: ''
        };
    };
    componentWillMount() {
        axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=21`)
            .then((response) => {
                this.setState({ news: response.data });
            });
    };
    render() {
        const { news } = this.state;
        const newsList = news.length ? news.map((newsItem, index) => {
            return (
                <li key={index}>
                    <Link to={`/`}>
                        {newsItem.title}
                    </Link>
                </li>
            )
        }) : 'no news';
        return (
            <Card>
                <ul>
                    {newsList}
                </ul>
            </Card>
        )
    }
};
