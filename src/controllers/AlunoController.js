import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll({ attributes: ['id', 'nome', 'sobrenome', 'Datanascimento'] });
    res.json({ success: true, message: 'Ok', data: aluno });
  }
}

export default new AlunoController();
