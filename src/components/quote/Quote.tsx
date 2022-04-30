import React from 'react';
import './Quote.scss';

interface QuoteProps {
  children: JSX.Element;
}

function Quote({ children }: QuoteProps) {
  return (
    <div className="quote">
      <img src={`${process.env.PUBLIC_URL}/icons/quotes.svg`} className="quote__icon" />
      <div className="quote__text font-size-md font-style-italic">{children}</div>
    </div>
  );
}

export default Quote;
