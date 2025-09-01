// components/ConsultationRecordTable.js
"use client"
import React, { useState } from 'react';
import CheckCircle from './CheckCircle'; // Adjust path if needed
import { FaChevronDown } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ConsultationRecordTable = () => {
    const [activeTab, setActiveTab] = useState('consultation'); // 'consultation' or 'success'

    const primaryColor = '#DC91FF'; // Your primary hex code
    const secondaryColor = '#B993E7'; // Your secondary hex code
    const lightGreyColor = '#ABCDD2'; // For disabled checks/text
    const lightPinkColor = '#F4B7B7'; // Another accent color, not explicitly used but included

    // Data for the Consultation Record tab
    const consultationData = [
        {
            company: 'Shah Emmmpire Pvt. Ltd.',
            service: 'Funding',
            keyDeliverables: ['Pitch Deck', 'Financial Doc', 'Application Process'],
            status: {
                document: true,
                application: true,
                interview: true,
                dueDiligence: false,
                disbursement: false,
            },
        },
        {
            company: 'Health Anchor Private Limited',
            service: 'Funding',
            keyDeliverables: ['Pitch Deck', 'Financial Doc', 'Application Process', 'Interview'],
            status: {
                document: true,
                application: true,
                interview: true,
                dueDiligence: true,
                disbursement: false,
            },
        },
        {
            company: 'QuickTera 3D',
            service: 'Funding',
            keyDeliverables: ['Pitch Deck', 'Financial Doc', 'Application Process', 'Interview'],
            status: {
                document: true,
                application: true,
                interview: true,
                dueDiligence: true,
                disbursement: true,
            },
        },
        {
            company: 'Architanz Technologies Pvt. Ltd.',
            service: 'Funding',
            keyDeliverables: ['Pitch Deck', 'Financial Doc', 'Application Process'],
            status: {
                document: true,
                application: true,
                interview: false,
                dueDiligence: false,
                disbursement: false,
            },
        },
        {
            company: 'QuickTera 3D',
            service: 'Funding',
            keyDeliverables: ['Pitch Deck', 'Financial Doc', 'Application Process', 'Interview'],
            status: {
                document: true,
                application: true,
                interview: true,
                dueDiligence: true,
                disbursement: true,
            },
        },
        // Add more consultation records here
    ];

    // Data for the Success Record tab (example structure, modify as needed)
    const successData = [
        {
            company: 'Another Success Co.',
            service: 'Acquisition',
            keyDeliverables: ['Pitch Deck', 'Financial Doc', 'Term Sheet'],
            status: {
                document: true,
                application: true,
                interview: true,
                dueDiligence: true,
                disbursement: true,
            },
        },
        // Add more success records here
    ];

    const currentData = activeTab === 'consultation' ? consultationData : successData;

    const renderStatusItem = (label, isCompleted) => (
        <div className="flex flex-col items-center">
            {isCompleted ? <CheckCircle className={`w-3 h-3 ${isCompleted ? `text-[${primaryColor}]` : `text-[${lightGreyColor}]`}`} /> : <IoIosCheckmarkCircle className='text-gray-300' />
            }
            <span className={`text-[8px] mt-1 ${isCompleted ? `text-gray-700` : `text-[${lightGreyColor}]`}`}>{label}</span>
        </div>
    );

    return (<div className="min-h-screen max-w-md mx-auto">
        {/* Tabs Section */}
        <div className="flex justify-center mx-5 relative z-20 rounded-full overflow-hidden shadow-md bg-gradient-to-r from-[#DC91FF] via-[#B993E7] to-[#ABCDD2] p-2">
            <button
                className={`flex-1 py-2 text-sm font-semibold cormorant-text transition-all duration-300 text-black ${activeTab === 'consultation' ? 'rounded-full' : ''
                    }
                    ${activeTab === 'consultation' ? 'bg-gradient-to-b from-gray-300 via-white to-white ' : 'transparent'}
                    `}

                onClick={() => setActiveTab('consultation')}
            >
                Consultation Record
            </button>
            <button
                className={`flex-1 py-2 text-sm font-semibold cormorant-text transition-all duration-300 ${activeTab === 'success' ? 'rounded-full' : ''
                    } ${activeTab === 'success' ? 'bg-gradient-to-b from-gray-300 via-white to-white ' : 'transparent'}`}

                onClick={() => setActiveTab('success')}
            >
                Success Record
            </button>
        </div>

        {/* White Card */}
        <div className="bg-white border border-gray-400 relative z-10 rounded-3xl p-2 -mt-6 ">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-600  px-2 pt-10">
                <div className="col-span-4 text-center flex justify-center rounded-t-lg p-3 bg-black text-white">COMPANY</div>
                <div className="col-span-4 flex gap-1 items-center rounded-t-lg py-1 px-3 bg-black text-white">

                    <div>SERVICE<br />
                        <span className='cormorant-text'>Consultation</span></div><FaChevronDown />
                </div>
                <div className="col-span-4 text-center bg-[#F4B7B7] rounded-t-lg flex items-center p-3 justify-center px-3 text-[11px] text-black cormorant-text font-semibold">Key Deliverables</div>
            </div>

            {/* Table Rows */}
            {currentData.map((record, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-400 mb-4 overflow-hidden relative">
                    <div className="grid grid-cols-12 items-stretch pt-7 pb-3 px-2 border-b border-gray-100">
                        <div className=" text-white bg-black absolute top-0 left-0 font-medium text-[11px] px-2 py-0.5 rounded-ee-lg">
                            {index + 1}.
                        </div>
                        <div className="col-span-4 text-left border-r border-r-gray-300 flex  items-center">
                            <h3 className="text-xs text-left  text-black  leading-tight">{record.company}</h3>
                        </div>
                        <div className="col-span-3 border-r border-r-gray-300 flex justify-center items-center">
                            <div className="relative text-center text-black      text-sm font-semibold">

                                {record.service}

                            </div>
                        </div>
                        <div className="col-span-5 flex flex-wrap gap-1 pl-2">
                            {record.keyDeliverables.map((deliverable, dIndex) => (
                                <span
                                    key={dIndex}
                                    className="px-1 border border-gray-300 text-black text-[8px] rounded-md whitespace-nowrap"
                                >
                                    {deliverable}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Status Section */}
                    <div className="bg-[#F8F8F8] py-3 border-t border-t-gray-300 flex items-center justify-between px-1">
                        <div className="text-xs font-semibold text-black mb-2 pl-1">STATUS</div>
                        <div className="grid grid-cols-5 gap-2 text-center">
                            {renderStatusItem('Document', record.status.document)}
                            {renderStatusItem('Application', record.status.application)}
                            {renderStatusItem('Interview', record.status.interview)}
                            {renderStatusItem('Due Diligence', record.status.dueDiligence)}
                            {renderStatusItem('Disbursement', record.status.disbursement)}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    );
};

export default ConsultationRecordTable;