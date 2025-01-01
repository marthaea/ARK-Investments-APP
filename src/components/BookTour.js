import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import './booktour.css'; // Import the external CSS file

const BookTour = () => {
    const [formData, setFormData] = useState({ name: "", email: "", property: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set loading state
        try {
            await addDoc(collection(db, "bookings"), formData); // Add booking to Firestore
            alert("Tour booked successfully!");
            setFormData({ name: "", email: "", property: "" }); // Reset form
        } catch (error) {
            console.error("Error booking tour:", error);
            alert("Failed to book the tour. Please try again.");
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    return (
        <div className="book-tour-container">
            <h2 className="book-tour-heading">Book a Tour</h2>
            <p className="book-tour-instructions">
            Would you like to book a tour? <br></br>
Welcome to our tour booking page! Please fill out the form below to schedule a 
property tour.<br></br>

 Make sure to provide accurate information so we can contact you.
</p>
            <form onSubmit={handleSubmit} className="book-tour-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="book-tour-input"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="book-tour-input"
                />
                <input
                    type="text"
                    placeholder="Property Name"
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    required
                    className="book-tour-input"
                />
                <button type="submit" disabled={isSubmitting} className="book-tour-button">
                    {isSubmitting ? "Booking Tour..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default BookTour;
