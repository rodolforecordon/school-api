import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      first_name: 'Rodolfo',
      last_name: 'Recordon',
      email: 'rodolfo@gmail.com',
      age: 33,
      weight: 68,
      height: 1.73,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
