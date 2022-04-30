import React from 'react';
import './DynamicHeader.scss';
import NavButton, { NavButtonDirection } from '../nav-button/NavButton';
import { useNavigate } from 'react-router-dom';

export interface DynamicHeaderProps {
  title: string;
  navigateUrl?: string;
}

function DynamicHeader({ title, navigateUrl }: DynamicHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="dynamic-header">
      <div className="dynamic-header__title p-12 d-flex justify-end h-100 align-end">
        <div className="font-size-md font-weight-md">{title}</div>
        <img className="ml-12" src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="logo" />
      </div>
      <div className="dynamic-header__btn py-16 px-24">
        <NavButton direction={NavButtonDirection.BACK} clickHandler={() => navigate(navigateUrl || '/')} />
      </div>
    </div>
  );
}

export default DynamicHeader;
