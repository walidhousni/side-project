import React from 'react';

const MenuToggle = props => {
	const { fill, width, height } = props;

	return (
		<svg width={width || 20} height={height || 20} {...props}>
			<defs>
				<path id="menu_svg__a" d="M0 5h20v2H0V5zm0 7.995h20v2H0v-2z" />
			</defs>
			<g fill="none" fillRule="evenodd">
				<mask id="menu_svg__b" fill="#fff">
					<use xlinkHref="#menu_svg__a" />
				</mask>
				<use fill={fill} xlinkHref="#menu_svg__a" />
				<g fill={fill} mask="url(#menu_svg__b)">
					<path d="M0 0h20v20H0z" />
				</g>
				<path d="M0 0h20v20H0z" mask="url(#menu_svg__b)" />
			</g>
		</svg>
	);
};

export default MenuToggle;
