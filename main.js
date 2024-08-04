document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');
    const endpoint = 'https://api.github.com/users/vandresenfr'

    fetch(endpoint)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        avatar.src = json.avatar_url;
        username.innerText = json.login;
        repos.innerText = json.public_repos;
        link.href = json.html_url;
        followers.innerText = json.followers;
        following.innerText = json.following;
    })
})