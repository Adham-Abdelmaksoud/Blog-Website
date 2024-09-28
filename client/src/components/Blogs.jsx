import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('/api/blogs')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data.blogs);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="flex flex-col justify-center items-center m-5 space-y-5 pb-20">
            {blogs && (
                blogs.map((e, idx) => {
                    return (
                    <div key={idx} className="blog-item">
                        <h1 className="text-3xl font-semibold mb-3">
                            {e.title}
                        </h1>
                        <p className="text-lg">
                            {e.body}
                        </p>
                    </div>
                    )
                })
            )}
        </main>
    );
}
 
export default Blogs;