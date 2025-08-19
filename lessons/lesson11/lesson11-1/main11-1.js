fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        let block = document.createElement('div');
        document.body.appendChild(block);
        for (let user of users) {
            console.log(user);
            let info = document.createElement('p');
            info.innerText = `${user.id} - ${user.name} - ${user.phone}`;
            block.appendChild(info);
        }
      })


