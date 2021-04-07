import React, {useEffect} from 'react';
import './App.css';
import firebase from './firebase';
import Chart from "chart.js";

const App = () => {
  let playerStats, seasonStats;
  useEffect(() => {        
    startUp();
  });

  async function startUp() {
    console.log("starting...");
    //console.log("screen.width:" + window.innerWidth);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      console.log("mobile user");
      document.getElementById("testID").innerHTML = "mobile user";
    } else {
      console.log("laptop user");
      document.getElementById("testID").innerHTML = "laptop user";
    }
    
    document.getElementById("web-content").style.display = "none";
    document.getElementsByClassName("loadingData")[0].style.display = "block";

    playerStats = await firebase.getPlayers();
    seasonStats = await firebase.getSeason();
    document.getElementsByClassName("loadingData")[0].style.display = "none";
    getSelect();
    getHtml();
    //getCharts();
    document.getElementById("web-content").style.display = "block";
  }

  function getCharts(playerName) {
    let data = [];
    for (let p = 0; p < seasonStats.length; p++) {
      if (seasonStats[p].player === playerName) {
        data.push(seasonStats[p]);
      }
    }
    //console.log(data);
    let roundLables = [];
    let fantasyScores = [];
    let colours = [];
    let borderColours = [];
    let borderPriceColours = [];
    let priceChanges = [];
    for (let i = 0; i < data.length; i++) {
      roundLables.push(parseInt(data[i].rnd));
      fantasyScores.push(parseInt(data[i].fantasy_points));
      colours.push('rgba(255, 0, 0, 0.5)');
      borderColours.push('rgba(255, 0, 0, 1)');
      borderPriceColours.push('rgba(0, 130, 0, 1)');
      priceChanges.push(parseInt(data[i].price_changes.split("k")[0].replace("$", "")))
    }
    let ctx = document.getElementById("FantasyScoresID").getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: roundLables,
            datasets: [{
                data: fantasyScores,
                backgroundColor: colours,
                borderColor: borderColours,
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
          }
        }          
    });

    ctx = document.getElementById("PriceChangesID").getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: roundLables,
          datasets: [{
              data: priceChanges,
              fill: false,
              lineTension: 0,
              borderColor: borderPriceColours,
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
              ticks: {
                  suggestedMin: Math.min.apply(null, priceChanges) - 20,
                  suggestedMax: Math.min.apply(null, priceChanges) + 20
              }
          }]
        } 
      }        
    });

  }
  
  function getHtml() {
    let myHtml = "";
    //console.log(playerStats);
    for (let p = 0; p < playerStats.length; p++) {
      let name = playerStats[p].player;
      let lastName = name.split(" ")[1];
      let firstName = name.split(" ")[0];
      let x = lastName + ", " + firstName;
      if (x === document.getElementById('playerSelectID').value) {
        let teamClass = playerStats[p].team.split(" ");        
        teamClass = teamClass[teamClass.length - 1] + "Class";
        let imgLink = playerStats[p].photo_link;
        if (!imgLink.includes("rugbyimages")) {
          imgLink = "https://favim.com/assets/img/avatar-default.jpg";
        }

        myHtml += "<div class='playerProfile'>";
        myHtml += "<div class='playerProfileDetails'>";
        myHtml += "<h3>" + playerStats[p].player + "</h3>";
        myHtml += "<p>" + playerStats[p].team + "</p>";
        myHtml += "<img src='" + imgLink + "' />";
        myHtml += "</div>";
        myHtml += "<div class='playerProfileTable'>";
        if (playerStats[p].opponent_avg !== "nan") {
          myHtml += "<p><b>Next Opponent:</b> " + playerStats[p].next_opponent + " (averages " + playerStats[p].opponent_avg + ")</p>";
        } else {
          myHtml += "<p><b>Next Opponent:</b> " + playerStats[p].next_opponent +"</p>";
        }   
        myHtml += "<table class='" + teamClass + "'><tbody><tr><th>Price</th><th>Position</th><th>Season Avg</th><th>Break Even</th><th>Ownerage</th><th>PPM</th></tr>";
        myHtml += "<tr><td>$" + playerStats[p].price + "k</td><td>" + playerStats[p].position + "</td><td>" + playerStats[p].season_avg + "</td><td>" + playerStats[p].break_even + "</td><td>" + playerStats[p].ownerage + "</td><td>" + playerStats[p].ppm + "</td></tr>";
        myHtml += "</tbody></table></div>"
        myHtml += "</div>";


             
        //myHtml += `<div class="canvasClass"><canvas id="CanvasID" width="100" height="100"></canvas></div>`;
        getCharts(playerStats[p].player);
      } 
    }

    document.getElementById("myHtml").innerHTML = myHtml;
  }

  function getSelect() {
    let selectHTML = "<select id='playerSelectID'>";
    for (let p = 0; p < playerStats.length; p++) {
      let name = playerStats[p].player;
      let lastName = name.split(" ")[1];
      let firstName = name.split(" ")[0];
      let x = lastName + ", " + firstName;
      selectHTML += "<option value='" + x + "'>" + x + "</option>";
    }
    selectHTML += "</select>";
    document.getElementById("playerSearchID").innerHTML = selectHTML;
  }

  return (
    <div className="App">
      <div className="loadingData">
        <br /><br />
        Getting data from database...
        <br /><br />
        <div className="spinner loading"></div>
      </div>      
      <br />
      <p id="testID"></p>
      <div id="web-content">
        <div id="playerSearchID"></div>
        <button onClick={getHtml}>Search Player</button>
        <div id="myHtml"></div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="canvases">
          <div className="canvasChart">
            <h3>Scores this season:</h3>
            <div className="canvasClass"><canvas id="FantasyScoresID" width="100" height="100"></canvas></div>
          </div>
          <div className="canvasChart" style={{marginLeft:"20px"}}>
            <h4>Price changes ($):</h4>
            <div className="canvasClass"><canvas id="PriceChangesID" width="100" height="100"></canvas></div>
          </div>
        </div>
        
      </div>
      <br /><br />
      
      
    </div>
  );
}

export default App;
