import React from 'react';

const More = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path
				id="more_svg__a"
				d="M2.5 8A2.507 2.507 0 0 0 0 10.5C0 11.875 1.125 13 2.5 13S5 11.875 5 10.5 3.875 8 2.5 8zm15 0a2.507 2.507 0 0 0-2.5 2.5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5S18.875 8 17.5 8zM10 8a2.507 2.507 0 0 0-2.5 2.5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5S11.375 8 10 8z"
			/>
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="more_svg__b" fill="#fff">
				<use xlinkHref="#more_svg__a" />
			</mask>
			<use fill="#000" fillRule="nonzero" xlinkHref="#more_svg__a" />
			<g fill="#000" mask="url(#more_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
		</g>
	</svg>
);

export default More;
