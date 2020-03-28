import React, { Component } from "react";
import Header from "../../components/Header/Header";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import SmallSidebar from "../../components/SmallSidebar/SmallSidebar";

export default class AppWrapper extends Component {
	state = {
		wrapperAdditionalClass: "",
		headerAdditionalClass: ""
	};

	onMenuClick = () => {
		console.log("menu");
		const { wrapperAdditionalClass } = this.state;
		let wrapper = wrapperAdditionalClass;

		if (window.matchMedia("(max-width: 1300px)").matches) {
			if (wrapperAdditionalClass === "menu_overlay") {
				wrapper = "";
			} else {
				wrapper = "menu_overlay";
			}
		} else {
			if (wrapperAdditionalClass === "menu_small") {
				wrapper = "";
			} else {
				wrapper = "menu_small";
			}
		}

		this.setState({
			wrapperAdditionalClass: wrapper
		});
	};

	onSearchBtnClick = () => {
		console.log("sss");
        const { headerAdditionalClass } = this.state;
        let header = headerAdditionalClass;

		if (headerAdditionalClass === "search_active") {
            header='';
		} else {
            header='search_active';
        }
        
        this.setState({
            headerAdditionalClass: header
        })
	};

	render() {
		return (
			<div className={`wrapper ${this.state.wrapperAdditionalClass}`}>
				<Header
					onMenuClick={this.onMenuClick}
                    onSearchBtnClick={this.onSearchBtnClick}
                    headerAdditionalClass={this.state.headerAdditionalClass}
				/>
				<MainSidebar />
				<SmallSidebar />
				{this.props.childern}
			</div>
		);
	}
}
