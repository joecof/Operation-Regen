import React, { Component } from 'react'


class LeaderBoard extends Component {
  
  render() {
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th className="points"><span >High Score<span ></span></span></th>
                </tr>
              </thead>
            
            </table>
          </div>
        </div>
      </div>
    )
  }
}




export default LeaderBoard; 