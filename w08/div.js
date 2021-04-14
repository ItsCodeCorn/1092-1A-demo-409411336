function changeVideo(index) {
    const player = document.querySelector('#player')
    console.log(player)
    
    switch (index) {
        case 1:
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break
        
        case 2:
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break
    
        case 3:
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break
    
        case 4:
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break
        
        case 5:
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break
    }
}

function changeColor(color) {
    const section = document.querySelector('#section')
    console.log(section)

    switch (color) {
        case 1:
        section.style.backgroundColor = 'yellow'
        break

        case 2:
        section.style.backgroundColor = 'purple'
        break

        case 3:
        section.style.backgroundColor = 'green'
        break
    }
    
}

function changePic(index) {
    const player = document.querySelector('#player')
    console.log(player)
    
    switch (index) {
        case 1:
        player.innerHTML = `<img src="v1.png" alt="v1.png" width=100% height=100%>`
        break
        
        case 2:
        player.innerHTML = `<img src="v2.png" alt="v2.png" width=100% height=100%>`
        break
    
        case 3:
        player.innerHTML = `<img src="v3.png" alt="v3.png" width=100% height=100%>`
        break
    
        case 4:
        player.innerHTML = `<img src="v4.png" alt="v4.png" width=100% height=100%>`
        break
        
        case 5:
        player.innerHTML = `<img src="v5.png" alt="v5.png" width=100% height=100%>`
        break
    }
}