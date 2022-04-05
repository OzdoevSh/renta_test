const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express();

const PORT = 3005;

app.use(cors())
app.use('/api', jsonServer.router('db.json'));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))


app.listen(PORT, () => {
  console.log('SERVER IS RUNNING IN PORT 3005')
})

