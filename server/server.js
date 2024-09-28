const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.listen(5000, () => {
    console.log('Server is listening for requests...');
});

let blogs = [
    {
        title: 'blog1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dignissimos nostrum quis accusamus soluta explicabo natus deleniti iure vero asperiores voluptatem beatae adipisci, aperiam minima corrupti ad provident rerum est.'
    },
    {
        title: 'blog2',
        body: 'some other text'
    }
]

app.use(bodyParser.json());

app.get('/api/blogs', (req, res) => {
    console.log(req.protocol, req.hostname, req.path);
    res.json({
        blogs: blogs
    });
});

app.post('/api/blogs', (req, res) => {
    console.log(req.body);
    blogs.push(req.body);
    res.json({
        message: 'blog created successfully',
        blogs: blogs
    });
});