import React from 'react';

const ArrowForward = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="arrow-forward_svg__a" d="M10 0L8.238 1.762l6.975 6.988H0v2.5h15.213l-6.975 6.988L10 20l10-10z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="arrow-forward_svg__b" fill="#fff">
				<use xlinkHref="#arrow-forward_svg__a" />
			</mask>
			<use fill="#EB2F11" xlinkHref="#arrow-forward_svg__a" />
			<g fill="#EB2F11" mask="url(#arrow-forward_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#arrow-forward_svg__b)" />
		</g>
	</svg>
);

export default ArrowForward;
