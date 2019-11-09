import React from 'react';
import domtoimage from 'dom-to-image';

class MyTable extends React.Component {
    
    render(){
        return(
            <>
                <h1>내 시간표</h1>
                <div>{this.props.contents["session1"]["titleTop"]}</div>
                <div>{this.props.contents["session2"]["titleTop"]}</div>
                <div>{this.props.contents["session3"]["titleTop"]}</div>
                <div>{this.props.contents["session4"]["titleTop"]}</div>
                <div>{this.props.contents["session5"]["titleTop"]}</div>
            </>
        );
    }
}

export default MyTable;