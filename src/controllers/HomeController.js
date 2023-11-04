class HomeController {
  async index(req, res) {
    res.json({ success: true, message: 'Ok', data: 'Index' });
  }
}

export default new HomeController();
