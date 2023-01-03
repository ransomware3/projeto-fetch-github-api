const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUserProfile(user){
        this.userProfile.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                             <div class="data">
                                 <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                 <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p><br>
                                 <p>👤 Seguidores: ${user.followers ?? 'Não possui seguidores 😥'}</p>
                                 <p>👥 Seguindo: ${user.following ?? 'Não está seguindo ninguém 😥'}</p>
                             </div>
                         </div>`
    },
    renderUserRepos(user){
        let repositoriesItens = ''
        user.repositories.forEach((repo) => {repositoriesItens += `<li>
                                                                        <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                            <div class="info-itens">
                                                                                <div class="info-item">👨‍💻 ${repo.forks}
                                                                                </div>
                                                                                <div class="info-item">⭐ ${repo.stargazers_count}
                                                                                </div>
                                                                                <div class="info-item">👀 ${repo.watchers}
                                                                                </div>
                                                                                <div class="info-item">💻 ${repo.language ?? 'linguagem não definida'}
                                                                                </div>
                                                                           </div>
                                                                        </a>
                                                                  </li>`
        })

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    },
    renderUserEvents(user){
        let validTypesOfEvents = user.events.filter((item) => {
            return item.type === 'PushEvent' || item.type === 'CreateEvent'
        })

        let eventItens = ''
        validTypesOfEvents.forEach((e) => {
            let repositoryName = e.repo.name

            if(e.payload.commits){
                let commits = e.payload.commits[0].message
                eventItens += `<li>
                                    <p><span>${repositoryName}</span> - ${commits}</p><br>
                               </li>`
            }
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="event section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                          </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }