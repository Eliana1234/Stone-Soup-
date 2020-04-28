/* eslint-disable complexity */
/* eslint-disable react/no-unused-state */
import React from 'react'
// import {connect} from 'react-redux'
import Popup from './Popup'
import styled from 'styled-components'

// import 'react-day-picker/lib/style.css';

const defaultState = {
  showPopup: false
}

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.togglePopup = this.togglePopup.bind(this)

    this.state = defaultState
  }

  togglePopup() {
    let currPopupState = this.state.showPopup
    this.setState({
      showPopup: !currPopupState
    })
  }

  render() {
    const InstructionOne =
      '1. Use the LEFT and RIGHT arrow keys to run, use the UP arrow key to jump'
    const InstructionTwo =
      '2. Catch the falling stones and put them in the pot by pressing the DOWN arrow key'
    const InstructionThree =
      '3. Each stone you put in the pot will make the vegetables multiply '
    const InstructionFour =
      "4. Try to get as many vegetables as possible by making 'stone soup', good luck!"
    const AboutStory = 'Text coming soon'
    const Donate = 'Information cmoing soon'
    return (
      <div>
        <Wrapper>
          <div className="parentContainer">
            <div className="title">Stone Soup Game</div>
            <div className="popblock">
              <button
                type="submit"
                className="about"
                onClick={this.togglePopup.bind(this)}
              >
                {' '}
                Instructions
              </button>
              <div>
                {this.state.showPopup ? (
                  <Popup
                    text1={InstructionOne}
                    text2={InstructionTwo}
                    text3={InstructionThree}
                    text4={InstructionFour}
                    closePopup={this.togglePopup.bind(this)}
                  />
                ) : null}
              </div>
            </div>
            <div />
            <div className="popblock">
              <button
                type="submit"
                className="about"
                onClick={this.togglePopup.bind(this)}
              >
                {' '}
                About
              </button>
              <div>
                {this.state.showPopup ? (
                  <Popup
                    text1={AboutStory}
                    closePopup={this.togglePopup.bind(this)}
                  />
                ) : null}
              </div>
            </div>
            <div />
            <div className="popblock">
              <button
                type="submit"
                className="about"
                onClick={this.togglePopup.bind(this)}
              >
                {' '}
                Donate
              </button>
              <div>
                {this.state.showPopup ? (
                  <Popup
                    text1={Donate}
                    closePopup={this.togglePopup.bind(this)}
                  />
                ) : null}
              </div>
            </div>
            <div />
          </div>
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.div`
  .popblock {
    display: flex;
  }
  .title {
    font-family: 'Helvetica Neue';
    color: red;
    font-weight: 200;
    font-size: 40px;
  }
  .parentContainer {
    position: relative;
  }
  .about {
    font-family: 'Helvetica Neue';
    font-weight: 200;
    font-size: 10px;
    background-color: white;
    color: black;
    margin: 0px 10px 0px 10px;
    width: 70px;
    border-radius: 10%;
  }
  button:hover {
    background-color: yellow;
  }
`

export default Header
