import React from 'react';
import Button from './Button';

class Tictoc extends React.Component {
    state={
        tictoc: [
        ["","",""],
        ["","",""],
        ["","",""]
        ],
        winResult: false,
        winWord: "",
        noWinner: false
    };

    isNotEmpty = (a, b, c) => {
        
        if(b !== "" && b !== "" && c!== "") {
            return true;
        }

        return false;
    }


    handleClick = key => {

        var textLength = 0;
        for (var i = 0, l1 = this.state.tictoc.length; i < l1; i++) {
            for (var j = 0, l2 = this.state.tictoc[i].length; j < l2; j++) {
                // check if have text
                var textTic = this.state.tictoc[i][j];

                if(textTic !== "") {
                    textLength++;
                }
            }
        }

        var key1 = key.substring(0, 1);
        var key2 = key.substring(1, 2);
        const newValSt = this.state.tictoc;
        var winnerResult = false;
        if(textLength < 9) {
            if(textLength % 2 == 0) {
                // even X
                if(newValSt[key1][key2] === "") {
                    newValSt[key1][key2] = "X";
                    this.setState({tictoc: newValSt});
                }
            } else {
                // odd O
                if(newValSt[key1][key2] === "") {
                    newValSt[key1][key2] = "O";
                    this.setState({tictoc: newValSt});
                }
            }

            // find result
            // 00, 01, 02 ,, 10, 11, 12 ,, 20, 21, 22 ,, 00, 10, 20 ,, 01, 11, 21 ,, 02, 12, 22 ,, 00, 11, 22 ,, 02, 11, 20
            if(this.isNotEmpty(newValSt[0][0], newValSt[0][1], newValSt[0][2]) && newValSt[0][0] == newValSt[0][1] && newValSt[0][0] == newValSt[0][2] && newValSt[0][1] == newValSt[0][2]) {
                this.setState({winResult: true});
                winnerResult = true;
                this.setState({winWord: newValSt[0][0]})
            }

            if(this.isNotEmpty(newValSt[1][0], newValSt[1][1], newValSt[1][2]) && newValSt[1][0] == newValSt[1][1] && newValSt[1][0] == newValSt[1][2] && newValSt[1][1] == newValSt[1][2]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[1][0]})
            }

            if(this.isNotEmpty(newValSt[2][0], newValSt[2][1], newValSt[2][2]) && newValSt[2][0] == newValSt[2][1] && newValSt[2][0] == newValSt[2][2] && newValSt[2][1] == newValSt[2][2]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[2][0]})
            }

            if(this.isNotEmpty(newValSt[0][0], newValSt[1][0], newValSt[2][0]) && newValSt[0][0] == newValSt[1][0] && newValSt[0][0] == newValSt[2][0] && newValSt[1][0] == newValSt[2][0]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[0][0]})
            }

            if(this.isNotEmpty(newValSt[0][1], newValSt[1][1], newValSt[2][1]) && newValSt[0][1] == newValSt[1][1] && newValSt[0][1] == newValSt[2][1] && newValSt[1][1] == newValSt[2][1]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[0][1]})
            }

            if(this.isNotEmpty(newValSt[0][2], newValSt[1][2], newValSt[2][2]) && newValSt[0][2] == newValSt[1][2] && newValSt[0][2] == newValSt[2][2] && newValSt[1][2] == newValSt[2][2]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[0][2]})
            }

            if(this.isNotEmpty(newValSt[0][0], newValSt[1][1], newValSt[2][2]) && newValSt[0][0] == newValSt[1][1] && newValSt[0][0] == newValSt[2][2] && newValSt[1][1] == newValSt[2][2]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[0][0]})
            }

            if(this.isNotEmpty(newValSt[0][2], newValSt[1][1], newValSt[2][0]) && newValSt[0][2] == newValSt[1][1] && newValSt[0][2] == newValSt[2][0] && newValSt[1][1] == newValSt[2][0]) {
               this.setState({winResult: true});
               winnerResult = true;
               this.setState({winWord: newValSt[0][2]})
            }

            if(textLength == 8 && winnerResult === false) {
                this.setState({noWinner: true})
            }
        }
        
    }

    handlePlayAgain = () => {
        // set data empty 
        const emptyData =  [
            ["","",""],
            ["","",""],
            ["","",""]
            ];

        this.setState({tictoc: emptyData});
        this.setState({winResult: false});
        this.setState({noWinner: false});
    }

    render() {
        return (
            <div className='container'>
                {this.state.tictoc.map((items, keyid1) => {
        return (
          <div key={keyid1} className="play">
            {items.map((text2, keyid2) => {
               return <Button key={keyid1+""+keyid2} text2={text2} handleClick={() => this.handleClick(keyid1+""+keyid2)} disabledClick={this.state.winResult || this.state.noWinner}/>
            })}
          </div>
        );
      })}
            {/* <span>
                {this.state.tictoc.map((textTic, keyid1) => 
                <span key={keyid1} className='inline-block'>
                    {textTic.map((text2, keyid2) =>
                      <Button key={keyid1+""+keyid2} keyid2={keyid2} keyid1={keyid1} text2={text2} handleClick={() => this.handleClick(keyid1+""+keyid2)}/>
                        )}
                        <br></br>
                        </span>
                )}
                
            </span> */}
            <span>{this.state.winResult ? "Winner is "+this.state.winWord+" !" : ""}</span>
            { this.state.noWinner ? <span>No winner !</span> : ""}
            { this.state.winResult || this.state.noWinner ? <button style={{backgroundColor: "#04AA6D",border: "none",padding: "20px",margin: "4px 2px",cursor: "pointer",color: "white",borderRadius: "12px"}} onClick={this.handlePlayAgain}>Play again ?</button> : null } 
            </div>
        );
    }
}

export default Tictoc;