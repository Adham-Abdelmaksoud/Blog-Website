const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.listen(5000, () => {
    console.log('Server is listening for requests...');
});

let blogs = [
    {
        id: 1,
        title: 'blog1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dignissimos nostrum quis accusamus soluta explicabo natus deleniti iure vero asperiores voluptatem beatae adipisci, aperiam minima corrupti ad provident rerum est.'
    },
    {
        id: 2,
        title: 'blog2',
        body: 'some other text'
    }
]

app.use(bodyParser.json());

app.get('/api/blogs', (req, res) => {
    res.json({
        blogs: blogs
    });
});

app.get('/api/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find((e) => e.id === id);
    res.json({
        blog: blog
    });
});

app.post('/api/blogs', (req, res) => {
    let max_id = 0;
    blogs.forEach((e) => {
        if(max_id < e.id){
            max_id = e.id;
        }
    });
    let new_blog = {
        id: max_id+1,
        title: req.body.title,
        body: req.body.body
    }
    blogs.push(new_blog);
    res.json({
        message: 'blog created successfully',
        blogs: blogs
    });
});

app.put('/api/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    blogs.forEach((e) => {
        if(e.id === id){
            e.title = req.body.title,
            e.body = req.body.body
        }
    });
    res.json({
        message: `blog of id=${id} modified successfully`,
        blogs: blogs
    })
})

app.delete('/api/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter((e) => e.id !== id);
    res.json({
        message: `blog of id=${id} deleted successfully`,
        blogs: blogs
    });
})