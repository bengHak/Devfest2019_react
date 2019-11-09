import React from 'react';
import DevfestLogo from './img/logo.png';
import Table from './components/Table';

function App() {
  let img_style = {
    width: '1200px',
    height: '600px'
  }
  return (
      <div className="container">
        <div className="section-header">
            <img src={DevfestLogo} alt="DevFest 로고" style={img_style}/>
        </div>

        <div className="title">
            <h1>🏫 DevFest on Campus 2019 이벤트 페이지입니다 🏫</h1>
        </div>
        <Table></Table>
        <div className="footer">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            contact Devfest on Campus 2019
        </div>
      </div>
  );
}

export default App;
