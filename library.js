const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// const printPlaylists = function() {       // return id,name, # of tracks   i want to print out as specified
//        let save1 = Object.keys(library.playlists);
//        save1.forEach((key) =>  console.log(key));     //should return p01 p02
//      };
     



/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//const pkeys = Object.keys(library.playlists);
//console.log(pkeys);
 // for (let p of pkeys) {
  //  const playtracks = Object.keys(library.playlists[p].tracks);     console.log(`${[p]}:${library.playlists[p].name}- ${playtracks.length}\n`);
   //}

const printPlaylists = function () {
       //["p01","p02"]
  const pkeys = Object.keys(library.playlists);
   for (let p of pkeys) {
     //  const nameToPrint = library.playlists[p].name;
     //  const idToPrint = p.id;
      // const numtracktoPrint = p.tracks.length
       
     const playtracks = library.playlists[p].tracks;
     console.log(`${[p]}:${library.playlists[p].name}- ${playtracks.length}\n`);
   }
};
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  //["t01", "t02", "t03"]
const tkeys = Object.keys(library.tracks);
  for (let t of tkeys){ 
    console.log(`${[t]}: ${library.tracks[t].name} by ${library.tracks[t].artist} (${library.tracks[t].album})`);
  }

};
 printTracks();




// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
 
    let playlist = library.playlists[playlistId].tracks;
    let objName = library.playlists[playlistId].name;//coding Music
    let objTrackNum = library.playlists[playlistId].tracks.length;
    
    console.log(`${playlistId}: ${objName} - ${objTrackNum} tracks`);
  
    for (const t of playlist) {
      let trackId = library.tracks[t].id;
      let trackName = library.tracks[t].name;
      let trackArtist = library.tracks[t].artist;
      let trackAlbum = library.tracks[t].album;
      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
  };
  //};
  printPlaylist("p01");
  


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let tracksArr = library.playlists[playlistId].tracks;
  console.log(tracksArr);
  if (!tracksArr.includes(trackId)) {
    tracksArr.push(trackId);
    console.log(tracksArr);
  } else {
    console.log(tracksArr);
  }
};
addTrackToPlaylist("t02","p01");




// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const newId = generateUid();
  console.log(newId);
  
  const newTrack = {
    "id": newId,
    "name": name,
    "artist": artist,
    "album": album
  };
  library.tracks[newId] = newTrack;
  console.log(library);
};



// adds a playlist to the library
const addPlaylist = function(name) {
  const addPlaylist = function(name) {

    const newPlaylistId = generateUid();
    console.log(newPlaylistId);
  
    const newPlaylist = {
      "id": newPlaylistId,
      "name": name,
      "tracks": []
    };
    library.playlists[newPlaylistId] = newPlaylist;
    console.log(library);
  };

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}