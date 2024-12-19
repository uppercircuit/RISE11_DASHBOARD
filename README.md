# RISE11 Dashboard

## Overview
The RISE11 Dashboard is a responsive and dynamic user interface built using React.js. The project replicates a given design with a focus on layout precision, functionality, and adaptability across different screen sizes. This repository demonstrates proficiency in creating modern dashboards with modular components and clean coding practices.

---

## Features

### Responsive Design
- Adapts seamlessly to desktop, tablet, and mobile screens.
- Utilizes a mobile-first approach with CSS Grid and Flexbox for layout management.
- Tailored media queries ensure smooth transitions and usability on various devices.

### Form Validation
- Ensures input fields meet specified requirements, preventing empty submissions.
- Validates email format, file upload types, and sizes.

### Dynamic Elements
- Interactive checkboxes and dropdowns with state management.
- File upload functionality with visual feedback and validation.

### Modular Components
- **Sidebar**: Reusable navigation menu with active state highlighting.
- **Dashboard**: Displays the dashboard title and action buttons.
- **ProgressBar**: Dynamically updates based on task completion.


---

## Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS for efficient and responsive design.
- **State Management**: React Context API for managing shared states across components.




## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uppercircuit/RISE11_DASHBOARD.git
   cd RISE11_DASHBOARD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

---

## Approach

1. **Design Analysis**:
   - Carefully studied the provided design and broke it into individual components.

2. **Component-Based Architecture**:
   - Built reusable and modular components for each UI element.

3. **Styling**:
   - Used Tailwind CSS for consistent and scalable styling.
   - Ensured the design matched the provided layout with pixel-perfect precision.

4. **Responsiveness**:
   - Followed a mobile-first approach with responsive utilities from Tailwind.

5. **Interactivity**:
   - Incorporated React state management to handle dynamic UI elements like dropdowns and progress bars.

---

## Challenges and Solutions

### 1. Matching the Design Precisely
- **Challenge**: Ensuring the layout aligns perfectly with the given design.
- **Solution**: Leveraged Tailwind's utility-first classes and custom CSS for fine-tuned adjustments.

### 2. Dynamic Progress Bar
- **Challenge**: Displaying accurate progress based on user input.
- **Solution**: Calculated progress dynamically using React state and conditional rendering.

### 3. Ensuring Responsiveness
- **Challenge**: Making the dashboard usable on all screen sizes.
- **Solution**: Applied media queries and tested across various devices.

### 4. Connecting File Upload Component
- **Challenge**: Allowing users to upload files with proper validation while providing feedback.
- **Solution**: Implemented a controlled file input component with validation for file type and size. Added visual feedback for successful or invalid uploads, ensuring seamless integration with React state.

---

## Assumptions
- Placeholder data is used for dropdowns and forms due to the absence of backend integration.
- Validation rules were inferred based on standard practices.

---

## Screenshots

### Desktop View
![desktop](https://github.com/user-attachments/assets/9199d8d1-d0a5-4286-8f48-0769c8a6a501)


### Tablet View
![tablet](https://github.com/user-attachments/assets/a2aa48ee-97d9-4d5b-b1e8-6d20dc653729)


### Mobile View
![mobile](https://github.com/user-attachments/assets/840b6585-4f64-42fc-89f4-84e657723cfa)

---

