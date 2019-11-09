import React from 'react';
import domtoimage from 'dom-to-image';

import profile1 from '../img/profile1.png';
import profile2 from '../img/profile2.jpeg';
import profile3 from '../img/profile3.jpeg';
// import profile4 from '../img/profile4.jpeg';
// import profile5 from '../img/profile5.JPG';
// import profile6 from '../img/profile6.jpg';
import profile7 from '../img/profile7.jpeg';
import profile8 from '../img/profile8.JPG';
import profile9 from '../img/profile9.JPG';
import profile10 from '../img/profile10.jpg';
// import profile11 from '../img/profile11.jpg';
import profile12 from '../img/profile12.jpg';
import profile13 from '../img/profile13.jpg';
import profile14 from '../img/profile14.jpg';
import profile15 from '../img/profile15.jpeg';

class MyTable extends React.Component {
    constructor(props){
        super(props);
    }
    
    getSelected = () => {
        let selected={
            0:[[-1,-1]],
            1:[[-1,-1]],
            2:[[-1,-1]],
            3:[[-1,-1]],
            4:[[-1,-1]]
        };
        for(let row in this.props.myTable){
            for(let item in this.props.myTable[row]){
                if(this.props.myTable[row][item] == 1){
                    selected[row].pop();
                    selected[row].push([row,item]);
                }
            }
        }
        return selected;
    }

    initializeTable = () => {
        let newTable = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ];
        this.props.callBack(newTable);
    }
    
    render(){
        let eventList=[
            [
                {
                    "row":0,
                    "speakerCate":"AI/ML",
                    "titleTop":"Tensorflow 2.0",
                    "titleMiddle":"무엇이 바뀌었을까요?",
                    "titleBottom":"",
                    "speakerImg":profile1,
                    "speakerName":"박해선"
                },
                {
                    "row":0,
                    "speakerCate":"Career",
                    "titleTop":"빠르고 지속적으로",
                    "titleMiddle":"성장하는 방법",
                    "titleBottom":"",
                    "speakerImg":profile2,
                    "speakerName":"Las"
                },
                {
                    "row":0,
                    "speakerCate":"Android",
                    "titleTop":"What is equivalent of",
                    "titleMiddle":"android ~in flutter?",
                    "titleBottom":"",
                    "speakerImg":profile3,
                    "speakerName":"최희재"
                },
                {
                    "row":0,
                    "speakerCate":"Codelab",
                    "titleTop":"Codelab",
                    "titleMiddle":"",
                    "titleBottom":"",
                    "speakerImg":profile1,
                    "speakerName":"박해선"
                }
            ],
            [
                {
                    "row":1,
                    "speakerCate":"Cloud",
                    "titleTop":"GCP 자격증 취득 후",
                    "titleMiddle":"찾아온 기회들",
                    "titleBottom":"",
                    "speakerImg":"",
                    "speakerName":"이동민"
                },
                {
                    "row":1,
                    "speakerCate":"AI/ML",
                    "titleTop":"계륵 같은 딥러닝",
                    "titleMiddle":"실 서비스 적용기",
                    "titleBottom":"",
                    "speakerImg":"",
                    "speakerName":"이형남"
                },
                {
                    "row":1,
                    "speakerCate":"Career",
                    "titleTop":"오픈소스 참여일지",
                    "titleMiddle":"멀고도 험난한",
                    "titleBottom":"숟가락 얹기 여정",
                    "speakerImg":"",
                    "speakerName":"강민철"
                },
                {
                    "row":1,
                    "speakerCate":"Codelab",
                    "titleTop":"Codelab",
                    "titleMiddle":"",
                    "titleBottom":"",
                    "speakerImg":profile1,
                    "speakerName":"Las"
                }
            ],
            [
                {
                    "row":2,
                    "speakerCate":"Web",
                    "titleTop":"웹초보도 할 수 있는",
                    "titleMiddle":"WebVR/AR with aframe",
                    "titleBottom":"",
                    "speakerImg":profile7,
                    "speakerName":"유경수"
                },
                {
                    "row":2,
                    "speakerCate":"Cloud",
                    "titleTop":"용산조립서버에서",
                    "titleMiddle":"클라우드까지",
                    "titleBottom":"",
                    "speakerImg":profile8,
                    "speakerName":"정민석"
                },
                {
                    "row":2,
                    "speakerCate":"AI/ML",
                    "titleTop":"GAN을 활용한, 내 손글씨를 따라쓰는 인공지능",
                    "titleMiddle":"-나 혼자서",
                    "titleBottom":"딥러닝 프로젝트 A to Z",
                    "speakerImg":profile9,
                    "speakerName":"정민정"
                },
                {
                    "row":2,
                    "speakerCate":"Codelab",
                    "titleTop":"Codelab",
                    "titleMiddle":"",
                    "titleBottom":"",
                    "speakerImg":profile1,
                    "speakerName":"박재성"
                }
            ],
            [
                {
                    "row":3,
                    "speakerCate":"Career",
                    "titleTop":"의식적인 연습으로 TDD,",
                    "titleMiddle":"리팩토링, 클린코드",
                    "titleBottom":"연습하기",
                    "speakerImg":profile10,
                    "speakerName":"박재성"
                },
                {
                    "row":3,
                    "speakerCate":"Flutter",
                    "titleTop":"지식in 플러터 앱 개발기",
                    "titleMiddle":"aka 크로스 플랫폼은",
                    "titleBottom":"도전인가 기회인가",
                    "speakerImg":"",
                    "speakerName":"조은"
                },
                {
                    "row":3,
                    "speakerCate":"Career",
                    "titleTop":"만들면서, 자랑하면서",
                    "titleMiddle":"성장하는 개발자",
                    "titleBottom":"",
                    "speakerImg":profile12,
                    "speakerName":"이민석"
                },
                {
                    "row":3,
                    "speakerCate":"Codelab",
                    "titleTop":"Codelab",
                    "titleMiddle":"",
                    "titleBottom":"",
                    "speakerImg":profile1,
                    "speakerName":"Las"
                }
            ],
            [
                {
                    "row":4,
                    "speakerCate":"Cloud",
                    "titleTop":"구글 클라우드 플랫폼으로",
                    "titleMiddle":"오픈 소스 AI 솔루션",
                    "titleBottom":"경험하기",
                    "speakerImg":profile13,
                    "speakerName":"김민현"
                },
                {
                    "row":4,
                    "speakerCate":"AR",
                    "titleTop":"증강현실 개발의 핵심,",
                    "titleMiddle":"ARCore!",
                    "titleBottom":"",
                    "speakerImg":profile14,
                    "speakerName":"박유진"
                },
                {
                    "row":4,
                    "speakerCate":"AI/ML",
                    "titleTop":"Web for Everyone",
                    "titleMiddle":"",
                    "titleBottom":"",
                    "speakerImg":profile15,
                    "speakerName":"장한보람"
                },
                {
                    "row":4,
                    "speakerCate":"Codelab",
                    "titleTop":"Codelab",
                    "titleMiddle":"",
                    "titleBottom":"",
                    "speakerImg":profile1,
                    "speakerName":"Las"
                }
            ],
        ]

        const containerStyle={
            "width":"50%",
            "margin":"auto",
            "padding":"30px",
            "borderRadius":"20px",
            "border":"3px solid lightgray",
            "boxShadow":"0 0 3px 3px lightgray",
        }

        const h1Style={
            "margin":"0px"
        }

        const spanStyle={
            "width":"20%",
            "textAlign":"left",
        }

        const tableStyle={
            "width":"80%",
            "textAlign":"right",
            "fontWeight":"bold"
        }
        
        let pos = this.getSelected();

        return(
            <>
                <br/>
                <hr/>
                <br/>
                <div className="personal-table" style={containerStyle}>
                    <h1 style={h1Style}>내 시간표</h1>
                    {
                        pos[0][0][1] === -1 ? <></> : (
                        <div className="personal-table-row">
                        <span style={spanStyle}>{eventList[pos[0][0][0]][pos[0][0][1]].speakerCate}</span>
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[0][0][0]][pos[0][0][1]].titleTop+" "+eventList[pos[0][0][0]][pos[0][0][1]].titleMiddle + " " + eventList[pos[0][0][0]][pos[0][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[1][0][1] === -1 ? <></> : (
                        <div className="personal-table-row">
                        <span style={spanStyle}>{eventList[pos[1][0][0]][pos[1][0][1]].speakerCate}</span>
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[1][0][0]][pos[1][0][1]].titleTop+" "+eventList[pos[1][0][0]][pos[1][0][1]].titleMiddle + " " + eventList[pos[1][0][0]][pos[1][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[2][0][1] === -1 ? <></> : (
                        <div className="personal-table-row">
                        <span style={spanStyle}>{eventList[pos[2][0][0]][pos[2][0][1]].speakerCate}</span>
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[2][0][0]][pos[2][0][1]].titleTop+" "+eventList[pos[2][0][0]][pos[2][0][1]].titleMiddle + " " + eventList[pos[2][0][0]][pos[2][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[3][0][1] === -1 ? <></> : (
                        <div className="personal-table-row">
                        <span style={spanStyle}>{eventList[pos[3][0][0]][pos[3][0][1]].speakerCate}</span>
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[3][0][0]][pos[3][0][1]].titleTop+" "+eventList[pos[3][0][0]][pos[3][0][1]].titleMiddle + " " + eventList[pos[3][0][0]][pos[3][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[4][0][1] === -1 ? <></> : (
                        <div className="personal-table-row">
                        <span style={spanStyle}>{eventList[pos[4][0][0]][pos[4][0][1]].speakerCate}</span>
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[4][0][0]][pos[4][0][1]].titleTop+" "+eventList[pos[4][0][0]][pos[4][0][1]].titleMiddle + " " + eventList[pos[4][0][0]][pos[4][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    
                </div>

                {/* 초기화 버튼 */}
                <input type="button" className="button-choose" onClick={this.initializeTable} value="시간표 초기화"></input>
            </>
        );
    }
}

export default MyTable;