
const getUser = (idUser, callback) => {
    
    setTimeout(() => {
        console.log('getting user from the database.')
        callback({id: idUser, name:"mohamed"})
    }, 2000);
}


const getRepositories = (idUser, callback) => {
    
    setTimeout(() => {
        console.log('retreive all depos from github')
        callback(['repos1', 'repos2', 'repos3'])
    }, 2000);
}

const getCommits = (repos, callback) => {
    
    setTimeout(() => {
        console.log('retreive all commits from github')
        callback(['commit1', 'commit2', 'commit3'])
    }, 2000);
}


getUser(10, function(user){
    console.log(user)
    getRepositories(user.id, function(repos) {
        console.log(repos)
        getCommits(repos, function(commits) {
            console.log(commits)
        })
    })
})


