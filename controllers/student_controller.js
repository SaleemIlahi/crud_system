
class studentController {

    static getAllDoc = (req,res) => {
        res.render('index',{title: 'Create Student Details'})
    }

    static updateDoc = (req,res) => {
        res.render('update',{title: 'Update Student Details'})
    }

    static studentView = (req,res) => {
        res.render('student',{title: 'Student Details'})
    }
}

module.exports = studentController