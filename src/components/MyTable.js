import React from 'react';
import htmlToImage from 'html-to-image';


import profile1 from '../img/profile1.png';
import profile2 from '../img/profile2.jpeg';
import profile3 from '../img/profile3.jpeg';
import profile4 from '../img/profile4.jpg';
import profile5 from '../img/profile5.png';
// import profile6 from '../img/profile6.jpg';
import profile7 from '../img/profile7.jpeg';
import profile8_ from '../img/profile8_.jpg';
import profile9 from '../img/profile9.jpg';
import profile10 from '../img/profile10.jpg';
// import profile11 from '../img/profile11.jpg';
import profile12 from '../img/profile12.jpg';
import profile13 from '../img/profile13.jpg';
import profile14 from '../img/profile14.jpg';
import profile15 from '../img/profile15.jpeg';
import devfestLogo from '../img/devfestLogo.png';

class MyTable extends React.Component {
    constructor(props){
        super(props);
        this.tableImage = React.createRef();
        this.tableImageContainer = React.createRef();
        this.state = {
            name:"나"
        }
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

    getTrack=(col)=>{
        let spanStyle={
            "width":"20%",
            "textAlign":"left",
            "borderRadius":"5px",
            "color":"white",
            "backgroundColor":""
        }
        console.log(col);
        let trackBlock;
        switch(col){
            case "0":
                spanStyle["backgroundColor"]="#4285F4";
                trackBlock = <span style={spanStyle}>&nbsp;Track A&nbsp;</span>;
                break;
            case "1":
                spanStyle["backgroundColor"]="#34AB53";
                trackBlock = <span style={spanStyle}>&nbsp;Track B&nbsp;</span>;
                break;
            case "2":
                spanStyle["backgroundColor"]="#FBBC05";
                trackBlock = <span style={spanStyle}>&nbsp;Track C&nbsp;</span>;
                break;
            case "3":
                spanStyle["backgroundColor"]="#EA4335";
                trackBlock = <span style={spanStyle}>&nbsp;CodeLab&nbsp;</span>;
                break;
        }
        return trackBlock;
    }

    filter (node) {
        return (node.tagName !== 'i');
    }

    drawTableImage=()=>{
        let node = document.getElementById('tableImage');
        htmlToImage.toSvgDataURL(node, {filter:this.filter})
        .then(function (dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            if(document.getElementById('imageContainer').childElementCount > 0){
                let childNode = document.getElementById('imageContainer').childNodes[0];
                document.getElementById('imageContainer').removeChild(childNode);
            }
            document.getElementById('imageContainer').appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
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

    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
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
                    "speakerImg":profile4,
                    "speakerName":"이동민"
                },
                {
                    "row":1,
                    "speakerCate":"AI/ML",
                    "titleTop":"계륵 같은 딥러닝",
                    "titleMiddle":"실 서비스 적용기",
                    "titleBottom":"",
                    "speakerImg":profile5,
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
                    "speakerImg":profile8_,
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

        let container;
        if (document.documentElement.clientWidth > 900) {
            container = {width: '50%', margin: 'auto'};
        } else {
            container = {width: '95%', margin: 'auto'};
        }

        const tableContainerStyle={
            "width":"100%",
            "margin":"auto",
            "padding":"0",
            "borderRadius":"5px",
            "border":"3px solid #4285F4",
            // "boxShadow":"0 0 3px 3px skyblue",
        }

        const h1Style={
            "margin":"0px",
            "padding":"10px",
            "backgroundColor":"#4285F4",
            "color":"white",
        }

        const tableStyle={
            "width":"75%",
            "textAlign":"right",
            fontSize: '20px',
            "fontWeight":"bold",
        }

        const tableRowStyle={
            "textAlign":"left",
            "padding":"10px",
            margin: 'auto 25px',
            // "backgroundColor":"#f5f2f2"
            "backgroundColor":"white",
        }

        const tableRowStyle_empty={
            "textAlign":"center",
            "padding":"10px",
            margin: 'auto 25px',
            // "backgroundColor":"#f5f2f2"
            "backgroundColor":"white",
        }

        const initButtonStyle={
            "margin":"20px",
            "fontSize":"15px"
        }
        const inputStyle={
            width: '80%',
            padding: '12px 20px',
            margin: '0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            textAlign: 'center',
            fontSize: '20px'
        }
        
        const logoStyle = {
            width:'60%',
            margin: '20px 0',
        }

        let pos = this.getSelected();

        let track1 = this.getTrack(pos[0][0][1]);
        let track2 = this.getTrack(pos[1][0][1]);
        let track3 = this.getTrack(pos[2][0][1]);
        let track4 = this.getTrack(pos[3][0][1]);
        let track5 = this.getTrack(pos[4][0][1]);
        


        return(
            <>
                <br/>
                <hr/>
                <br/>
                <div style={container}>
                <h4>✏️ 이름(별명)을 입력해주세요</h4>
                <input type="text" placeholder="이름을 입력해주세요!" style={inputStyle} onChange={this.handleChange}></input>
                <br/>
                <br/>
                <br/>
                <div id="tableImage" className="personal-table" style={tableContainerStyle} ref={this.tableImage}>
                    <h1 style={h1Style}>{this.state.name === '' ? '나' : this.state.name}의 시간표</h1>
                    {
                        pos[0][0][1] === -1 ?
                        <><div className="personal-table-row" style={tableRowStyle_empty}>
                        <span style={tableStyle}>&nbsp;🚫 공 강 🚫</span>
                        </div></> 
                        :
                        (
                        <div className="personal-table-row" style={tableRowStyle}>
                        {track1}
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[0][0][0]][pos[0][0][1]].titleTop+" "+eventList[pos[0][0][0]][pos[0][0][1]].titleMiddle + " " + eventList[pos[0][0][0]][pos[0][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[1][0][1] === -1 ? <><div className="personal-table-row" style={tableRowStyle_empty}>
                        <span style={tableStyle}>&nbsp;🚫 공 강 🚫</span>
                        </div></> : (
                        <div className="personal-table-row" style={tableRowStyle}>
                        {track2}
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[1][0][0]][pos[1][0][1]].titleTop+" "+eventList[pos[1][0][0]][pos[1][0][1]].titleMiddle + " " + eventList[pos[1][0][0]][pos[1][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[2][0][1] === -1 ?
                        <><div className="personal-table-row" style={tableRowStyle_empty}>
                        <span style={tableStyle}>&nbsp;🚫 공 강 🚫</span>
                        </div></>
                        :
                        (
                        <div className="personal-table-row" style={tableRowStyle}>
                        {track3}
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[2][0][0]][pos[2][0][1]].titleTop+" "+eventList[pos[2][0][0]][pos[2][0][1]].titleMiddle + " " + eventList[pos[2][0][0]][pos[2][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[3][0][1] === -1 ? <><div className="personal-table-row" style={tableRowStyle_empty}>
                        <span style={tableStyle}>&nbsp;🚫 공 강 🚫</span>
                        </div></> : (
                        <div className="personal-table-row" style={tableRowStyle}>
                        {track4}
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[3][0][0]][pos[3][0][1]].titleTop+" "+eventList[pos[3][0][0]][pos[3][0][1]].titleMiddle + " " + eventList[pos[3][0][0]][pos[3][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    {
                        pos[4][0][1] === -1 ? <><div className="personal-table-row" style={tableRowStyle_empty}>
                        <span style={tableStyle}>&nbsp;🚫 공 강 🚫</span>
                        </div></> : (
                        <div className="personal-table-row" style={tableRowStyle}>
                        {track5}
                        &nbsp;
                        <span style={tableStyle}>{eventList[pos[4][0][0]][pos[4][0][1]].titleTop+" "+eventList[pos[4][0][0]][pos[4][0][1]].titleMiddle + " " + eventList[pos[4][0][0]][pos[4][0][1]].titleBottom}</span>
                        </div>
                        )
                    }
                    <div>
                        <img src={devfestLogo} style={logoStyle}/>
                    </div>
                </div>
                </div>
                {/* 시간표 출력 버튼 */}
                {/* <button type="button" className="button-choose" onClick={this.drawTableImage} value="시간표 출력" style={initButtonStyle}>시간표 출력</button> */}
                {/* 초기화 버튼 */}
                {/* <h1>출력 된 시간표</h1> */}
                {/* <div id="imageContainer" className="personal-table" style={container} ref={this.tableImageContainer}></div> */}
                <br/>
                <h4>생성된 시간표 캡쳐해서<br/>저장해주세요!</h4>
                <button type="button" className="button-choose" onClick={this.initializeTable} value="시간표 초기화" style={initButtonStyle}>시간표 초기화</button>
            </>
        );
    }
}

export default MyTable;