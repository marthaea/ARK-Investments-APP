# Ark Investments

Ark Investments is a dynamic React-based real estate application that allows users to explore, list, and manage properties efficiently. The app integrates Firebase as a backend for data storage and authentication, making it a secure and scalable solution for real estate businesses.

## Features

### User-Friendly Interface

- Explore properties with detailed descriptions and images.
- Search for specific properties by location or type.

### Property Management

- Add new properties, including name, description, price, and image URL.
- View properties in a structured card layout.

### Interactive Map

- Explore highlighted locations in Uganda, including Entebbe, Buwate, and Najjera, through an embedded interactive map.

### Firebase Integration

- Cloud Firestore is used to store property data.
- Allows unauthenticated users to add properties for seamless accessibility.

## Technologies Used

- **React**: For building the front-end user interface.
- **Firebase**: For backend services including Firestore for data and Hosting.
- **CSS**: Custom styling for the app layout.
- **Google Maps**: For interactive map integration.

## Installation

### Prerequisites

- Node.js and npm installed.
- Firebase account set up.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ark-investments.git
   cd ark-investments
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Firebase:

   - Create a Firebase project.
   - Enable Firestore and Hosting.
   - Replace `firebaseConfig` in the `firebase.js` file with your Firebase configuration.

4. Start the development server:

   ```bash
   npm start
   ```

## File Structure

- **src/components**: Contains React components like `Home`, `Properties`, and `AddProperty`.
- **src/firebase.js**: Firebase configuration and initialization.
- **src/styles**: Contains CSS files for styling components.

## Usage

### Adding a Property

1. Navigate to the **Add New Property** section.
2. Fill in the property details, including name, description, price, and image URL.
3. Submit the form to add the property to the database.

### Viewing Properties

- Browse the list of properties on the homepage.
- Each property card displays an image, name, description, and price.

### Map Interaction

- Scroll to the **Explore Uganda** section.
- View highlighted locations via the interactive map.

## Known Issues

- Ensure the image URLs used are publicly accessible (e.g., Imgur links in the correct embed format).
- The app relies on Firestore rules to allow unauthenticated users to add properties.

## Future Enhancements

- Add user authentication for secure property management.
- Implement advanced search and filter options.
- Introduce a booking feature for property tours.
- Optimize for mobile responsiveness.

## Contributors

- **Katusiime Praise Martha**: Front end developer
- **Morgan Owanyi**: Back end developer

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

---

Thank you for using Ark Investments! If you encounter any issues or have suggestions for improvement, feel free to reach out.

