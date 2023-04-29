import { useState } from 'react';
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddBlog(){

    const [title, setTitle] = useState();
    const [titleDescription, setTitleDescription] = useState();
    const [description, setDescription] = useState();
    const [tags, setTags] = useState();
    const [reference, setReference] = useState();
    const [dateTime, setDateTime] = useState();

    const navigate = useNavigate();

    // async function handleSubmitBlog(e){
    //     e.preventDefault();

    //     await axios.post("http://localhost:8070/blogs/add", {
    //         title,
    //         titleDescription,
    //         description,
    //         tags,
    //         reference,
    //         dateTime
    //     }).then(() => {
    //         alert("Blog Added");
    //         navigate('/adminIT21174780/Post/Post');
    //     }).catch((error) => {
    //         console.log(error);
    //         alert("Blog not added");
    //     });
    // }



    function handleSubmitBlog(e) {
        e.preventDefault();

        const formData = {title, titleDescription, description, tags, reference};

        // set Bearer token header
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YmU0ODY0MDM3Y2ZlN2YxMWQ4MDY1IiwiaWF0IjoxNjgyNjk1MzAyLCJleHAiOjE2ODI3ODE3MDJ9.lYVAEt0oiDD_0d7-kcBCwrfDMWHrKEMx3N0kkB-g0Kk';
        const headers = { Authorization: `Bearer ${token}` };

        // submit form data with Axios
        axios.post('http://localhost:5000/api/admin/blog/add', formData, { headers })
            .then(response => {
                console.log('Form submitted successfully!', response);
                alert("Blog Added");
                navigate('/adminIT21174780/Post/Post');
                // do something with the response
            })
            .catch(error => {
                console.error('Form submission failed!', error);
                alert("Blog not added");
                // handle the error
            });
    }



    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const date = new Date();
    const formattedDate = date.toLocaleString('en-IN', options);

    function handleTitleDescriptionChange(e) {
        setTitleDescription(formattedDate);
        setDateTime(date);
    }

    return(
        <div className="container-fluid ">
            <div className="row flex-nowrap">
              <Sidebar></Sidebar>
            <div className="col py-3">
                <div className="row align-items-start">
                    <div className="col-8">
                        <div class="container">
                            <h1>Add Post</h1>
                            <form onSubmit={handleSubmitBlog} class="row g-3 needs-validation" novalidate >
                                <div class="mb-3">
                                    <label for="Tittle" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="Tittle" placeholder="Enter Title" required onChange={(event) => setTitle(event.target.value)} />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="settitleDescription" value={formattedDate} onChange={handleTitleDescriptionChange} required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="mb-3">
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

                                    <div class="valid-feedback">
                                     Looks good!
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="tags" class="form-label">Tags</label>
                                    <select class="form-select" id="tags" required onChange={(event)=>{setTags(event.target.value)}}>
                                        <option value="">Select Tag</option>
                                        <option value="TEACHME">Teach Me</option>
                                        <option value="ADVISEME">Advise Me</option>
                                        <option value="BETTERME">Better Me</option>

                                    </select>
                                    <div class="valid-feedback">
                                        Valid Tag!
                                    </div>
                                    </div>

                                <div class="mb-3">
                                    <label for="reference" class="form-label">Reference</label>
                                    <input type="text" class="form-control" id="reference" 
                                    onChange={(event)=>{setReference(event.target.value)}}
                                    required pattern="https?://.+"
                                    title='Include http://'
                                    />
                                    <div class="valid-feedback">
                                    Valid Link !
                                    </div>
                                </div>
                                {/* <div class="mb-3">
                                    <label for="formFile" class="form-label">Default file input example</label>
                                    <input class="form-control" type="file" id="formFile" required
                                    onChange={(event)=>{setBlogimg(event.target.value)}}
                                    />
                                </div> */}


                                <div className="file-upload-wrapper">
                                <input type="file" id="input-file-now" className="file-upload" />
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
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

export default AddBlog;