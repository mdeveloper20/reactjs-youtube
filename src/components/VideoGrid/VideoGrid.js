import React, { Component } from "react";

import "./video-grid.css";
const data = [
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
        channel: 'Future World Videos',
        details: '2K views - 11 hours ago'
    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
        channel: 'Future World Videos',
        details: '2K views - 11 hours ago'
    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
        channel: 'Future World Videos',
        details: '2K views - 11 hours ago'
    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
        channel: 'Future World Videos',
        details: '2K views - 11 hours ago'
    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
        channel: 'Future World Videos',
        details: '2K views - 11 hours ago'
    }
]
export default class VideoGrid extends Component {

    componentDidMount = () => {
        console.log('test')
    }

    renderVideo = (video) => {
        return (
            <div class="video">
                <img class="thumbnail" src={video.thumbnail} alt="" />
                <img class="avatar" src={video.avatar} width="224" height="224" alt="Man free icon" title="Man free icon" />
                <p class="title">{video.title}</p>
                <p class="channel">{video.channel}</p>
                <p class="details">{video.details}</p>
            </div>)
    }
    render() {
        const { headerTitle } = this.props;
        return (
            <section class="videos">
                {headerTitle && <h2>{headerTitle}</h2>}
                {data.map(this.renderVideo)}
            </section>
        );
    }
}
