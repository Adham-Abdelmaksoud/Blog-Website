import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);

    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data.blog);
            })
    }, [id]);

    const handleEdit = () => {
        navigate(`/blogs/${id}/edit`);
    }

    const handleDelete = () => {
        fetch(`/api/blogs/${id}`, {method: 'delete'})
            .then((res) => res.text())
            .then((data) => {
                console.log(data);
                navigate('/');
            })
    }

    return (
        <main className="flex flex-row justify-between pb-20 px-14 pt-10">
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

            <aside>
                <figure className="w-20 px-1">
                    <img className="settings mb-1" onClick={() => setShowDropDown(!showDropDown)} src="../public/setting.png" alt="settings" />
                </figure>
                { showDropDown &&
                    <ul className="dropdownlist">
                        <li onClick={handleEdit}>Edit</li>
                        <li onClick={handleDelete}>Delete</li>
                    </ul>
                }
            </aside>
        </main>
    );
}
 
export default SingleBlog;