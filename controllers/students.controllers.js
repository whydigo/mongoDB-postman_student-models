const Student = require('../models/Student.model')
module.exports.studentsController = {
  getStudents: function (req, res) {
    Student.find().then(student => { res.json(student) })
  },

  postStudents: function (req, res) {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then((data) => {
      res.json(data)
    })
  },

  deleteStudents: function (req, res) {
    Student.findByIdAndRemove(req.params.studentId).then( () => { res.json('deleted') })
  },
  patchStudents: function (req, res) {
    Student.findByIdAndUpdate(
      req.params.studentId, {
      name: req.body.name,
      phone: req.body.phone,  
      age: req.body.age

    },
      { new: true }).then(student => { res.json(student) })
  },
};