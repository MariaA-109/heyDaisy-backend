const Student = require("../model/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
    console.log("populated User", students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
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
      language: { motherLanguage, desiredLanguage },
      email,
      firstName,
      lastName,
      age,
      gender,
      profilePicture,
      userName,
      password,
      nationality,
      country,
      description,
      interests,
    } = req.body;

    const newStudent = await Student.create({
      language: {
        motherLanguage,
        desiredLanguage,
      },
      email,
      firstName,
      lastName,
      age,
      gender,
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

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      language: { motherLanguage, desiredLanguage },
      email,
      firstName,
      lastName,
      age,
      gender,
      profilePicture,
      userName,
      password,
      nationality,
      country,
      description,
      interests,
    } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      {
        language: { motherLanguage, desiredLanguage },
        email,
        firstName,
        lastName,
        age,
        gender,
        profilePicture,
        userName,
        password,
        nationality,
        country,
        description,
        interests,
      },
      { new: true }
    );
    res.status(200).json(newStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await Student.findByIdAndDelete(id);
    res.status(200).send(`${deletedStudent.name} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
