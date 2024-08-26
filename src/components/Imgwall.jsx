import React from 'react';
import Mjlogo from '../media/Mjlogo.png';
import Netflix from '../media/Netflix.png';
import PoseMaster from '../media/PoseMaster.png';
import CloudCast from '../media/CloudCast.png';
import NewsMonkey from '../media/NewsMonkey.png';
import SpoonFed from '../media/SpoonFed.png';
import DripX from '../media/DripX.png';
import ImgwallImage from './ImgwallImage';
import LinkedOut from '../media/LinkedOut.png';
import StreetFighter2 from '../media/StreetFighter2.png';

const Imgwall = () => {
	return (
		<section>
			<div className="flex flex-wrap my-3">
				<ImgwallImage
					src={StreetFighter2}
					projectLink="https://streetfighterbymayank.netlify.app/"
				/>
				<ImgwallImage
					src={SpoonFed}
					projectLink="https://spoon-fed.vercel.app/"
				/>

				<ImgwallImage
					src={Netflix}
					projectLink="https://mayank-jain-1.github.io/Netflix-Homepage.github.io/"
				/>
				<ImgwallImage
					src={NewsMonkey}
					projectLink="https://news-monkey-seven.vercel.app/"
				/>

				<ImgwallImage
					src={PoseMaster}
					projectLink="https://github.com/Mayank-Jain-1/Pose-Master"
				/>
				<ImgwallImage
					src={LinkedOut}
					projectLink="https://github.com/Mayank-Jain-1/LinkedOut"
				/>
				<ImgwallImage
					src={Mjlogo}
					projectLink="https://mayank-jain.vercel.app/"
				/>

				<ImgwallImage
					src={DripX}
					projectLink="https://mayank-jain-1.github.io/DripX.github.io/"
				/>
				<ImgwallImage
					src={CloudCast}
					projectLink="https://cloud-cast.vercel.app/"
				/>
			</div>
		</section>
	);
};

export default Imgwall;
