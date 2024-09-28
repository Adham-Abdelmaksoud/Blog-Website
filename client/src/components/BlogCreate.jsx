import { useState } from "react";
import { useNavigate } from "react-router-dom"

const BlogCreate = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [emptyTitle, setEmptyTitle] = useState(false);
    const [emptyBody, setEmptyBody] = useState(false);

    const navigate = useNavigate();

    let newBlog = {
        title: blogTitle,
        body: blogBody
    };

    let handleNewBlogSubmit = () => {
        if(blogTitle !== '' && blogBody !== ''){
            fetch('/api/blogs', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBlog)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else{
            setEmptyTitle(true);
            setEmptyBody(true);
        }
    }

    return (
        <form className="flex flex-col m-10 space-y-8 pb-20">
            <section className="form-item">
                <label htmlFor="blog_title">
                    Title:
                </label>
                <div className="flex flex-col">
                    <input className="bg-slate-200 w-full" onChange={(e) => setBlogTitle(e.target.value)}
                        id="blog_title" type="text" />
                    <p className={emptyBody?"text-red-900 mt-2":"hidden"}>
                        Blog Title Cannot Be Empty!!
                    </p>
                </div>
            </section>

            <section className="form-item">
                <label htmlFor="blog_body">
                    Body:
                </label>
                <div>
                    <textarea className="h-80 bg-slate-200 w-full" onChange={(e) => setBlogBody(e.target.value)} 
                        id="blog_body"></textarea>
                    <p className={emptyBody?"text-red-900 mt-2":"hidden"}>
                        Blog Body Cannot Be Empty!!
                    </p>
                </div>
            </section>

            <button onClick={handleNewBlogSubmit} type="button" className="font-bold text-xl bg-slate-200">
                Create Blog
            </button>
        </form>
    );
}
 
export default BlogCreate;