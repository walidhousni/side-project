import React from 'react';

const QuizAgile = props => {
	const { fill = '#eb2f11', width = 40, height = 40 } = props;

	return (
		<svg width={width} height={height} {...props}>
			<defs>
				<path
					id="prefix__a"
					d="M20 8.314c6.545 0 11.87 5.242 11.87 11.687 0 6.445-5.325 11.686-11.87 11.686-6.545 0-11.87-5.241-11.87-11.686S13.455 8.314 20 8.314zM16.667 23.81v-7.876c0-.725-.598-1.313-1.334-1.313-.736 0-1.333.588-1.333 1.313v7.876c0 .725.597 1.313 1.333 1.313s1.334-.588 1.334-1.313zm9.778 0v-7.876c0-.725-.598-1.313-1.334-1.313-.736 0-1.333.588-1.333 1.313v7.876c0 .725.597 1.313 1.333 1.313s1.334-.588 1.334-1.313zM36 0c2.205 0 4 1.766 4 3.938v32.124C40 38.232 38.205 40 36 40H4c-2.205 0-4-1.767-4-3.938V3.938C0 1.768 1.795 0 4 0h32zM20 34.312c8.016 0 14.537-6.42 14.537-14.312 0-7.892-6.521-14.312-14.537-14.312-8.016 0-14.537 6.42-14.537 14.312 0 7.892 6.521 14.312 14.537 14.312z"
				/>
			</defs>
			<g fill="none" fillRule="evenodd">
				<mask id="prefix__b" fill="#fff">
					<use xlinkHref="#prefix__a" />
				</mask>
				<use fill={fill} fillRule="nonzero" xlinkHref="#prefix__a" />
				<g fill={fill} mask="url(#prefix__b)">
					<path d="M0 0h40v40H0z" />
				</g>
				<path d="M0 0h40v40H0z" mask="url(#prefix__b)" />
			</g>
		</svg>
	);
};

export default QuizAgile;
