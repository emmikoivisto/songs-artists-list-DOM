document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector("#new-item-form");
    form.addEventListener('submit', handleSubmit);

    const deleteAll = document.querySelector("#delete-all");
    deleteAll.addEventListener('click', handleDeleteAll);
    });


    const handleSubmit = function (event) {
        event.preventDefault();

        const songListItem = createSongListItem(event.target);
        const mainList = document.querySelector("#list");
        mainList.appendChild(songListItem);

        event.target.reset();
    }

    const createSongListItem = function (form) {
        const songListItem = document.createElement('li');
        songListItem.classList.add('song-list-item');

        const artist = document.createElement('h2');
        artist.textContent = form.artist.value;
        songListItem.appendChild(artist);

        const song = document.createElement('h3');
        song.textContent = form.song.value;
        songListItem.appendChild(song);

        const album = document.createElement('h3');
        album.textContent = form.album.value;
        songListItem.appendChild(album);

        const language = document.createElement('p')
        language.textContent = form.language.value;
        songListItem.appendChild(language);

        return songListItem;
    }

    const handleDeleteAll = function (event) {
        console.log(event)
        const mainList = document.querySelector('#list');
        mainList.innerHTML = '';
    }