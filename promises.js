
const getUser = (idUser) => {
    
    return new Promise((resolve, reject) => {

        let status = true

        setTimeout(() => {
            console.log('getting user from the database.')

            if(status == true) {

                resolve({id: idUser, name:"mohamed"})
            }else {
                reject('this user is not found !!')
            }

        }, 2000);

    })

}


const getRepositories = (idUser, callback) => {
    
    return new Promise((resolve, reject) => {

        let status = false

        setTimeout(() => {
            console.log('retreive repos from github.')

            if(status == true) {

                resolve(['repos1', 'repos2', 'repos3'])
            }else {
                reject('repos not found!!')
            }

        }, 2000);

    })
}

const getCommits = (repos, callback) => {
    
    return new Promise((resolve, reject) => {

        let status = true

        setTimeout(() => {
            console.log('retreive commits from github.')

            if(status == true) {

                resolve(['commit1', 'commit2', 'commit3'])
            }else {
                reject('commits not found!!')
            }

        }, 2000);

    })
}


getUser(10).then(function(user) {
   console.log(user)
  return getRepositories(user.id)
})
.then(function(repos) {
    console.log(repos)
    return getCommits(repos)
})
.then(function(commits) {
    console.log(commits)
})
.catch(function(error) {
    console.log(error)
})


