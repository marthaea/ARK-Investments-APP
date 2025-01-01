import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import "./properties.css"; // External CSS file for styles

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  // Fetch properties from Firestore
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const propertyList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Properties:", propertyList); // Log the data to check the image URL
        setProperties(propertyList);
        setLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchProperties();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Add property to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "properties"), {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price), // Ensure price is a number
        image: formData.image,
      });
      alert("Property added successfully!");
      setFormData({ name: "", description: "", price: "", image: "" }); // Reset form

      // Refresh property list after adding
      const querySnapshot = await getDocs(collection(db, "properties"));
      const propertyList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProperties(propertyList);
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property. Please try again.");
    }
  };

  return (
    <div className="properties-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Explore Our Properties</h1>
        <p>Find your perfect home or investment property with ARK Investments.</p>
      </section>

      {/* Add Property Section */}
      <section className="add-property">
     <div><h1>You get a privilage to add a property once signed in!</h1>
     <img src="/images/icon2-removebg-preview.png" alt=""></img>
     </div>
    <div className="add-property-card">
    <h2>Add a New Property</h2>
    <form onSubmit={handleSubmit} className="add-property-form">
      <label>
        Property Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className="add-property-btn">
        Add Property
      </button>
    </form>
  </div>
</section>

      {/* Properties Section */}
      <section className="properties-list">
        <h2>Available Properties</h2>
        {loading ? (
          <p className="loading-message">Loading properties...</p>
        ) : properties.length > 0 ? (
          <div className="property-cards">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                {/* Check if the image URL is valid */}
                <img
                  src={property.image ? property.image : "https://via.placeholder.com/150"}
                  alt={property.name}
                  className="property-image"
                  onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Fallback image
                />
                <h3>{property.name}</h3>
                <p className="property-description">{property.description}</p>
                <p className="property-price">${property.price.toLocaleString()}</p>
                <button className="view-details-btn">View Details</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-properties-message">
            No properties available at the moment. Please check back later.
          </p>
        )}
      </section>
    </div>
  );
};

export default Properties;
