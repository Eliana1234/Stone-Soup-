/* eslint-disable max-statements */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable complexity */
import React from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      value: event.target.value
    })
    event.preventDefault()
  }

  render() {
    console.log('STATE', this.state)
    if (this.state.value === '') {
      return (
        <Wrapper>
          <div className="page">
            <div className="heading">
              <div className="alternaburger_logo">
                {/* <h1>AlternaBurger</h1>
                 <p>A search engine for plant based alternatives, even more delicious</p> */}
              </div>
            </div>
            <div className="meatParent">
              <div className="center-text">
                <div className="button-group">
                  <button
                    type="submit"
                    value="Stone Soup Story"
                    onClick={this.handleSubmit}
                  >
                    Stone Soup Story
                  </button>
                  <button
                    type="submit"
                    value="How To Play"
                    onClick={this.handleSubmit}
                  >
                    How To Play
                  </button>
                  <button
                    type="submit"
                    value="Donate Here"
                    onClick={this.handleSubmit}
                  >
                    Donate Here
                  </button>
                </div>
                <div className="vegan">
                  Your goal is to get as many vegetables as possible by catching
                  falling stones and putting them in a soup pot.
                  <br />
                  <br />
                  Instructions:
                  <br />
                  <br />
                  1. Click 'Start Game' to begin
                  <br />
                  2. Use the LEFT and RIGHT arrow keys to move, use the UP arrow
                  key to jump
                  <br />
                  3. Catch the falling stones and put them in the soup pot by
                  pressing the DOWN arrow key
                  <br />
                  4. If a stone hits the ground the game will end
                  {/* <Iframe url={urlObj.buy}
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/> */}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    } else if (this.state.value === 'Stone Soup Story') {
      return (
        <Wrapper>
          <div className="page">
            <div className="heading">
              <div className="alternaburger_logo">
                {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
              </div>
            </div>
            <div className="meatParent">
              <div className="center-text">
                <div className="button-group">
                  <button
                    type="submit"
                    value="Stone Soup Story"
                    onClick={this.handleSubmit}
                  >
                    Stone Soup Story
                  </button>
                  <button
                    type="submit"
                    value="How To Play"
                    onClick={this.handleSubmit}
                  >
                    How To Play
                  </button>
                  <button
                    type="submit"
                    value="Donate Here"
                    onClick={this.handleSubmit}
                  >
                    Donate Here
                  </button>
                </div>
                <div className="vegan">
                  <Iframe
                    url="https://en.wikipedia.org/wiki/Stone_Soup"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    } else if (this.state.value === 'How To Play') {
      return (
        <Wrapper>
          <div className="page">
            <div className="heading">
              <div className="alternaburger_logo">
                {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
              </div>
            </div>
            <div className="meatParent">
              <div className="center-text">
                <div className="button-group">
                  <button
                    type="submit"
                    value="Stone Soup Story"
                    onClick={this.handleSubmit}
                  >
                    Stone Soup Story
                  </button>
                  <button
                    type="submit"
                    value="How To Play"
                    onClick={this.handleSubmit}
                  >
                    How To Play
                  </button>
                  <button
                    type="submit"
                    value="Donate Here"
                    onClick={this.handleSubmit}
                  >
                    Donate Here
                  </button>
                </div>
                <div className="vegan">
                  Your goal is to get as many vegetables as possible by catching
                  falling stones and putting them in a soup pot.
                  <br />
                  <br />
                  Instructions:
                  <br />
                  <br />
                  1. Click 'Start Game' to begin
                  <br />
                  2. Use the LEFT and RIGHT arrow keys to move, use the UP arrow
                  key to jump
                  <br />
                  3. Catch the falling stones and put them in the soup pot by
                  pressing the DOWN arrow key
                  <br />
                  4. If a stone hits the ground the game will end
                  {/* <Iframe url={urlObj.buy}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/> */}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    } else if (this.state.value === 'Donate Here') {
      return (
        <Wrapper>
          <div className="page">
            <div className="heading">
              <div className="alternaburger_logo">
                {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
              </div>
            </div>
            <div className="meatParent">
              <div className="center-text">
                <div className="button-group">
                  <button
                    type="submit"
                    value="Stone Soup Story"
                    onClick={this.handleSubmit}
                  >
                    Stone Soup Story
                  </button>
                  <button
                    type="submit"
                    value="How To Play"
                    onClick={this.handleSubmit}
                  >
                    How To Play
                  </button>
                  <button
                    type="submit"
                    value="Donate Here"
                    onClick={this.handleSubmit}
                  >
                    Donate Here
                  </button>
                </div>
                <div className="vegan">
                  If you enjoy the stone soup game, donate to an organization
                  fighting food insecurity here:
                  {/* <Iframe url={urlObj.make}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/> */}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    }
  }
}

const Wrapper = styled.div`

.page {
  background-color: #282c34;
}

.heading {
  color: white;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.center-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 10px 900px 10px;
}

.meatParent .thisPageImage img:hover {
  animation-name: pulse;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.alternaburger_logo {
  align-self: center;
}

// img:hover {
//   animation-duration: 20s;
//   animation-name: bounceIn;
// }

// .burger {
//   animation-duration: 20s;
//   animation-name: bounceIn;
// }

// @media (prefers-reduced-motion: no-preference) {
//   .burger {
//     animation: App-logo-spin infinite 20s linear;
//   }
// }

.button-group {
    display: flex;
    justify-content: space-between;
  }

  button {
    font-family: 'Helvetica Neue';
    font-weight: 200;
    font-size: 25px;
    background-color: rgba(42, 187, 155, 1);
    color: black;
    margin: 0px 10px 0px 10px;
    width: 100px;
    border-radius: 10%;
  }

  .vegan {
    font-family: 'Helvetica Neue';
    font-weight: 200;
    font-size: 25px;
    color: black;
    // border-radius: 10%;
    width: 450px;
    height: 450px;
    border: 1px solid white;
    background-color: white;
}


button:hover {
    background-color: #006400
}


.meatParent{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 20px 20px 20px;
}

.meatParent .thisPageImage{
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .meatParent .thisPageImage img{
    width: 100%;
    height: auto;
  }

// .meatParent div{
//   width: 250px;
//   height: 250px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }



.question {
  font-family: 'Helvetica Neue';
  font-weight: 400;
  font-size: 50px;
  color: white;
  position: absolute;
  self-align: center;
  text-align: center;
  // background-color:
  // background: rgba(255,165,0,0.75);
  width: 75%;
  top:25%;
  transform:translateY(-50%);
  margin: 0;


  // background-color: #EEEEEE;
  // position: absolute;
  // align-self: center;
  // z-index:100;
}
}
`

export default Header
