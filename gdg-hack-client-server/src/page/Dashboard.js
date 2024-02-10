import React, { useState } from 'react';
import SearchBar from '../component/SearchBar.js';
import hackathonsData from '../data/hackathonsData.js';
import EventImg from '../Logo/EventImg.png';

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    };

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
    };

    const filteredHackathons = hackathonsData.filter(hackathon =>
        (hackathon.name.toLowerCase().includes(searchQuery.toLowerCase()) || hackathon.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedDate === '' || hackathon.date >= selectedDate)
    );

    return (
        <div className='overflow-y-scroll h-[90vh]'>
            <div className='flex justify-between mx-28 mt-10 '>
                <h1 className='w-[400] text-[35px] font-sans'>Discover Our Dashboard</h1>
                <div className='flex items-center'>
                    <SearchBar onChange={handleSearch} />
                    <input
                        style={{ backgroundColor: 'rgba(211, 211, 211, 0.663)' }}
                        className='h-[50px] rounded-full px-6 mx-2 outline-none shadow-xl text-[23px]'
                        type="date"
                        id="dateInput"
                        onChange={handleDateChange}
                    />
                </div>
            </div>

            {/* events  */}
            <div className='grid grid-cols-2 gap-4 mx-20 my-16'>
                {filteredHackathons.map((hackathon, index) => (
                    <div key={index} style={{ backgroundColor: '#D9F3E5' }} className='flex py-8 px-10 rounded-2xl mx-2 w-full'>
                        <img src={EventImg} alt={hackathon.name} className='w-[30%]' />
                        <div className='px-10'>
                            <p className='font-bold text-xl'>{hackathon.name}</p>
                            <p className='text-gray-400 text-xl'>{hackathon.description}</p>
                            <div className='flex items-center justify-between py-4'>
                                <button className='bg-green-500 px-8 rounded-full'>{hackathon.date}</button>
                                <h1>real life</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
