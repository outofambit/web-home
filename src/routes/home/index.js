import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						<strong>evelyn masso</strong> is a person (all the time), an engineering manager (on weekdays), and a poet (on weekends). she currently contributes to p5.js.
						
						she likes to talk about mixed identities, queer poetry, and her recent love for running. originally from Ohio, she currently lives on unceded Tongva land (near Los Angeles) and uses she/they pronouns.
						
						nowadays you can find most of her activity on github and twitter.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
