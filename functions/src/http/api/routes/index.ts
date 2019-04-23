import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to API app!'
  })
});

export = router;
