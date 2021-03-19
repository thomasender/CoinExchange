import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;

`;

export default class Coinlist extends Component {
    render() {
      const balance = this.props.showBalance ? <th>Balance</th> : null;
        return (
          
               <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
              {balance}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.coinData.map( ({key, name, ticker, balance, price}) =>
              <Coin key={key} 
                    handleRefresh={this.props.handleRefresh}
                    name={name} 
                    ticker={ticker} 
                    balance={balance}
                    showBalance={this.props.showBalance}
                    price={price}/>  
              )
            }
          </tbody>
        </Table> 
     
        )
    }
}