let hasVoted = false;
let votes = {
  "Candidate A": 0,
  "Candidate B": 0,
  "Candidate C": 0
};

function login() {
  const voterId = document.getElementById('voterId').value.trim();
  if (voterId === '') {
    alert("Please enter your Voter ID.");
    return;
  }
  document.getElementById('loginSection').style.display = 'none';
  document.getElementById('voteSection').style.display = 'block';
}

function castVote(candidate) {
  if (hasVoted) {
    alert("You have already voted!");
    return;
  }
  votes[candidate]++;
  hasVoted = true;
  alert(`Vote casted for ${candidate}`);
  showResults();
}

function showResults() {
  document.getElementById('voteSection').style.display = 'none';
  document.getElementById('resultSection').style.display = 'block';

  let resultText = "";
  for (let [candidate, count] of Object.entries(votes)) {
    resultText += `${candidate}: ${count} vote(s)<br>`;
  }
  document.getElementById('resultText').innerHTML = resultText;
}
