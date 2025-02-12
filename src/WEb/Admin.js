import React, { useEffect, useState } from 'react';
import '../App.css';

const App = () => {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('https://healthcare-rehab-188e7-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json');
                const data = await response.json();
                const patientsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setPatients(patientsArray);
                setFilteredPatients(patientsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPatients();
    }, []);

    useEffect(() => {
        // Filter patients whenever the search term changes
        const filtered = patients.filter(patient => 
            patient.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
            patient.phone?.includes(searchTerm) || 
            patient.diagnosis?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPatients(filtered);
    }, [searchTerm, patients]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="app-container">
            <h1 className='Admin-h1'>Patient Records</h1>
            <input 
                type="text" 
                placeholder="Search by name, phone, or diagnosis..." 
                value={searchTerm} 
                onChange={handleSearch} 
                className="search-bar"
            />
            <table className="patient-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Date</th> 
                        <th>Phone</th>
                        <th>Diagnosis</th>
                        <th>Email</th> 
                        <th>Submission Time</th> {/* New column for Submission Time */}
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.length > 0 ? (
                        filteredPatients.map((patient, index) => (
                            <tr key={patient.id}>
                                <td>{patient.sno}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.sex}</td>
                                <td>{patient.date || 'N/A'}</td> 
                                <td>{patient.phone}</td>
                                <td>{patient.diagnosis}</td>
                                <td>{patient.email || 'N/A'}</td> 
                                <td>{patient.submissionTime ? new Date(patient.submissionTime).toLocaleString() : 'N/A'}</td> {/* Display Submission Time */}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" style={{ textAlign: 'center', color:'red' }}>No records found...!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default App;