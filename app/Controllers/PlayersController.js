// export class PlayersController{

import { appState } from "../AppState.js"

  function drawPlayers() {

    let template = ''

appState.players.forEach(player => {
  template += /*html*/`
    <div class="col-md-2">
      <div>
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>${player.name}</div>
          <div class="d-flex align-items-start">
            <button 
              class="btn btn-danger" 
              onclick="app.playersController.subtractPoint('${player.score}')"
              >-</button>
            <div>${player.score}</div>
            <button 
              class="btn btn-success" 
              onclick="app.playersController.addPoint('${player.score}')"
              >+</button>
          </div>
        </div>
      </div>
    </div>`
})
// @ts-ignore
document.getElementById('app').innerHTML = template
}


export class PlayersController {
  constructor() {
    console.log('is this thing on?');
    drawPlayers()
  }

addPlayer() {
    try {
        window.event.preventDefault()
        const form = window.event.target
        /*html */`
        <div class="col-12 col-sm-1">
            <form onsubmit="app.playersController.addPlayer()">
              <div>
                <label for="name">Player Name:</label>
                <input
                  type="text"
                  minlength="2"
                  maxlength="15"
                  name="name"
                  required
                />
              </div>
              <div>
                <button type="submit">Add Player</button>
              </div>
            </form>
          </div>`
        form.reset()
    } catch (e) {
        console.error('[addPlayer]', Error)
    }
}
  }






// addPoint(playerScore) {
//   console.log('clicked but better', playerScore);
//   playerScore ++;
// }

// subtractPoint(playerScore) {
// console.log('clicked but better', playerScore);
// playerScore --;
// }