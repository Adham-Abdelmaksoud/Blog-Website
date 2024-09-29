import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data.blog);
            })
    }, [id]);

    return (
        <main className="my-10 mx-14 pb-20">
            { blog &&
                <section className="space-y-5">
                    <h1 className="text-4xl font-bold">
                        {blog.title}
                    </h1>
                    <p className="text-xl">
                        {blog.body}
                    </p>
                </section>
            }
        </main>
    );
}
 
export default SingleBlog;