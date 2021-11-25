
const studentModel = require('../model/student_Schema.js')

class studentController {

    static createDocPage = (req, res) => {
        res.render('index', { title: 'Create Student Details' })
    }

    static createDoc = async (req, res) => {
        try {
            const {name,course,percent} = req.body
            const doc = new studentModel({
                name,
                course,
                percent
            })
            // Saving Document
            await doc.save()

            res.redirect('/view')
        } catch (error) {
            console.log(error)
        }
    }


    static updateDoc = async (req, res) => {
        try {
            await studentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/view')
        } catch (error) {
            console.log(error)
        }
    }

    static updateDocPage = async (req, res) => {
        try {
            const result = await studentModel.findById(req.params.id)
            res.render('update', { title: 'Update Student Details',data: result })
        } catch (error) {
            console.log(error)
        }
    }

    static deleteDoc = async (req, res) => {
        try {
            await studentModel.findByIdAndDelete(req.params.id)
            res.redirect('/view')
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await studentModel.find()
            res.render('student', { title: 'Student Details', data: result })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = studentController