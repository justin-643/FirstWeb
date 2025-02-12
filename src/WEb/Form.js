import React, { useState, useEffect } from 'react';
import '../App.css';

const App = () => {
    const [sno, setSno] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: 'Male',
        email: '',
        phone: '',
        diagnosis: '',
        date: '',
        submissionTime: '' // Add submissionTime field
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Update S.No when the component mounts
        setSno(prevSno => prevSno);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Set the current date and time as submissionTime
        const currentTime = new Date().toISOString(); // ISO format
        const dataToSubmit = { sno, ...formData, submissionTime: currentTime };

        try {
            const response = await fetch('https://healthcare-rehab-188e7-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json', {
                method: 'POST',
                body: JSON.stringify(dataToSubmit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setSuccessMessage('Your appointment has been booked successfully!');
                setFormData({
                    name: '',
                    age: '',
                    sex: 'Male',
                    email: '',
                    phone: '',
                    diagnosis: '',
                    date: '',
                    submissionTime: '' // Reset submissionTime field
                });
                setSno(prevSno => prevSno + 1); // Increment S.No for next entry
            } else {
                setSuccessMessage('Error submitting data. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccessMessage('Error submitting data. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h1>Patient Information Form</h1>
            <form className='patient-form' onSubmit={handleSubmit}>
                <label htmlFor="sno">S.No:</label>
                <input type="number" className='Input-F' id="sno" name="sno" value={sno} readOnly /> <br/>

                <label htmlFor="name">Name:</label>
                <input className='Input-F' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /> <br/>

                <label htmlFor="age">Age:</label>
                <input className='Input-F' type="number" id="age" name="age" value={formData.age} onChange={handleChange} required /> <br/>

                <label htmlFor="sex">Sex:</label>
                <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required> 
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select> <br/>

                <label htmlFor="email">Email:</label>
                <input className='Input-F' type="email" id="email" name="email" value={formData.email} onChange={handleChange} /> <br/>

                <label htmlFor="date">Date:</label>
                <input className='Input-F' type="date" id="date" name="date" value={formData.date} onChange={handleChange} required /> <br/>

                <label htmlFor="phone">Phone:</label>
                <input className='Input-F' type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /> <br/>

                <label htmlFor="diagnosis">Diagnosis:</label>
                <textarea id="diagnosis" name="diagnosis" value={formData.diagnosis} onChange={handleChange} required></textarea><br/>

                <button type="submit" className='Btn-F'>Submit</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default App;