const Student = require("../model/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const singleStudent = await Student.findById(id);
    res.status(200).json(singleStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createStudent = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      age,
      gender,
      language: { motherLanguage, desiredLanguage },
      profilePicture,
      userName,
      paswword,
      nationality,
      country,
      description,
      interests,
    } = req.body;
    const newStudent = await Student.create({
      email,
      firstName,
      lastName,
      age,
      gender,
      language: {
        motherLanguage,
        desiredLanguage,
      },
      profilePicture,
      userName,
      password,
      nationality,
      country,
      description,
      interests,
    });
    res.status(201).send(`${newStudent.name} has been created!`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = { getAllStudents, getSingleStudent, createStudent };
