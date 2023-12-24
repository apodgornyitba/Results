import './App.css';
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import SummaryBox from "./components/SummaryBox";
import {Button} from "@mui/material";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        import('./data.json').then((jsonData) => {
            setData(jsonData.default);
        });
    }, []);

    const getIcon = (category) => {
        switch (category) {
            case "Reaction":
                return require("../src/images/icon-reaction.svg").default;
            case "Memory":
                return require("../src/images/icon-memory.svg").default;
            case "Verbal":
                return require("../src/images/icon-verbal.svg").default;
            case "Visual":
                return require("../src/images/icon-visual.svg").default;
            default:
                return null;
        }
    };

    const scores = data.map(item => item.score);
    const averageScore = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(0);

    return (
        <div className="App">
            <Card className="MainCard" style={{borderRadius: '30px', boxShadow: '15px 15px 15px hsl(221, 100%, 96%)'}}>
                <Card className="ResultCard" style={{borderRadius: '20px', boxShadow: 'unset'}}>
                    <h2 style={{color: "rgb(213,213,213)"}}>Your Result</h2>
                    <Card className="Circle" style={{borderRadius: '100%', boxShadow: 'unset'}}>
                        <h1>{averageScore}</h1>
                        <h6>of 100</h6>
                    </Card>
                    <h2 className="great">Great</h2>
                    <div className="MessageBox">
                        <h4>You scored higher than 65% of the people who have taken these test.</h4>
                    </div>
                </Card>
                <div className="SummaryCard">
                    <h2>Summary</h2>
                    <div className="Areas">
                        {data.map((item) => (
                            <SummaryBox
                                key={item.category}
                                category={item.category}
                                iconSrc={getIcon(item.category)}
                                score={item.score}
                                background={item.background}
                                textColor={item.textColor}
                            />
                        ))}
                    </div>
                    <div className="Buttons">
                        <Button className="ContinueButton" style={{
                            borderRadius: '30px',
                            textTransform: 'none',
                            backgroundColor: 'hsl(224, 30%, 27%)'
                        }}>
                            <p>Continue</p>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}


export default App;
