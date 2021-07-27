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
						Jane presents traditional spanish art with a modern twist. Her work is
						excellent quality, her technique is brilliant and her love of the
						subject matter shines through.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
