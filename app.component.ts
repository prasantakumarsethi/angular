import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
     
  constructor(){}
  board: any[] = [];
  players = 'X'
  winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
  ]
  ngOnInit(): void {
  this.board= new Array(9);
  }
  playerhandle(index:number){
    this.board[index]= this.players

    this.players=(this.players === 'X') ? 'O' : 'X';


    for(let i=0; i<this.winner.length;i++){
      let winning_check=this.winner[i];
      let p1= winning_check[0];
      let p2= winning_check[1];
      let p3= winning_check[2];
      if(this.board[p1]!='' && this.board[p1]== this.board[p2] && 
      this.board[p2] == this.board[p3] && 
      this.board[p1]== this.board[p3]
      ){
        alert('player ' +this.board[p1] +'has won the game');
      }
    }
  }
}

