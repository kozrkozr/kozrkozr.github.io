import React from 'react';
import './MenuToggle.scss';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/close-icon.svg';

export interface MenuToggleProps {
  menuOpenedHandler: (opened: boolean) => void;
}

export interface MenuToggleState {
  isOpened: boolean;
}

class MenuToggle extends React.Component<MenuToggleProps, MenuToggleState> {
  constructor(public props: MenuToggleProps) {
    super(props);
    this.state = { isOpened: false };
  }

  render() {
    return (
      <div className="menu-toggle">
        <div
          onClick={() => {
            const newState = !this.state.isOpened;
            this.setState({ isOpened: newState });
            this.props.menuOpenedHandler(newState);
          }}
        >
          {this.state.isOpened ? <CloseMenuIcon /> : <MenuIcon />}
        </div>
      </div>
    );
  }
}

export default MenuToggle;
