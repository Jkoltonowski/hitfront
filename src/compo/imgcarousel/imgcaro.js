/** @format */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './imgcarou.css';
import sprite from './sprite.svg';
import zdj2 from '../zdjMaszyn/carousel/2.jpg';
import zdj3 from '../zdjMaszyn/carousel/3.jpg';
import zdj4 from '../zdjMaszyn/carousel/4.jpg';
const images = [zdj2, zdj3, zdj4];
function imgcaro() {
	const rotateAnimationHandler = (props, state) => {
		const transitionTime = props.transitionTime + 'ms';
		const transitionTimingFunction = 'ease-in-out';
		let slideStyle = {
			display: 'block',
			minHeight: '100%',
			transitionTimingFunction: transitionTimingFunction,
			msTransitionTimingFunction: transitionTimingFunction,
			MozTransitionTimingFunction: transitionTimingFunction,
			WebkitTransitionTimingFunction: transitionTimingFunction,
			OTransitionTimingFunction: transitionTimingFunction,
			transform: `rotate(0)`,
			position:
				state.previousItem === state.selectedItem ? 'relative' : 'absolute',
			inset: '0 0 0 0',
			zIndex: state.previousItem === state.selectedItem ? '1' : '-3',
			opacity: state.previousItem === state.selectedItem ? '0' : '-3',
			WebkitTransitionDuration: transitionTime,
			MozTransitionDuration: transitionTime,
			OTransitionDuration: transitionTime,
			transitionDuration: transitionTime,
			msTransitionDuration: transitionTime,
		};
		return {
			slideStyle,
			selectedStyle: {
				...slideStyle,
				opacity: 1,
				position: 'relative',
				zIndex: 0,
				filter: `blur(0)`,
			},
			prevStyle: {
				...slideStyle,
				transformOrigin: ' 0 100%',
				transform: `rotate(${
					state.previousItem > state.selectedItem ? '-45deg' : '45deg'
				})`,
				opacity: '0',
				filter: `blur( ${
					state.previousItem === state.selectedItem ? '0px' : '5px'
				})`,
			},
		};
	};
	return (
		<div className='box'>
			<Carousel
				showStatus={false}
				renderArrowNext={(clickHandler, hasNext) => {
					return (
						hasNext && (
							<button
								className='nav_btn nav_btn_right'
								onClick={clickHandler}
							>
								<svg>
									<use xlinkHref={sprite + '#right'}></use>
								</svg>
							</button>
						)
					);
				}}
				renderArrowPrev={(clickHandler, hasNext) => {
					return (
						hasNext && (
							<button
								onClick={clickHandler}
								className='nav_btn nav_btn_left'
							>
								<svg>
									<use xlinkHref={sprite + '#left'}></use>
								</svg>
							</button>
						)
					);
				}}
				transitionTime={310}
				animationHandler={rotateAnimationHandler}
				swipeable={false}
				showThumbs={false}
			>
				{images.map((URL, index) => (
					<div className='slide'>
						<img
							alt='sample_file'
							src={URL}
							key={index}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}
export default imgcaro;
