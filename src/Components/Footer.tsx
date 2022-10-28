import {GitHubSVG} from '../img/Github';


export const Footer = () => <footer>
	<div className="footer_inner">
		<div>
			<a href="https://github.com/kozh-0" target='_blank' rel="noreferrer">
				<span>GitHub</span>
				<GitHubSVG/>
			</a>
		</div>
		{/* <p>OwlTop © 2020 - 2021</p> */}
		<p>Кожевников Дмитрий ©</p>
	</div>
</footer>;