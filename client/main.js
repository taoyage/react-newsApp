import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import PCHome from './views/pc/pc_home';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
	render(){
		return(
			<Router>
				<Route path="/" component={PCHome}/>
			</Router>
		);
	};
};

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
