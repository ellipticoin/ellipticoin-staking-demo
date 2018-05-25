import web3 from "./web3";
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EllipitcoinStakingContract from './contracts/EllipitcoinStakingContract';
import { ListGroup as List, ListGroupItem as Item } from 'reactstrap';
const startingBlock = 2631907;

class App extends Component {
  constructor() {
    super();
    this.state = {blocks: []};
  }

  componentDidMount() {
    web3.eth.subscribe('newBlockHeaders')
      .on("data", async (newBlockHeaders) => {
        let winner = await EllipitcoinStakingContract.methods.winner().call();
        // console.log(`${winner} mined block ${newBlockHeaders.number - startingBlock}`);
        this.setState({
          blocks: [
            {
              number: newBlockHeaders.number - startingBlock,
              winner,
            },
            ...this.state.blocks,
          ]
        })
      });
    }

  render() {
    return (
      <div className="wrapper">
        <main>
          <List>
            <ReactCSSTransitionGroup
            transitionName="slide-down"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={0}
            >
            {this.state.blocks.map(({winner, number}) =>
              <Item key={number}>{winner} mined block {number}</Item>
            )}
            </ReactCSSTransitionGroup>
          </List>
        </main>
      </div>
    )
  }
}

export default App;
