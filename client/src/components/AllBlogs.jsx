import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState(null);

    const navigate = useNavigate();

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
                    <div key={idx} className="blog-item" onClick={() => navigate(`/blogs/${e.id}`)}>
                        <h1 className="text-3xl font-semibold mb-3">
                            {e.title}
                        </h1>
                        <p className="text-lg">
                            {
                                (e.body.includes('\n') || e.body.length > 20)?
                                    e.body.split('\n')[0].slice(0,20) + '...'
                                :
                                    e.body
                            }
                        </p>
                    </div>
                    )
                })
            )}
        </main>
    );
}
 
export default AllBlogs;