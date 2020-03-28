import React, { Component } from "react";
import feedback from "../../assets/images/feedback.svg";
import gaming from "../../assets/images/gaming.svg";
import help from "../../assets/images/help.svg";
import history from "../../assets/images/history.svg";
import home from "../../assets/images/home.svg";
import library from "../../assets/images/library.svg";
import liked from "../../assets/images/liked.svg";
import live from "../../assets/images/live.svg";
import movies from "../../assets/images/movies.svg";
import premium from "../../assets/images/premium.svg";
import report from "../../assets/images/report.svg";
import settings from "../../assets/images/settings.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import trending from "../../assets/images/trending.svg";
import watchLater from "../../assets/images/watchLater.svg";

class MainSidebar extends Component {
	render() {
		return (
			<section class="sidebar">
				<ul>
					<li>
						<img src={home} alt="home" />
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
				</ul>
				<ul>
					<li>
						<img src={library} alt="library" />
						Library
					</li>
					<li>
						<img src={history} alt="history" />
						History
					</li>
					<li>
						<img src={watchLater} alt="watch later" />
						Watch later
					</li>
					<li>
						<img src={liked} alt="liked" />
						Liked videos
					</li>
				</ul>

				<span class="title">Subscriptions</span>

				<ul>
					<li>
						<img
							id="img"
							src="https://yt3.ggpht.com/koJfC5WxCnKnl0rGGMxqti0eD4Pbm9Px6eolU_xD6Ec9RQnhzKyRt53TWlOVcK8iK8jpWVEtw9s=s88-c-k-c0xffffffff-no-nd-rj"
							width="24"
							height="24"
						/>
						Popular on Youtube
					</li>
					<li>
						<img
							id="img"
							src="https://yt3.ggpht.com/Qpuqmo7x6Uz6OkqNuu5B2Pr3rQLHwceDvYn7e372xUhkY_EjsU__kU8IcsBd81DF-N3gWFlGGw=s88-c-k-c0xffffffff-no-nd-rj"
							width="24"
							height="24"
						/>
						Sports
					</li>
					<li>
						<img
							id="img"
							src="https://yt3.ggpht.com/Mc4ggYHgL1ANfvmy8PT3wSYVrK1r5gZhdQCK1sPu4FI5gFNlJ_EiowRi5faq1Ku7mcoqN-W6lLQ=s88-c-k-c0xffffffff-no-nd-rj"
							width="24"
							height="24"
						/>
						Gaming
					</li>
					<li>
						<img
							id="img"
							src="https://yt3.ggpht.com/NAxG9tyiFeMjAkktAPSAFFXwxctJe62ycjSCsAw_AW4Bk1CDblULKQqSYGmN7bw1MzTKJOOr=s88-c-k-c0xffffffff-no-nd-rj"
							width="24"
							height="24"
						/>
						Movies
					</li>
				</ul>

				<span class="title">More from youtube</span>
				<ul>
					<li>
						<img src={premium} alt="premium" />
						YouTube Premium
					</li>
					<li>
						<img src={movies} alt="movies" />
						Movies & Shows
					</li>
					<li>
						<img src={gaming} alt="gaming" />
						Gaming
					</li>
					<li>
						<img src={live} alt="live" />
						Live
					</li>
				</ul>

				<ul>
					<li>
						<img src={settings} alt="settings" />
						Settings
					</li>
					<li>
						<img src={report} alt="report" />
						Report history
					</li>
					<li>
						<img src={help} alt="help" />
						Help
					</li>
					<li>
						<img src={feedback} alt="feedback" />
						Send feedback
					</li>
				</ul>
			</section>
		);
	}
}
