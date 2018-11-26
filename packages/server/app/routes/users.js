const router = require('express').Router();
const readUser = require('../works/readUser');
const updateUser = require('../works/updateUser');
const User = require('../model/User');

router.get('/:id', async (req, res, next) => {
  const id = decodeURIComponent(req.params.id);
  
  try {
    const data = await readUser(id);
    const status = data ? 200 : 204;
  
    res.status(status).json(data);
  } catch (e) {
    next(`[get] /users/:id\n${e.message}`);
  }
});

router.post('/', async (req, res, next) => {
  const { email } = req.body;
  
  try {
    const user = new User({
      email,
      nickname: email
    });
    
    const data = await user.save();
    
    res.status(201).json({
      id: data.id,
      email: data.email,
      nickname: data.nickname,
      phone: data.phone,
      fields: data.fields,
      summary: data.summary,
      description: data.description,
      mentees: data.mentees,
      mentors: data.mentors
    });
  } catch (e) {
    next(`[post] /users/\n${e.message}`);
  }
});

router.post('/login', async (req, res, next) => {
  const { email } = req.body;
  
  try {
    const data = await User.findOne({ email });
    
    if (data) {
      res.status(200).json({
        id: data.id,
        email: data.email,
        nickname: data.nickname
      });
    } else {
      res.status(204).json({
        message: 'check a email'
      })
    }
  } catch (e) {
    next(`[post] /users/login\n${e.message}`);
  }
});

router.put('/:id', async (req, res, next) => {
  const id = decodeURIComponent(req.params.id);
  const {
    email,
    nickname,
    phone,
    summary,
    description,
  } = req.body;
  
  const fields = Array.isArray(req.body.fields) ? req.body.fields : JSON.parse(req.body.fields);
  
  try {
    await updateUser(id, email, phone, nickname, fields, summary, description);
  
    res.status(200).json({
      message: 'update success'
    });
  } catch (e) {
    next(`[put] /users/:id\n${e.message}`);
  }
});

module.exports = router;
