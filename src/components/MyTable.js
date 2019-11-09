import React from 'react';
import domtoimage from 'dom-to-image';

class MyTable extends React.Component {
    
    render(){
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

        return(
            <>
                <br/>
                <hr/>
                <br/>
                <div className="personal-table" style={containerStyle}>
                    <h1 style={h1Style}>내 시간표</h1>
                    <div className="personal-table-row">
                        <span style={spanStyle}>{this.props.contents["session1"]["speakerCate"]}</span>
                        &nbsp;
                        <span style={tableStyle}>{this.props.contents["session1"]["titleTop"]}</span>
                    </div>
                    <div className="personal-table-row">
                        <span>{this.props.contents["session2"]["speakerCate"]}</span>
                        &nbsp;
                        <span style={tableStyle}>{this.props.contents["session2"]["titleTop"]}</span>
                    </div>
                    <div className="personal-table-row">
                        <span>{this.props.contents["session3"]["speakerCate"]}</span>
                        &nbsp;
                        <span style={tableStyle}>{this.props.contents["session3"]["titleTop"]}</span>
                    </div>
                    <div className="personal-table-row">
                        <span>{this.props.contents["session4"]["speakerCate"]}</span>
                        &nbsp;
                        <span style={tableStyle}>{this.props.contents["session4"]["titleTop"]}</span>
                    </div>
                    <div className="personal-table-row">
                        <span>{this.props.contents["session5"]["speakerCate"]}</span>
                        &nbsp;
                        <span style={tableStyle}>{this.props.contents["session5"]["titleTop"]}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default MyTable;