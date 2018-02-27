import React, { Component } from 'react'
import { Icon, Layout } from 'antd'
const { Header } = Layout

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.onToggle = this.props.onToggle
        this.collapsed = this.props.collapsed
    }

    onToggleHandler() {
        this.onToggle()
    }

    render() {
        return (
            <Header>
                <Icon
                    className="trigger"
                    type={this.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={() => {this.onToggleHandler()}}
                />
            </Header>
        )
    }
}

export default Navbar;