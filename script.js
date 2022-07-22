const addPost=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{ 
    method:'POST',
    body: JSON.stringify({
        title: document.querySelector('#name'),
        body: document.querySelector('#email'),
        userId: document.querySelector('#userName'),
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        addPost(json.id)
    });
}