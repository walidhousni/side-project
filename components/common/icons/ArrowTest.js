import React from 'react';

const ArrowTest = props => (
	<svg width={20} height={20} {...props}>
		<title>54E2DE05-3D44-4F6D-A7C7-9AAB0F6CA48E</title>
		<defs>
			<path id="prefix__a" d="M3.88 5L10 11.18 16.12 5 18 6.903 10 15 2 6.903z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="prefix__b" fill="#fff">
				<use xlinkHref="#prefix__a" />
			</mask>
			<use fill="#000" xlinkHref="#prefix__a" />
			<g mask="url(#prefix__b)" fill="#EB2F11">
				<path d="M0 0h20v20H0z" />
			</g>
			<path mask="url(#prefix__b)" transform="rotate(90 10 10)" d="M0 0h20v20H0z" />
		</g>
	</svg>
);

export default ArrowTest;
