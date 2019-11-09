import React from 'react';
import MyTable from './MyTable';

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

class Table extends React.Component {
    state = {
        "myTable":{
            "session1":"",
            "session2":"",
            "session3":"",
            "session4":"",
            "session5":"",
        }
    }

    myTableCallBack = (data) => {
        this.setState({
            "myTable": data
        });
    }

    render() {
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
        return (
            <>
                <div className="timeline-all">
                    <div className="timeline-row">
                        <div className="spec-time">
                            <span className="start-time">
                                시간
                    </span>
                        </div>
                        <div className="spec-item-first">
                            <div className="item-row">
                                <h1 className="item-row-topic">Track A</h1>
                            </div>
                            <div className="item-row">
                                <h1 className="item-row-topic">Track B</h1>
                            </div>
                            <div className="item-row">
                                <h1 className="item-row-topic">Track C</h1>
                            </div>
                            <div className="item-row">
                                <h1 className="item-row-topic">Codelab</h1>
                            </div>
                        </div>
                    </div>
                    <TableRow
                        flag="0"
                        start_time="12:00"
                        end_time="13:00"
                        events="등록 확인"
                    />
                    <TableRow
                        flag="0"
                        start_time="13:00"
                        end_time="13:15"
                        events="행사 Opening"
                    />
                    <TableRow
                        myTable={this.state["myTable"]}
                        callBack={this.myTableCallBack}
                        flag="1"
                        start_time="13:25"
                        end_time="14:05"
                        events={eventList[0]}
                    />
                    <TableRow
                        myTable={this.state["myTable"]}
                        callBack={this.myTableCallBack}
                        flag="1"
                        start_time="14:15"
                        end_time="14:55"
                        events={eventList[1]}
                    />
                    <TableRow
                        myTable={this.state["myTable"]}
                        callBack={this.myTableCallBack}
                        flag="1"
                        start_time="15:10"
                        end_time="15:50"
                        events={eventList[2]}
                    />
                    <TableRow
                        myTable={this.state["myTable"]}
                        callBack={this.myTableCallBack}
                        flag="1"
                        start_time="16:00"
                        end_time="16:40"
                        events={eventList[3]}
                    />
                    <TableRow
                        myTable={this.state["myTable"]}
                        callBack={this.myTableCallBack}
                        flag="1"
                        start_time="16:50"
                        end_time="17:30"
                        events={eventList[4]}
                    />
                </div>
                <MyTable contents={this.state["myTable"]}/>
                {console.log(this.state["myTable"])}
            </>
        );
    }
}

class TableRow extends React.Component {
    render(){
        let events = [];
        let row;
        if(this.props.flag === "0"){
            row = <div className="spec-item">
                <div className="item-row">
                    <h1 className="item-row-topic">{this.props.events}</h1>
                </div>
            </div>
        } else {
            let eventsFromProps = this.props.events;
            for(let item in this.props.events){
                events.push(
                    <TableItem 
                        myTable={this.props.myTable}
                        callBack={this.props.callBack}
                        row={eventsFromProps[item].row}
                        speakerCate={eventsFromProps[item].speakerCate}
                        titleTop={eventsFromProps[item].titleTop}
                        titleMiddle={eventsFromProps[item].titleMiddle}
                        titleBottom={eventsFromProps[item].titleBottom}
                        speakerImg={eventsFromProps[item].speakerImg}
                        speakerName={eventsFromProps[item].speakerName}
                    />
                );
                row = <div className="spec-card">
                {events.map((item)=>{
                    return item;
                })}
                </div>
            }
        }

        return(
            <div className="timeline-row">
                <div className="spec-time">
                    <div className="start-time">{this.props.start_time}</div>
                    <div>~</div>
                    <div className="start-time">{this.props.end_time}</div>
                </div>
                {row}
            </div>
        );
    }
}

class TableItem extends React.Component {

    pickSession = () => {
        let myTable = this.props.myTable
        switch(this.props.row) {
            case 0:{
                myTable["session1"] = this.props;
                break;
            }
            case 1:{
                myTable["session2"] = this.props;
                break;
            }
            case 2:{
                myTable["session3"] = this.props;
                break;
            }
            case 3:{
                myTable["session4"] = this.props;
                break;
            }
            case 4:{
                myTable["session5"] = this.props;
                break;
            }
            default:
                break;
        }
        this.props.callBack(myTable);
    }

    render(){
        let cateStyle;
        let imgStyle;
        if(this.props.speakerCate === "AI/ML"){
            cateStyle = {"backgroundColor": "#FAD2CF"}
        } else if(this.props.speakerCate === "Web"){
            cateStyle = {"backgroundColor": "#F29900"}
        } else if(this.props.speakerCate === "Cloud"){
            cateStyle = {"backgroundColor": "#CEEAD6"}
        } else if(this.props.speakerCate === "Android"){
            cateStyle = {"backgroundColor": "#FeeFC3"}
        } else if(this.props.speakerCate === "Flutter"){
            cateStyle = {"backgroundColor": "#FeeFC3"}
        } else if(this.props.speakerCate === "Codelab"){
            cateStyle = {"backgroundColor": "#fffa4f"}
        } else if(this.props.speakerCate === "Career"){
            cateStyle = {"backgroundColor": "#D2E3FC"}
        } else if(this.props.speakerCate === "AR"){
            cateStyle = {"backgroundColor": ""}
        }

        imgStyle = {
            "width":"40px",
            "height":"40px",
            "borderRadius":"50%",
            "textAlign":"right"
        };

        return(
            <div className="item-row-card">
                <div className="item-row-header">
                    <div className="speaker-cate">
                        <div className="speaker-cate-item" style={cateStyle}>{this.props.speakerCate}</div>
                    </div>
                </div>
                <h1 className="item-row-topic">
                    {this.props.titleTop}
                    <br/>
                    {this.props.titleMiddle}
                    <br/>
                    {this.props.titleBottom}
                </h1>
                <input type="button" className="button-choose" onClick={this.pickSession} value="선택하기"/>
                <div className="item-row-speaker">
                    <div className="speaker-img">
                        <img src={this.props.speakerImg} style={imgStyle}/>
                    </div>
                    <div className="speaker-name">
                        {this.props.speakerName}
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;