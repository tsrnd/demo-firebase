import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(`Hello from API app. path=${req.path}`);
});

export = router;
