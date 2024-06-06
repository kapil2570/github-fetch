let api;
let username;

let form = document.querySelector("#myform");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    username = document.getElementById('name').value;
    api = "https://api.github.com/users/" + username;
    fetchApi(api);
})


const fetchApi = (api) => {
    let imageUrl, followers;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            imageUrl = data.avatar_url;
            followers = data.followers;
            showData(imageUrl, followers);
        }
        else {
            let errorDiv = document.querySelector('.error');
            errorDiv.style.display = "block";
            let errorMessage = document.querySelector('.error-message');
            errorMessage.innerHTML = "Please enter a valid username!";
        }
    }
    xhr.send();
}

const showData = (imageUrl, followers) => {
    document.querySelector('.container').style.display = "none";
    let img = document.querySelector('.user-image');
    let fol = document.querySelector('.followers');
    img.src = imageUrl;
    fol.innerHTML = followers;
    document.querySelector('.card-container').className = 'card-appear';
}
