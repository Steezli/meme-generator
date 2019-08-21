import React, { PureComponent } from 'react';
import MemeInput from './MemeInput';
import ShowcaseMeme from './ShowcaseMeme';

export default class App extends PureComponent {
  state = {
    head: '',
    imageSrc: '',
    foot: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { head, imageSrc, foot } = this.state;
    return (
      <>
        <MemeInput head={head} imageSrc={imageSrc} foot={foot} handleChange={this.handleChange} />
          <ShowcaseMeme head={head} imageSrc={imageSrc} foot={foot}/>
      </>
    );
  }
}

