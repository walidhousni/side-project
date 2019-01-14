import React from 'react';

const Plus = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="plus_svg__a" d="M20 11.429h-8.571V20H8.57v-8.571H0V8.57h8.571V0h2.858v8.571H20z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="plus_svg__b" fill="#fff">
				<use xlinkHref="#plus_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#plus_svg__a" />
			<g fill="#000" mask="url(#plus_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#plus_svg__b)" />
		</g>
	</svg>
);

export default Plus;
