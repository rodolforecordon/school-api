import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`CRTL + Clique em http://localhost:${port}`);
});
