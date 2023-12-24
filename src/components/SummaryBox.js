import * as React from "react";
import './SummaryBox.css'
import Card from "@mui/material/Card";

class SummaryBox extends React.Component {
    render() {
        const {category, iconSrc, score, background, textColor} = this.props;

        return (
            <Card className="SummaryBox"
                  style={{borderRadius: '10px', boxShadow: 'unset', backgroundColor: background}}>
                <img alt={category + " icon"} src={iconSrc}/>
                <p className="Category" style={{color: textColor, fontWeight: 'bold'}}>
                    {category}
                </p>
                <p className="Score">{score}</p>
                <p>
                    <span style={{color: 'rgba(173, 173, 173, 0.7)'}}>/ 100</span>
                </p>
            </Card>
        );
    }
}

export default SummaryBox;