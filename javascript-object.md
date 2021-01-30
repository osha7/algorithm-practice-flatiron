<!-- let playlist = {
    "Tori Amos": "Silent All These Years"
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
} -->

# New Object initialized with key: value pairs:

    let self = {
    firstName: 'Jennifer',
    lastName: 'Groetz',

}

// undefined
self
// {firstName: "Jennifer", lastName: "Groetz"}

# ADD (dot notation)

self
// {firstName: "Jennifer", lastName: "Groetz"}
self.middleName = 'Osha'
// "Osha"
self
// {firstName: "Jennifer", lastName: "Groetz", middleName: "Osha"}

# ADD (bracket notation)

self
// {firstName: "Jennifer", lastName: "Groetz", middleName: "Osha"}
self['location'] = 'Denver'
// "Denver"
self
// {firstName: "Jennifer", lastName: "Groetz", middleName: "Osha", location: "Denver"}

# DELETE

self
// {firstName: "Jennifer", lastName: "Groetz", middleName: "Osha", location: "Denver"}
delete self.location
// true
self
// {firstName: "Jennifer", lastName: "Groetz", middleName: "Osha"}

# Object.assign()

create a new object and pass it properties from existing objects
Object.assign({}, obj, { [key]: value })
// it's important that we merge everything into
// a new object such as the empty {}.
// Otherwise, the object obj will be modified.
