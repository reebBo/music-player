const songs = [
    "Cheryl Cole - Fight For This Love.mp3",
    "Cheryl Cole - Parachute.mp3",
    " Cheryl Cole - Under The Sun.mp3",
    "Michael Bublé - Feeling Good.mp3",
    "Michael Bublé - Cry me a River.mp3",
    "Michael Bublé - Save The Last Dance For Me.mp3"
]

const createSongList = () => {
    //create <ol>
    const list = document.createElement('ol')
    for (let i = 0; i < songs.length; i++) {
        //for each song in the songs[] we create a <li> item
        const item = document.createElement('li')
        //past in the text inside <li>
        item.appendChild(document.createTextNode(songs[i]))
        //add each item to <ol>
        list.appendChild(item)
    }
    //return newly constructed list
    return list
}
// populate the songList div in the HTML
document.getElementById('songList').appendChild(createSongList());

//create a clickEventHandler for our song list
songList.onclick = (e) => {
    //e is for data passed in as event when clicking the songs
    // get the clicked item 
    const clickedItem = e.target;
    //get the location to display it
    const source = document.getElementById('source')
    source.src = "assets/" + clickedItem.innerText;

    //display currently played song

    document.getElementById('currentSong').innerHTML = clickedItem.innerText
    player.load()
    player.play()

}

// play and pause 
const playAudio = () => {
    //only play if the audio is loaded
    if (player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause()
}
//volume
const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
    // each time there's any input to the slider we grabb the slider and set it in the const called volume 
    const volume = e.target.value
    player.volume = volume
}

const updateProgress = () => {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        //set it to a calculation
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}