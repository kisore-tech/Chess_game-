import React ,{useState} from 'react';
import Alertc from './Alertc';
export default function Chess() {
    
 
    const board = [];

    const squareSize = 60; // in pixels
    const lightBrown = '#f0d9b5'; // light square
    const darkBrown = '#b58863'; // dark square
    const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ];
    const [chessboard, setBoard] = useState(initialBoard);
    const highlight=[ 
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ',' ',' '],
     ];
    const [light,setlight]=useState(highlight);
    const[turn,setturn]=useState('white');
   
    let peice_color =(piece)=>{
        if(piece==='♜'||piece==='♞'||piece==='♝'||piece==='♛'||piece==='♚'||piece==='♟'){
            return 'black';
        }else if(piece===null){
            return 'blue'
        }else{
            return 'white'
        }
    }
    const handle_piece=(piece,row,col)=>{
        const temp = highlight.map(rowArr => [...rowArr]);
        if(piece==='♙' ){
            // const temp = highlight.map(rowArr => [...rowArr]); // deep clone 2D array
            if(row-1>=0 && chessboard[row-1][col]===null)
            {
                temp[row-1][col] = "white";
                if(row==6 && row-2>=0 && chessboard[row-2][col]===null)
                {
                    temp[row-2][col] ='white';
                }
            }
            if(row-1>=0 && col+1<=7 && peice_color(chessboard[row-1][col+1])==='black')
            {
                temp[row-1][col+1] = 'white';
            }
            if(row-1>=0 && col-1>=0 && peice_color(chessboard[row-1][col-1])==='black')
            {
                temp[row-1][col-1] = 'white';
            }
           
        }

        if(piece==='♟'){
            if(row+1<=7 && chessboard[row+1][col]===null)
            {
                temp[row+1][col] = "white";
            }
            if(row==1 && row+2<=7 && chessboard[row+2][col]===null)
            {
                temp[row+2][col] ='white';
            }
            if(row+1<=7 && col+1<=7 && peice_color(chessboard[row+1][col+1])==='white')
            {
                temp[row+1][col+1] = 'white';
            }
            if(row+1<=7 && col-1>=0 && peice_color(chessboard[row+1][col-1])==='white')
            {
                temp[row+1][col-1] = 'white';
            }
          
        }

        if(piece==='♖'|| piece==='♕'){
           
             
             let i=0;
             let top=row-1;
             let bottom=row+1;
             let left=col-1;
             let right=col+1;
             while(i<8){
                if(top>=0 && (peice_color(chessboard[top][col])!='white')){
                    temp[top][col]='white';
                   
                    if(peice_color(chessboard[top][col])=== 'blue') top--;              
                }

               if(bottom<=7 && (peice_color(chessboard[bottom][col])!='white')){
                    temp[bottom][col]='white';
                    if(peice_color(chessboard[bottom][col])==='blue') bottom++;
               }

               if(left>=0 && (peice_color(chessboard[row][left])!='white')){
                    temp[row][left]='white';
                    if(peice_color(chessboard[row][left])==='blue') left--;
               }
               
               if(right<=7 &&(peice_color(chessboard[row][right])!='white')){
                temp[row][right]='white';
                if(peice_color(chessboard[row][right])==='blue') right++;
               }
                i++;
               
             }
             
        }

        if(piece==='♜'|| piece==='♛'){
            let i=0;
            let top=row+1;
            let bottom=row-1;
            let left=col-1;
            let right=col+1;
            while(i<8){
                if(top<=7 && peice_color(chessboard[top][col])!='black'){
                    temp[top][col]='white';
                    if(peice_color(chessboard[top][col])==='blue') top++;
                }

                if(bottom>=0 && peice_color(chessboard[bottom][col])!='black'){
                    temp[bottom][col]='white';
                    if(peice_color(chessboard[bottom][col])==='blue') bottom--;
                }

                if(left>=0 && peice_color(chessboard[row][left])!='black'){
                    temp[row][left]='white';
                    if(peice_color(chessboard[row][left])==='blue') left--;
                }

                if(right<=7 && peice_color(chessboard[row][right])!='black'){
                    temp[row][right]='white';
                    if(peice_color(chessboard[row][right])==='blue') right++;
                }
                i++;
            }
            

        }

        if(piece==='♗'|| piece==='♕'){
            let top1=row-1;
            let top2=row-1;
            let bottom1=row+1;
            let bottom2=row+1;
            let left1=col-1;
            let left2=col-1;
            let right1=col+1;
            let right2=col+1;
            let i=0;
            while(i<8){
                if(top1>=0 && left1>=0 && peice_color(chessboard[top1][left1])!='white'){                    
                    temp[top1][left1]='white';
                    if(peice_color(chessboard[top1][left1])==='blue') {
                        top1--;
                        left1--;
                    }
                }

                if(top2>=0 && right1<=7 && peice_color(chessboard[top2][right1])!='white'){
                    temp[top2][right1]='white';
                    if(peice_color(chessboard[top2][right1])==='blue') {
                        top2--;
                        right1++;
                    }
                }

                if(bottom1<=7 && right2<=7 && peice_color(chessboard[bottom1][right2])!='white'){
                    temp[bottom1][right2]='white';
                    if(peice_color(chessboard[bottom1][right2])==='blue') {
                        bottom1++;
                        right2++;
                    }
                }

                if(bottom2<=7 && left2>=0 && peice_color(chessboard[bottom2][left2])!='white'){
                    temp[bottom2][left2]='white';
                    if(peice_color(chessboard[bottom2][left2])==='blue') {
                        bottom2++;
                        left2--;
                    }
                }


                i++;
            }
            

        }


        if(piece==='♝' || piece==='♛'){
            let top1=row+1;
            let top2=row+1;
            let bottom1=row-1;
            let bottom2=row-1;
            let left1=col-1;
            let left2=col-1;
            let right1=col+1;
            let right2=col+1;
            let i=0;
            while(i<8){
                if(top1<=7 && left1>=0 && peice_color(chessboard[top1][left1])!='black'){
                    temp[top1][left1]='white';
                    if(peice_color(chessboard[top1][left1])==='blue') {
                        top1++;
                        left1--;
                    }
                }

                if(top2<=7 && right1<=7 && peice_color(chessboard[top2][right1])!='black'){
                    temp[top2][right1]='white';
                    if(peice_color(chessboard[top2][right1])==='blue') {
                        top2++;
                        right1++;
                    }
                }

                if(bottom1>=0 && right2<=7 && peice_color(chessboard[bottom1][right2])!='black'){
                    temp[bottom1][right2]='white';
                    if(peice_color(chessboard[bottom1][right2])==='blue') {
                        bottom1--;
                        right2++;
                    }
                }

                if(bottom2>=0 && left2>=0 && peice_color(chessboard[bottom2][left2])!='black'){
                    temp[bottom2][left2]='white';
                    if(peice_color(chessboard[bottom2][left2])==='blue') {
                        bottom2--;
                        left2--;
                    }
                }


                i++;
            }
           

        }
        if(piece === '♘' || piece === '♞')
        {
           
            let dr = [1, -1, -2, -2, 1, -1, 2, 2];
            let dc = [2, 2, 1, -1, -2, -2, -1, 1];
            for(var i=0;i<8;i++)
            {
                var new_row = row + dr[i];
                var new_col = col + dc[i];
                if(new_row<=7 && new_row>=0 && new_col<=7 && new_col>=0 && (peice_color(chessboard[new_row][new_col])!=turn))
                {
                    temp[new_row][new_col]='white';
                }
            }
       
        }

        if(piece==='♔'|| piece==='♚'){
             
          let dr=[1,1,0,-1,-1,-1,0,1];
          let dc=[0,1,1,1,0,-1,-1,-1];
          for(let i=0;i<8;i++){
            let new_row=row+dr[i];
            let new_col=col+dc[i];
             if(new_row<=7 && new_row>=0 && new_col<=7 && new_col>=0 && (peice_color(chessboard[new_row][new_col])!=turn))
                {
                    temp[new_row][new_col]='white';
                }
            }
            
        }
         return temp;
    }

   let initial_black_king=[0,4];
   const[black_king,setblack_king]=useState(initial_black_king);
   let initial_white_king=[7,4];
   const[white_king,setwhite_king]=useState(initial_white_king);
   const [check,setcheck]=useState('');
   



   const blackcheck=(temp_chessboard,temp_turn)=>{
        console.log(temp_turn);
        let king_row = (temp_turn==='white') ? white_king[0]:black_king[0]
        let king_col = (temp_turn==='white') ? white_king[1]:black_king[1]
        temp_turn=(temp_turn==='white') ? 'black':'white';

           for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                if(peice_color(temp_chessboard[i][j])===temp_turn)
                {
                    let temp = handle_piece(temp_chessboard[i][j],i,j);
                    if(temp[king_row][king_col]==="white"){
                       setcheck('check');
                       console.log('alerted');
                       return;
                    }
                }
            }
           } 
           setcheck(' ');
    }
 
  
const [win,setwin]=useState(' ');

    let initial_prev=[0,0]
    const[prev,setprev]=useState(initial_prev)

    let handleonclick=(row,col)=>{
        let piece=chessboard[row][col];      
        if(light[row][col]==='white'){            
            const temp_chessboard=chessboard.map(rowArr => [...rowArr]);
            if(temp_chessboard[row][col]==='♚'||temp_chessboard[row][col]==='♔'){
                  setwin('win');
            }
            temp_chessboard[row][col]=chessboard[prev[0]][prev[1]];
            if(chessboard[prev[0]][prev[1]]==='♚'){
                let temp_black_king=[row,col];
               setblack_king(temp_black_king);
            }

            if(chessboard[prev[0]][prev[1]]==='♔'){
                let temp_white_king=[row,col];
               setwhite_king(temp_white_king);
            }
            temp_chessboard[prev[0]][prev[1]]=null;
            setBoard(temp_chessboard); 
            let temp_turn=(turn==='white') ? 'black':'white';
            setturn(temp_turn);
            setlight(highlight); 
            blackcheck(temp_chessboard,temp_turn);
        }
        else if(piece!=null && peice_color(piece)===turn)
        {     
            let temp = handle_piece(piece,row,col);
            setlight(temp);
            let temp_prev=[row,col];
            setprev(temp_prev);
        }
    
        
        
        
    }

    const getSquareStyle = (isDark, row, col) => {
        var color;
        if(light[row][col]==='white'){
            color='white';
        }
        else if(isDark===true){
           color=darkBrown;
        }
        else{
            color=lightBrown;
        }
        const boardStyle = {
            width: squareSize,
            height: squareSize,
            backgroundColor: color,
            border: '1px solid black',
            outline: 'none',
            padding: 0,
            cursor: 'pointer',
            fontSize: '40px',
        };
        
        if(chessboard[row][col]===' ')
        {
            boardStyle.opacity = '0.4'
        }
        if(chessboard[row][col]==='♟')
        {
            boardStyle.color = '#111'
        }
    
        return boardStyle;
    };


    const rowStyle = {
        display: 'flex',
    };

    const boardStyle = {
        display: 'inline-block',
        border: '4px solid #333',
        marginLeft: 'calc(50% - 200px)'
    
    };

    for (let row = 0; row < 8; row++) {
        const squares = [];
        for (let col = 0; col < 8; col++) {
        const isDark = (row + col) % 2 === 1;
        squares.push(
            <button
            key={`${row}-${col}`}
          
            style={{...getSquareStyle(isDark, row, col)}}
        
            onClick={() => handleonclick(row,col)}          
            >
            {chessboard[row][col]}
            </button>
        );
        }
        board.push(
        <div key={row} style={rowStyle}>
            
            {squares}
        </div>
        );
    
    }
   const CelebrationSVG = () => (
  <svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="20" cy="20" r="5" fill="gold" />
    <circle cx="80" cy="20" r="5" fill="red" />
    <circle cx="50" cy="50" r="5" fill="blue" />
    <circle cx="20" cy="80" r="5" fill="green" />
    <circle cx="80" cy="80" r="5" fill="purple" />
    <line x1="50" y1="0" x2="50" y2="20" stroke="orange" strokeWidth="3" />
    <line x1="0" y1="50" x2="20" y2="50" stroke="orange" strokeWidth="3" />
    <line x1="100" y1="50" x2="80" y2="50" stroke="orange" strokeWidth="3" />
    <line x1="50" y1="100" x2="50" y2="80" stroke="orange" strokeWidth="3" />
  </svg>
);



   return (
  <>
    {(win==='win') ? (
        <div style={{ textAlign: 'center', margin: '30px',fontFamily: "'Pacifico', cursive", color: '#6a0dad', }}>
         <h2>🎉 Congratulations! 🎉</h2>
        <h2>{turn==='white'? 'black':'white'} won the match</h2>
       
      </div>
    ):null}
     <div>
      {check === 'check' ? (
        <div className="alert alert-danger" role="alert"> {turn}
           check
        </div>
      ) : null}
    </div>
    <h1 style={{ textAlign: 'center',}}>
      {turn} move
    </h1>
    <div style={boardStyle}>
      {board}
    </div>
  </>
);

}


