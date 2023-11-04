import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mário ',
      sobrenome: 'Gomes',
      Datanascimento: new Date(1999, 2, 9),
    });
    res.json({ success: true, message: 'Ok', data: novoAluno });
  }
}

export default new HomeController();
