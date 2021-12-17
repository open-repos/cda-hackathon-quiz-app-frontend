import React from 'react';
import { getLocalStorageItem } from '../utils/localstorage';

export default class RankingTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  renderRows() {
    let rankingData = getLocalStorageItem("rankingInfo")
    console.log(rankingData)
    if (rankingData){
      return rankingData.map(function(o) {
        return <tr key={"item-" + (rankingData.indexOf(o) + 1)}>
                  <th scope="row">{rankingData.indexOf(o) + 1}</th>
                  <td>{o.nickname}</td>
                  <td>{o.score || '0'} pts</td>
                  <td>{o.count}</td>
                </tr>
      })
    }
    
  }

  render() {
    return ( 
      <table>
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
            <th scope="col">Games</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}