import React from "react"
import PropTypes from "prop-types"

import { Menu, Image } from 'semantic-ui-react'

class MainMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Menu fixed="top">
			<Menu.Item>
			<Image size="mini" src="https://react.semantic-ui.com/logo.png" />
			</Menu.Item>

			<Menu.Item as="a" content="UnThesis" key="home" />

			<Menu.Menu position="right">

			<Menu.Item as="a" content="Logout" key="logout" onClick={ this.props.logout } />

			</Menu.Menu>
			</Menu>
			);
	}
}

export default MainMenu
