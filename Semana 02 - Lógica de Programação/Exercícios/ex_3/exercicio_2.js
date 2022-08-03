function get_projects_actives(projects){
    let actives = [];
    for(const key of projects) {
        if(key.active){
            actives.push(key.name);
        }
    }
    return actives;
}


var user = {
    name: "Lucas",
    projects: [
        {name: "Projeto 1", start: "01/02/2021", active: true},
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
    ]
}

console.log(get_projects_actives(user.projects));