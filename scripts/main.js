function handleHTMLElementsChangeProjects(data) {
  console.log(data)

  document.getElementById('project-name').innerHTML = data[0].name
  document.getElementById('project-description').innerHTML = data[0].description
  document.getElementById('project-language').innerHTML = data[0].language
  document.getElementById('stargazers-count').innerHTML = data[0].stargazers_count
  document.getElementById('forks-count').innerHTML = data[0].forks_count
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
      handleHTMLElementsChangeProjects(data)
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
