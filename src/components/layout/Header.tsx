import React from 'react';
import './Header.scss';

export interface HeaderProps {
  menuOpened: boolean;
}

function Header({ menuOpened }: HeaderProps) {
  return (
    <div className={'header d-flex w-100'}>
      <div className={'header__content d-flex align-end' + (menuOpened ? ' opened' : '')}>
        <div className="header__text">{menuOpened ? 'Hello' : 'Healthy Food Blog'}</div>
        <div className="header__logo">
          <img src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
