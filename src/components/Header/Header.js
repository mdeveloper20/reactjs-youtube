import React, { Component } from "react";

import menuSVG from "../../assets/images/menu.svg";
import icon1SVG from "../../assets/images/icon1.svg";
import logoSVG from "../../assets/images/logo.svg";
import searchSVG from "../../assets/images/search.svg";
import searchBtnSVG from "../../assets/images/searchBtn.svg";
import newVideoSVG from "../../assets/images/newVideo.svg";
import appsSVG from "../../assets/images/apps.svg";
import notificationsSVG from "../../assets/images/notifications.svg";
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<header class="top">
				<button class="back_btn">
					<img src={icon1SVG} alt="menu" />
				</button>
				<button class="menu">
					<img src={menuSVG} alt="menu" />
				</button>
				<button class="logo">
					<img src={logoSVG} alt="menu" />
				</button>

				<div class="search">
					<input type="text" name="search" placeholder="Search" />
					<button class="search_btn">
						<img src={searchSVG} alt="menu" />
					</button>
				</div>

				<button class="search_btn">
					<img src={searchBtnSVG} alt="menu" />
				</button>

				<button class="new_video">
					<img src={newVideoSVG} alt="menu" />
				</button>
				<button class="apps">
					<img src={appsSVG} alt="menu" />
				</button>

				<button class="notifications">
					<img src={notificationsSVG} alt="menu" />
				</button>

				<button class="user_avatar">
					<img
						src="https://image.flaticon.com/icons/svg/145/145843.svg"
						width="224"
						height="224"
						alt="Man free icon"
						title="Man free icon"
					/>
				</button>
			</header>
		);
	}
}
