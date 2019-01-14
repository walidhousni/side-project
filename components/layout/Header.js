import { Component } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { FlexEndContainer, FixedContainer } from '../common/container';
import { MenuButton } from '../common/icons';
import { MenuToggle } from '../common/button';

import Menu from './Menu';

class Header extends Component {
	state = {
		menuActive: false
	};

	constructor(props) {
		super(props);

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState(state => ({ menuActive: !state.menuActive }));
	}

	render() {
		const { menuActive } = this.state;
		const { contrast, menu } = this.props;

		return (
			<FixedContainer className={classNames('header', { dominate: menuActive })} top left primary>
				{menuActive ? (
					<Menu
						className={classNames({
							active: menuActive,
							inactive: !menuActive
						})}
						toggleMenu={this.toggleMenu}
					/>
				) : null}

				<FlexEndContainer>
					<Link href="/">
						<a>
							<img
								className="logo"
								src={contrast ? 'static/imgs/logo-white.png' : 'static/imgs/logo.png'}
								alt="Maltem Africa"
							/>
						</a>
					</Link>
					<MenuToggle className="menu-toggle" menuActive={menuActive} onClick={this.toggleMenu}>
						<MenuButton fill={contrast ? '#fff' : '#eb2f11'} />
					</MenuToggle>
				</FlexEndContainer>
			</FixedContainer>
		);
	}
}

export default Header;
