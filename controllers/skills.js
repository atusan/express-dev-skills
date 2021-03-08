const Skill = require('../models/skill')

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  update,
  edit
};

function deleteSkill(req, res){
  Skill.deleteOne(req.params.id);
  res.redirect('/skills')
}

function create(req, res){
  console.log(req.body, 'req.body')

  // WE'll use our model to create the skill
  Skill.create(req.body)
  res.redirect('/skills')
}

function update(req,res){
  console.log(req.body, 'req.body')
  Skill.update(req.params.id,req.body.skill);

  // Skill.findOneAndUpdate({"_id":req.params.id}, req.body, function(err, skill){
    res.redirect('/skills');
  // })
}

function edit(req,res){
  res.render('skills/edit',{
  skill: Skill.getOne(req.params.id)
  })

}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}

function show(req, res){
  console.log(req.params, 'req.params in show route')
  res.render('skills/show', {
      skill: Skill.getOne(req.params.id)
  })
}

function newSkill(req,res){
  res.render('skills/new');
}


  
  
  

  