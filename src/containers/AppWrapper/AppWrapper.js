import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import MainSidebar from '../../components/MainSidebar/MainSidebar'
import SmallSidebar from '../../components/SmallSidebar/SmallSidebar'
import "./app-wrapper.css";
import { withRouter } from 'react-router-dom';

class AppWrapper extends Component {
    state = {
        wrapperAdditionalClass: '',
        headerAdditionalClass: '',
    }

    onLogoClick = () => {
        this.props.history.push('/')
    }
    onMenuClick = () => {
        const { wrapperAdditionalClass } = this.state
        const { hideSidebar } = this.props;
        let wrapper = wrapperAdditionalClass

        if (window.matchMedia('(max-width: 1300px)').matches || hideSidebar) {
            if (wrapperAdditionalClass === 'menu_overlay') {
                wrapper = ''
            } else {
                wrapper = 'menu_overlay'
            }
        } else {
            if (wrapperAdditionalClass === 'menu_small') {
                wrapper = ''
            } else {
                wrapper = 'menu_small'
            }
        }

        this.setState({
            wrapperAdditionalClass: wrapper,
        })
    }

    onSearchBtnClick = () => {
        console.log('sss')
        const { headerAdditionalClass } = this.state
        let header = headerAdditionalClass

        if (headerAdditionalClass === 'search_active') {
            header = ''
        } else {
            header = 'search_active'
        }

        this.setState({
            headerAdditionalClass: header,
        })
    }

    render() {
        const { hideSidebar } = this.props;
        const { alwaysHide } = this.props;

        return (
            <div className={`wrapper ${this.state.wrapperAdditionalClass} ${hideSidebar ? 'hideSidebar' : ''}`}>
                <Header
                    onMenuClick={this.onMenuClick}
                    onSearchBtnClick={this.onSearchBtnClick}
                    headerAdditionalClass={this.state.headerAdditionalClass}
                    onLogoClick={this.onLogoClick}
                />
                <MainSidebar alwaysHide={alwaysHide} />
                <SmallSidebar />
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AppWrapper);