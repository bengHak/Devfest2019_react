import React from 'react';
import domtoimage from 'dom-to-image';

class MyTable extends React.Component {
    
    render(){
        let tableStyle={
            
        }

        return(
            <>
                <h1>내 시간표</h1>
                <div>
                    <span>{this.props.contents["session1"]["speakerCate"]}</span>
                    &nbsp;
                    {this.props.contents["session1"]["titleTop"]}
                </div>
                <div>
                    <span>{this.props.contents["session2"]["speakerCate"]}</span>
                    &nbsp;
                    {this.props.contents["session2"]["titleTop"]}
                </div>
                <div>
                    <span>{this.props.contents["session3"]["speakerCate"]}</span>
                    &nbsp;
                    {this.props.contents["session3"]["titleTop"]}
                </div>
                <div>
                    <span>{this.props.contents["session4"]["speakerCate"]}</span>
                    &nbsp;
                    {this.props.contents["session4"]["titleTop"]}
                </div>
                <div>
                    <span>{this.props.contents["session5"]["speakerCate"]}</span>
                    &nbsp;
                    {this.props.contents["session5"]["titleTop"]}
                </div>
            </>
        );
    }
}

export default MyTable;