import React, { useState } from "react";
import HeroVendre from "../components/HeroVendre";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesRow from "../components/FeaturesRow";
import HowItWorksSection from "../components/HowItWorksSection";
import AppointmentModal from "../components/AppointmentModal";

export default function Vendre() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleFormSubmit = (data) => {
        console.log("Form submitted:", data);
        // Add API call here if needed
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <HeroVendre onOpenModal={handleOpenModal} />
            <FeaturesRow />
            <HowItWorksSection onOpenModal={handleOpenModal} />
            <Footer />

            <AppointmentModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
}
