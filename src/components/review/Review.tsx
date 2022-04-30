import React from 'react';
import './Review.scss';

export interface ReviewState {
  value: string;
}

export class Review extends React.Component<any, ReviewState> {
  constructor(public props: any) {
    super(props);
    this.state = { value: '' };
  }

  handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ value: e.target.value });

  render() {
    return (
      <>
        <div className="font-size-md font-weight-md mb-10">Залишити відгук</div>
        <textarea
          value={this.state.value}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => this.handleValueChange(event)}
          className="w-100 mb-12"
          placeholder="Привіт! Дякую за цікавий контент..."
          rows={4}
        />
        <div className={'d-flex justify-end ' + (this.state.value ? '' : ' visibility-hidden')}>
          <div className="text-underlined font-size-md font-weight-md cursor-pointer">Надіслати</div>
        </div>
      </>
    );
  }
}

export default Review;
