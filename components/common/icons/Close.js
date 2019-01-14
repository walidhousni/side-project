import React from 'react';

const Close = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="close_svg__a" d="M20 2l-2-2-8 8-8-8-2 2 8 8-8 8 2 2 8-8 8 8 2-2-8-8z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="close_svg__b" fill="#fff">
				<use xlinkHref="#close_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#close_svg__a" />
			<g fill="#EB2F11" mask="url(#close_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#close_svg__b)" />
		</g>
	</svg>
);

export default Close;
