import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            const docRef = doc(db, "properties", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProperty(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };
        fetchProperty();
    }, [id]);

    return property ? (
        <div>
            <h2>{property.name}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
        </div>
    ) : (
        <p>Loading property details...</p>
    );
};

export default PropertyDetails;
