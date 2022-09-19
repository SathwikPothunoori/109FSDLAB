import React from 'react'
import logo from './logo.svg';

function Initial() {
  return (
    <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <p>Simple react app showcasing the usage of props and routing technique</p>
              <h1 style={{color:"red"}}>Divided in to 2 routes Check below</h1>
              <ol>
                <li>/tour</li>
                <li>/hotel</li>
              </ol>

            </header>
          </div>
  )
}

export default Initial