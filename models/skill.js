const skills = [
    {id:1 ,skill:"HTML",done:true},
    {id:2 ,skill:"JAVASCRIPT",done:true},
    {id:3 ,skill:"TESTING/DEBUGGING",done:false},
    {id:4 ,skill:"DATABASE",done:false},
    {id:5 ,skill:"GIT",done:true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
    
  };

function getAll(){
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill){
    skill.id = Date.now() % 1000000;
    
    skill.done = false;
    skills.push(skill);
}
function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}
function update(id, skill){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills[idx].skill = skill;
}
