import React from "react";
import { Icon } from "@iconify/react";
import { FeatureIconCard } from "./ui/FeatureIconCard";

export default function FeaturesRow() {
    return (
        <section className="bg-white py-14 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <FeatureIconCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                className="h-12 w-12 text-red-600"
                            >
                                <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
                                    <rect width="30" height="36" x="9" y="8" rx="2"></rect>
                                    <path strokeLinecap="round" d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"></path>
                                </g>
                            </svg>
                        }
                        title="Transaction sécurisée"
                        description="Nous gérons toutes les transactions de manière sécurisée et professionnelle."
                    />

                    <FeatureIconCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2048"
                                height="2048"
                                viewBox="0 0 2048 2048"
                                className="h-12 w-12 text-red-600"
                            >
                                <path fill="currentColor" d="M2048 384v1280H128v-256H0V256h1792v128zm-512 0q0 27 10 50t27 40t41 28t50 10V384zM128 512q27 0 50-10t40-27t28-41t10-50H128zm0 512q53 0 99 20t82 55t55 81t20 100h1024q0-53 20-99t55-82t81-55t100-20V640q-53 0-99-20t-82-55t-55-81t-20-100H384q0 53-20 99t-55 82t-81 55t-100 20zm1536 128q-27 0-50 10t-40 27t-28 41t-10 50h128zM128 1280h128q0-27-10-50t-27-40t-41-28t-50-10zm1792-768h-128v896H256v128h1664zM448 896q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m896 0q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m-448 256q-53 0-99-20t-82-55t-55-81t-20-100V768q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100v128q0 53-20 99t-55 82t-81 55t-100 20M768 896q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50V768q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50z"></path>
                            </svg>
                        }
                        title="Un prix juste"
                        description="Nous vous proposons un prix compétitif basé sur le marché actuel."
                    />

                    <FeatureIconCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="640"
                                height="512"
                                viewBox="0 0 640 512"
                                className="h-12 w-12 text-red-600"
                            >
                                <path fill="currentColor" d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2m22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8zM16 128c-8.8 0-16 7.2-16 16v208c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zm32 192a16 16 0 1 1 0 32a16 16 0 1 1 0-32m496-192v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16zm32 208a16 16 0 1 1 32 0a16 16 0 1 1-32 0"></path>
                            </svg>
                        }
                        title="Service sans engagement"
                        description="Vous décidez d'accepter notre offre ou de garder votre voiture."
                    />
                </div>
            </div>
        </section>
    );
}
