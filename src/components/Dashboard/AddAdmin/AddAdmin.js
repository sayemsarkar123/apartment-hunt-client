import React, { useEffect, useState } from 'react';
import './addAdmin.css';

const AddAdmin = () => {
    const [email, setEmail] = useState({ email: '' })
    const [emailList, setEmailList] = useState([])

    useEffect(() => {
        fetch(`https://apartment-hunt-2020.herokuapp.com/getAdminEmails`)
            .then(res => res.json())
            .then(data => setEmailList(data))
    }, [])

    const handleOnBlur = (e) => {
        setEmail({ email: e.target.value });
    }

    const handleFormSubmit = (e) => {
        console.log(email)
        fetch('https://apartment-hunt-2020.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert("Admin added successfully!")
                } else {
                    window.alert("This Admin already added!")
                }

            })
        e.preventDefault();
    }

    return (
        <div className="p-4 my-3 main-container">
            <p className="h4  mt-4">Make a New Admin</p>
            <br /> <br />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <form onSubmit={handleFormSubmit}>
                        <label>Email of New Admin</label>
                        <input onChange={handleOnBlur} name="title" type="text" className="form-control" required />
                        <br />
                        <button type="submit" className="submit-btn btn">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="p-3 mt-3">
                        <h5>Email list of admins</h5>
                        <ol>
                            {
                                emailList.map((data, index) => <li key={index}> <span>{data.email}</span> </li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;