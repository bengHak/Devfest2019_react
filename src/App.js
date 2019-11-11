import React from 'react';
import DevfestLogo from './img/logo.png';
import Table from './components/Table';

function App() {
  return (
      <div className="container">
        <div className="section-header">
            <img src={DevfestLogo} alt="DevFest 로고"/>
        </div>

        <div className="title">
            <h1>🏫 DevFest on Campus 2019 나만의 시간표 짜기! 🏫</h1>
        </div>
        <div className="event-method">
            <h1>📌 방법 1. 아래의 시간표를 확인하고 원하는 세션을 클릭합니다.</h1>
            <h1>📌 방법 2. 직접 생성된 나만의 DevFest on Campus 시간표를 확인합니다.</h1>
            <h1>📌 방법 3. 생성한 시간표를 저장 또는 SNS 공유 후 Staff 에게 보여주면 완료!</h1>
        </div>
        <div class="event-method">
            <h1>💗 유의사항: 트랙은 시간대별로 하나만 선택 가능합니다!</h1>
        </div>
        <Table></Table>
        <div className="footer">
        Contact Devfest on Campus 2019 at <a href="mailto:devfest-campus-2019@googlegroups.com">DevFestOnCampus2019</a>
        </div>
      </div>
  );
}

export default App;
