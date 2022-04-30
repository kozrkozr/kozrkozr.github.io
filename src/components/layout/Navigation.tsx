import React from 'react';
import './Navigation.scss';
import { useNavigate } from 'react-router-dom';

export interface NavigationItem {
  url: string;
  label: string;
}

export interface NavigationProps {
  items: NavigationItem[];
}

function Navigation({ items }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      {items.map((item, index) => (
        <div key={index} className="navigation__item d-flex align-center justify-center" onClick={() => navigate(item.url)}>
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Navigation;
