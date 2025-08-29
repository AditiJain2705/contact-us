"use client"
import { useState } from 'react';
import { HiOutlinePhone } from 'react-icons/hi'; // Using HiOutlinePhone for consistency if needed, though not directly in the call button style
import { MdCall } from "react-icons/md";

export default function ExistingCustomerForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        serviceName: '',
        amount: '',
        issueDescription: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = 'Full Name is required.';
        if (!formData.email) {
            tempErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is not valid.';
        }
        if (!formData.phoneNumber) {
            tempErrors.phoneNumber = 'Phone Number is required.';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            tempErrors.phoneNumber = 'Phone Number is not valid (10 digits).';
        }
        if (!formData.companyName) tempErrors.companyName = 'Company Name is required.';
        if (!formData.serviceName) tempErrors.serviceName = 'Service Name is required.';
        if (!formData.amount) {
            tempErrors.amount = 'Amount is required.';
        } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
            tempErrors.amount = 'Amount must be a positive number.';
        }
        if (!formData.issueDescription) tempErrors.issueDescription = 'Please describe your issue.';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Customer support form data submitted:', formData);
            // Here you would typically send the data to an API
            alert('Message sent successfully!');
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                companyName: '',
                serviceName: '',
                amount: '',
                issueDescription: '',
            });
            setErrors({});
        } else {
            console.log('Form has errors.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 md:py-16  px-4">

            <h2 className="font-serif text-3xl md:text-4xl italic text-black mb-4 text-center">Already a customer?</h2>
            <p className="md:text-lg text-black mb-12 text-center ">
                Speak to our Central Relationship Manager for updates / concerns / query related to your service.
            </p>

            <div className="bg-white p-8 rounded-2xl  border border-gray-400 w-full max-w-5xl mb-12">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all`}
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div className="lg:col-span-1">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="hidden lg:block lg:col-span-1 row-span-3">
                        <textarea
                            name="issueDescription"
                            placeholder="Describe your issue here..."
                            value={formData.issueDescription}
                            onChange={handleChange}
                            rows="8"
                            className={`w-full p-3 border ${errors.issueDescription ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all resize-none`}
                        ></textarea>
                        {errors.issueDescription && <p className="text-red-500 text-sm mt-1">{errors.issueDescription}</p>}
                    </div>

                    <div className="lg:col-span-1">
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter Phone no."
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`w-full p-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all`}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>
                    <div className="lg:col-span-1">
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Enter Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            className={`w-full p-3 border ${errors.companyName ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all`}
                        />
                        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                    </div>

                    <div className="lg:col-span-1">
                        <input
                            type="text"
                            name="serviceName"
                            placeholder="Enter service name"
                            value={formData.serviceName}
                            onChange={handleChange}
                            className={`w-full p-3 border ${errors.serviceName ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all`}
                        />
                        {errors.serviceName && <p className="text-red-500 text-sm mt-1">{errors.serviceName}</p>}
                    </div>
                    <div className="lg:col-span-1">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter Amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className={`w-full p-3 pl-8 border ${errors.amount ? 'border-red-500' : 'border-gray-400'} rounded-md focus:ring-gray-400 focus:border-gray-400 transition-all`}
                            />
                        </div>
                        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
                    </div>
                    <div className="lg:col-span-3  flex justify-center mt-2">
                        <button
                            type="submit"
                            className="py-2 px-12 md:px-24 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-700 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </div>

            <p className="text-xl text-gray-700 mb-6 font-semibold">Or</p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <h2 className="text-4xl text-black">  <span className="italic text-5xl text-black  cormorant-text ">Call</span>&nbsp;us directly at</h2>

                <a
                    href="tel:18005710809"
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#0BBF6A] to-[#0CABC8] text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-3xl font-bold"
                >
                    <MdCall className="text-4xl" />
                    <span>1800-571-0809</span>
                </a>
            </div>

            <p className="text-md text-gray-500">Usual time to respond or resolve - 24 Hours</p>
        </div>
    );
}