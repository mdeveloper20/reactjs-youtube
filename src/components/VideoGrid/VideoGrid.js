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
    ,
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
    ,
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
    ,
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
    ,
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
        const { isSmall } = this.props;

        return (
            <div class="video" onClick={this.props.onVideoClick}>
                <img class="thumbnail" src={video.thumbnail} alt="" />
                {!isSmall && <>
                    <img class="avatar" src={video.avatar} width="224" height="224" alt="Man free icon" title="Man free icon" />
                    <p class="title">{video.title}</p>
                    <p class="channel">{video.channel}</p>
                    <p class="details">{video.details}</p>
                </>}
                {!!isSmall && <div>
                    <p class="title">{video.title}</p>
                    <p class="channel">{video.channel}</p>
                    <p class="details">{video.details}</p>
                </div>}


            </div>)
    }
    render() {
        const { headerTitle, isSmall } = this.props;


        return (
            <section class={`videos ${isSmall ? 'small-mode' : ''}`}>
                {headerTitle && <h2>{headerTitle}</h2>}
                {data.map(this.renderVideo)}
            </section>
        );
    }
}
