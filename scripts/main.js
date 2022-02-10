let repoData = []


function handleHTMLElementsChangeProjects(repoDataSize) {
  let cardCotent = ''
  
  if (repoDataSize === undefined) {
    for (let i = 0; i < 6; i++) {
      cardCotent += `
      <div onclick="location.href='/pages/repo.html';" class="cards-projects">
        <div class="card-header">
          <img
            class="icon-color"
            src="../assets/images/folder.svg"
            alt="folder icon"
          />
          <h3 id="project-name">${repoData[i].name}</h3>
        </div>
  
        <p id="project-description">${repoData[i].description}</p>
        <footer>
          <div class="git-likes">
            <img
              class="icon-color"
              src="../assets/images/star.svg"
              alt="star icon"
            />
            <span id="stargazers-count">${repoData[i].stargazers_count}</span>
            <img
              class="icon-color"
              src="../assets/images/git-branch.svg"
              alt="git branch icon"
            />
            <span id="forks-count">${repoData[i].forks_count}</span>
          </div>
          <div class="footer-tech">
            <div class="dot-point"></div>
            <span id="project-language">${repoData[i].language}</span>
          </div>
        </footer>
      </div>`
    }
  } else {
    for (let i = 0; i < repoDataSize; i++) {
      cardCotent += `
      <div onclick="location.href='/pages/repo.html';" class="cards-projects">
        <div class="card-header">
          <img
            class="icon-color"
            src="../assets/images/folder.svg"
            alt="folder icon"
          />
          <h3 id="project-name">${repoData[i].name}</h3>
        </div>
  
        <p id="project-description">${repoData[i].description}</p>
        <footer>
          <div class="git-likes">
            <img
              class="icon-color"
              src="../assets/images/star.svg"
              alt="star icon"
            />
            <span id="stargazers-count">${repoData[i].stargazers_count}</span>
            <img
              class="icon-color"
              src="../assets/images/git-branch.svg"
              alt="git branch icon"
            />
            <span id="forks-count">${repoData[i].forks_count}</span>
          </div>
          <div class="footer-tech">
            <div class="dot-point"></div>
            <span id="project-language">${repoData[i].language}</span>
          </div>
        </footer>
      </div>`
    }
  }

  document.getElementById('cards').innerHTML = cardCotent
}

function projectInfo() {
  const url = 'https://api.github.com/users/jalesnunes/repos'

  fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        alert('ERROR')
      }
    })
    .then(data => {
      repoData = data
      handleHTMLElementsChangeProjects()
    })
}

function handleHTMLElementsChange(data) {
  let profilePhoto = document.getElementsByClassName('profile-photo')

  // console.log(data)

  document.getElementById('name').innerHTML = data.name

  for (var i = 0; i < profilePhoto.length; i += 1) {
    profilePhoto[i].src = data.avatar_url
  }

  document.getElementById('bio').innerHTML = data.bio

  document.getElementById('location').innerHTML = data.location
  document.getElementById('organization').innerHTML = data.organization_url
  document.getElementById('github').innerHTML = data.login
  document.getElementById('twitter').innerHTML = data.twitter_username
}

function handleIPAGithubRequest() {
  const url = 'https://api.github.com/users/jalesnunes'

  fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        alert('ERROR')
      }
    })
    .then(data => {
      handleHTMLElementsChange(data)
      projectInfo()
    })
}

function loadMoreProfects() {
  handleHTMLElementsChangeProjects(repoData.length)
}

function openRepo() {
  console.log('in')
}
