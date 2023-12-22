import './App.css';
import Card from '@mui/material/Card';
import memory from "../src/images/icon-memory.svg"
import reaction from "../src/images/icon-reaction.svg"
import verbal from "../src/images/icon-verbal.svg"
import visual from "../src/images/icon-visual.svg"

function App() {
    return (
        <div className="App">
            <Card className="MainCard" style={{borderRadius: '30px', boxShadow: '15px 15px 15px hsl(221, 100%, 96%)'}}>
                <Card className="ResultCard" style={{borderRadius: '20px', boxShadow: 'unset'}}>
                    <h1>Your Result</h1>
                    <Card className="Circle" style={{borderRadius: '100%', boxShadow: 'unset'}}>
                        <h1>"Score"</h1>
                        <h3>of "Score"</h3>
                    </Card>
                    <h2>Status</h2>
                    <h3>Message</h3>
                </Card>
                <div className="SummaryCard">
                    <h1>Summary</h1>
                    <div className="Areas">
                        <Card className="Reaction">
                            <img alt="Reaction icon" src={reaction}/>
                            <p>Reaction</p>
                            <p>80/100</p>
                        </Card>
                        <Card className="Memory">
                            <img alt="Memory icon" src={memory}/>
                            <p>Memory</p>
                            <p>92/100</p>
                        </Card>
                        <Card className="Verbal">
                            <img alt="Verbal Icon" src={verbal}/>
                            <p>Verbal</p>
                            <p>61/100</p>
                        </Card>
                        <Card className="Visual">
                            <img alt="Visual icon" src={visual}/>
                            <p>Visual</p>
                            <p>72/100</p>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    );
}


export default App;
