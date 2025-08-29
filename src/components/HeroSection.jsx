"use client";
import { useState } from "react";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import CheckCircle from "./CheckCircle";

export default function HeroSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        service: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = "Full Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid.";
        }
        if (!formData.phoneNumber) {
            tempErrors.phoneNumber = "Phone Number is required.";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            tempErrors.phoneNumber = "Phone Number is not valid (10 digits).";
        }
        if (!formData.companyName)
            tempErrors.companyName = "Company Name is required.";
        if (!formData.service) tempErrors.service = "Please select a service.";

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
            console.log("Form data submitted:", formData);
            alert("Form submitted successfully!");
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                companyName: "",
                service: "",
            });
            setErrors({});
        } else {
            console.log("Form has errors.");
        }
    };

    return (
        <div className=" bg-[#F7F7F7]">
            <main className="container max-w-5xl mx-auto px-4 py-8 md:py-16">
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h1 className="text-4xl md:text-4xl  text-gray-900 leading-tight">
                            Talk to an <br />
                            <span className=" text-[#0CABC8] font-semibold text-5xl cormorant-text ">
                                Expert
                            </span>{" "}
                            Today
                        </h1>
                        <p className="mt-4  text-black">
                            Get in touch with our team for any questions.
                        </p>

                        <div className="mt-10 space-y-6 lg:block hidden">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="  text-2xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold   text-black">
                                        Personalized Guidance from Experts
                                    </h3>
                                    <p className="mt-1  text-black">
                                        Get direct access to professional business consultants.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="text-emerald-500 text-2xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-black">
                                        Secure & Confidential Communication
                                    </h3>
                                    <p className="mt-1 text-black">
                                        Your questions and data are protected with high security.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="text-emerald-500 text-2xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-black">
                                        Fast & Friendly Support
                                    </h3>
                                    <p className="mt-1 text-black">
                                        Our team is ready to assist you—expect quick responses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white p-4 md:p-8 rounded-2xl  border border-gray-400">
                            <h2 className="text-2xl  text-black mb-6 cormorant-text ">
                                Please enter your information.
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full text-black p-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.fullName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full text-black p-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Enter Phone no."
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className={`w-full text-black p-3 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.phoneNumber}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Enter Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className={`w-full text-black p-3 border ${errors.companyName ? "border-red-500" : "border-gray-300"
                                            } rounded-md focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                                    />
                                    {errors.companyName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.companyName}
                                        </p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full text-black p-3 border ${errors.service ? "border-red-500" : "border-gray-300"
                                            } rounded-md bg-white focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Consulting">Business Consulting</option>
                                        <option value="Development">Software Development</option>
                                        <option value="Marketing">Digital Marketing</option>
                                        <option value="Support">Customer Support</option>
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full py-2 px-6 bg-gradient-to-r from-[#0BBF6A] to-[#0CABC8] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        Send Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
