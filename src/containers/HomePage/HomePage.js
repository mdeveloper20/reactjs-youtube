import React, { Component } from 'react'
import AppWrapper from '../AppWrapper/AppWrapper'
import VideoGrid from '../../components/VideoGrid/VideoGrid'

export default class HomePage extends Component {

    render() {
        return (
            <AppWrapper>
                <VideoGrid headerTitle='Recommended' />

            </AppWrapper>
        )
    }

}