import React, { Component } from 'react'
import AppWrapper from '../AppWrapper/AppWrapper'
import './watch-page.css';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { withRouter } from "react-router-dom";

const video = {
    thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',
    avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
    title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
    channel: 'Future World Videos',
    details: '2K views - 11 hours ago'
}
const comments = [
    {
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        auther: 'Masoud',
        text: 'This is a practical reactjs tutorial',
    },
    {
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        auther: 'Masoud',
        text: 'This is a practical reactjs tutorial',
    },
    {
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        auther: 'Masoud',
        text: 'This is a practical reactjs tutorial',
    },
    {
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        auther: 'Masoud',
        text: 'This is a practical reactjs tutorial',
    },
    {
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        auther: 'Masoud',
        text: 'This is a practical reactjs tutorial',
    },
    {
        avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg',
        auther: 'Masoud',
        text: 'This is a practical reactjs tutorial',
    }
]
class WatchPage extends Component {
    onVideoClick = () => {
        this.props.history.push('/watch')
    }
    render() {
        return (
            <AppWrapper hideSidebar={true}>

                <div className='watch_page'>
                    <div className='video_container'>
                        <div className='player'>

                        </div>
                        <div className='info'>
                            <div className='tags'>
                                #studymusic #learningjs #learntocode
                            </div>
                            <h2>Practical ReactJS Tutorial </h2>

                        </div>
                        <div className='channel_details'>
                            <img class="avatar" src={video.avatar} width="224" height="224" alt="Man free icon" title="Man free icon" />
                            <div>
                                <p class="channel">{video.channel}</p>
                                <p class="details">{video.details}</p>
                                <div className='desciption'>
                                    Test description Test description Test description
                                    Test descriptionTest descriptionTest descriptionTest descriptionTest description
                                    Test description Test description Test description Test description Test description
                                </div>
                            </div>
                        </div>
                        <div className='comments'>
                            {
                                comments.map(item =>
                                    (<div className='comment'>
                                        <img class="avatar" src={item.avatar} width="224" height="224" alt="Man free icon" title="Man free icon" />
                                        <div>
                                            <p class="author">{item.auther}</p>
                                            <p className='text'>{item.text}</p>
                                        </div>

                                    </div>)
                                )
                            }


                        </div>
                    </div>
                    <div className='next_videos'>
                        <VideoGrid onVideoClick={this.onVideoClick} headerTitle={'Up Next'} isSmall={true} />
                    </div>

                </div>
            </AppWrapper>
        )
    }

}

export default withRouter(WatchPage)