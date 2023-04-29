import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles for React-Quill
function UpdatePost() {

const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(date.toLocaleString('en-IN', options));

    const [title,setTitle]=useState()
    const [titleDescription,setTitleDescription]=useState()
    const [description,setDescription]=useState()
    const [tags,setTags]=useState()
    const [reference,setReference]=useState()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getBlogById()
    }, [])

    async function getBlogById() {
        await axios.get(`http://localhost:8070/blogs/get/${id}`).then((res) => {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setTags(res.data.tags)
            setReference(res.data.reference)
            setTitleDescription(res.data.titleDescription)
            console.log(res.data)
        }).catch((error) => {
            alert("Failed to fetch blogs")
        })
    }



    async function handleUpdate(e) {
        e.preventDefault();
        await axios.put(`http://localhost:8070/blogs/update/${id}`, { title, titleDescription, description, tags, reference }).then(() => {
            alert("Blog Updated")
            navigate('/adminIT21174780/Post/Post')
        }).catch((error) => {
            console.log(error)
            alert("Blogg not Updated")
        })
    }
    return (
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <Sidebar></Sidebar>
                    <div className="col py-3">
                        <div className="row align-items-start">
                            <div className="col-8">
                                <div className="container">
                                    <h1>Add Post</h1>
                                    <form onSubmit={handleUpdate} className="row g-3 needs-validation" noValidate>
                                        <div className="mb-3">
                                            <label htmlFor="Tittle" className="form-label">Tittle</label>
                                            <input type="text" className="form-control" id="Tittle" placeholder="Enter Tittle" required
                                                value={title}
                                                onChange={(event) => { setTitle(event.target.value) }}
                                            />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="tittledescription" required
                                                value={titleDescription}
                                                onChange={(event) => { setTitleDescription(event.target.value) }}
                                                readonly
                                            />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label >Description</label>
                                            <ReactQuill
                                        value={description}
                                        onChange={setDescription}
                                        modules={{
                                            toolbar: [
                                            [{ 'header': [1, 2, 3, false] }],
                                            ['bold', 'italic', 'underline', 'strike'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['link', 'image'],
                                            ['clean'],
                                            ],
                                        }}
                                        minlength="100"
                                        />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="tags" className="form-label">Tags</label>
                                            <input type="text" className="form-control" id="tags" required
                                                value={tags}
                                                onChange={(event) => { setTags(event.target.value) }}
                                            />
                                            <div className="valid-feedback">
                                                Valid Tag!
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reference" className="form-label">Reference</label>
                                            <input type="text" className="form-control" id="reference" required
                                                value={reference}
                                                onChange={(event) => { setReference(event.target.value) }}
                                            />
                                            <div className="valid-feedback">
                                                Valid Link!
                                            </div>
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div> */}
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default UpdatePost;