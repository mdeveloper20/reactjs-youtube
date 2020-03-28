import React, { Component } from "react";
import home from "../../assets/images/home.svg";
import homeRed from "../../assets/images/homeRed.svg";

import library from "../../assets/images/library.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import trending from "../../assets/images/trending.svg";

import "./small-sidebar.css";

export default class SmallSidebar extends Component {
	render() {
		return (
			<section class="sidebar_small">
				<ul>
					<li>
						<img src={homeRed} alt="home" />
						Home
					</li>
					<li>
						<img src={trending} alt="trending" />
						Trending
					</li>
					<li>
						<img src={subscriptions} alt="subscriptions" />
						Subscriptions
					</li>
					<li>
						<img src={library} alt="library" />
						Library
					</li>
				</ul>
			</section>
		);
	}
}
