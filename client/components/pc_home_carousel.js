/*
 * @Author: accord
 * @FileName: pc_home_carousel.js 						   
 * @Date:   2017-04-10 10:08:49 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-04-10 15:09:22 	   
 */

import React from 'react';
import { Carousel } from 'antd';

/*css*/
import '../assets/css/pc_home_carousel.css';

/*图片*/
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

export default class PCHomeCarousel extends React.Component {
	render(){
		 /*轮播配置*/
		 const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            effect: "fade"
        };
		return(
			<Carousel {...settings}>
				<div><img src={carousel1} alt="carousel1"/></div>
				<div><img src={carousel2} alt="carousel2"/></div>
				<div><img src={carousel3} alt="carousel3"/></div>
				<div><img src={carousel4} alt="carousel4"/></div>
			</Carousel>			
		);
	};
};