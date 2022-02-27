const allPlayers = () =>{
    const searchField = document.getElementById('search-box');
    const searchValue = searchField.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayerDetails(data.player))

    // clear input
    searchField.value = '';
}

const showPlayerDetails = players =>{
    const playerContainer = document.getElementById('player-container');
    for(const player of players){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card border p-5">
                  <div class="pro-pic">
                    <img src="${player.strThumb}" class="w-50" alt="" />
                    <h2>Name: ${player.strPlayer}</h2>
                    <h5>Country: ${player.strNationality}</h5>
                    <p></p>
                    <div class="allbutton">
                      <button class="btn btn-danger">Delete</button>
                      <button class="btn btn-success" onclick="details('${player.idPlayer}')">Details</button>
                    </div>
                  </div>
                </div>
        `
        playerContainer.appendChild(div)
    }
}

const details = (idPlayer) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data.players[0]))
}

const setDetails = (info) =>{
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
    <div>
    <img src="${info.strThumb}" class="w-50" alt="" />
    <h2>Name: ${info.strPlayer}</h2>
    </div>
    `
    console.log(info)
}