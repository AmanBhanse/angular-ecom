# Angular E-Commerce Site

## Overview

This project is a simple e-commerce website built with Angular. Users can browse products, add them to the cart, and view the total sum of selected items. Please note that the cart currently does not support quantity management for products.

<img width="1693" alt="main-page-2" src="https://github.com/user-attachments/assets/64c2c86d-51ad-49a0-93c1-57e2960ded1b" />

<img width="1693" alt="checkout-2" src="https://github.com/user-attachments/assets/c14b80ad-3090-4a03-a098-b3fd59f13766" />

## Features

- **Product Listing**: Displays a list of available products.
- **Add to Cart**: Users can add products to their shopping cart.
- **Cart Summary**: View selected items with a total price calculation.

## Technologies Used

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Call to actual API : [fakeapistore](https://fakestoreapi.com/docs)

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AmanBhanse/angular-ecom.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd angular-ecom
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run the Application**:
   ```bash
   ng serve
   ```

## Usage

- Browse Products: View the list of available products on the homepage.
- Add to Cart: Click the "Add to Cart" button on a product to add it to your cart.
- View Cart: Click on the cart icon to view selected items and the total price.

## Project Structure

The project follows a standard Angular structure:

- `src/app/`: Contains the main application code.
- `components/`: Holds reusable components like product-list and cart.
- `services/`: Contains services such as product.service.ts and cart.service.ts for handling business logic and data retrieval.
- `pages/`: contains pages

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

**Key Enhancements:**

- **Project Structure**: Added a section detailing the project's structure to help new contributors understand the organization of the codebase.
- **Contribution Guidelines**: Provided a step-by-step guide for contributing to the project, encouraging community involvement.
- **Acknowledgements**: Recognized the major technologies and tools used in the project.

Feel free to integrate this updated `README.md` into your repository. If you have any further questions or need additional modifications, don't hesitate to ask!
