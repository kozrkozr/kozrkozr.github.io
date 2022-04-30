import React from 'react';
import './NavButton.scss';

export enum NavButtonDirection {
  FORWARD = 'FORWARD',
  BACK = 'BACK',
  UP = 'UP'
}

export interface NavButtonProps {
  direction: NavButtonDirection;
  disabled?: boolean;
  clickHandler?: () => void;
}

const NavButtonArrow: Record<NavButtonDirection, string> = {
  [NavButtonDirection.FORWARD]: `${process.env.PUBLIC_URL}/icons/arrow-forward.svg`,
  [NavButtonDirection.BACK]: `${process.env.PUBLIC_URL}/icons/arrow-back.svg`,
  [NavButtonDirection.UP]: `${process.env.PUBLIC_URL}/icons/arrow-up.svg`
};

function NavButton({ direction, disabled, clickHandler }: NavButtonProps) {
  return (
    <button className={'nav-btn ' + (disabled ? 'disabled' : '')} onClick={() => clickHandler?.()}>
      <img src={NavButtonArrow[direction]} alt="nav-arrow-icon" />
    </button>
  );
}

export default NavButton;
