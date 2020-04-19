import React, { Component } from 'react'
import AppWrapper from '../AppWrapper/AppWrapper'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import { withRouter } from "react-router-dom";

class HomePage extends Component {

    onVideoClick = () => {
        this.props.history.push('/watch')
    }
    render() {
        return (
            <AppWrapper hideSidebar={false}>
                <VideoGrid onVideoClick={this.onVideoClick} headerTitle='Recommended' />

            </AppWrapper>
        )
    }

}

export default withRouter(HomePage)