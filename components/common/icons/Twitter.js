import React from 'react';

const Twitter = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path
				id="twitter_svg__a"
				d="M20 3.894a8.653 8.653 0 0 1-2.363.638A4.026 4.026 0 0 0 19.441 2.3a8.272 8.272 0 0 1-2.6.978A4.139 4.139 0 0 0 13.846 2C11.576 2 9.75 3.814 9.75 6.038c0 .32.027.628.095.92a11.666 11.666 0 0 1-8.451-4.222 4.017 4.017 0 0 0-.562 2.04 4.03 4.03 0 0 0 1.821 3.356A4.098 4.098 0 0 1 .8 7.634v.045c0 1.962 1.421 3.591 3.285 3.967-.334.09-.697.132-1.075.132a3.68 3.68 0 0 1-.776-.068 4.132 4.132 0 0 0 3.831 2.812 8.32 8.32 0 0 1-5.084 1.722A7.73 7.73 0 0 1 0 16.188 11.674 11.674 0 0 0 6.29 18c7.545 0 11.67-6.154 11.67-11.488 0-.178-.006-.35-.015-.522A8.111 8.111 0 0 0 20 3.894z"
			/>
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="twitter_svg__b" fill="#fff">
				<use xlinkHref="#twitter_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#twitter_svg__a" />
			<g fill="#FFF" mask="url(#twitter_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#twitter_svg__b)" />
		</g>
	</svg>
);

export default Twitter;
