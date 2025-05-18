# ESLAPMS - Elementary School Learning Assessment and Pupil Management System

ESLAPMS is a comprehensive management system designed for elementary schools to efficiently handle student information, attendance tracking, health records, and more. The system supports multiple user roles including administrators, teachers, and parents.

## Features

- **Student Management**: Track and manage student profiles, records, and information
- **Attendance Tracking**: Record and monitor student attendance
- **Health Records**: Maintain student health information and assessments
- **Parent-Teacher Communication**: Enable communication between parents and teachers
- **Multi-Role System**: Dedicated interfaces for administrators, teachers, and parents
- **DepEd-Compliant Reporting**: Generate reports that comply with Department of Education standards

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15 or higher)
- PHP (v8.0 or higher) for backend
- Composer
- MySQL or MariaDB

### Option 1: Download the Project

1. Download the ZIP file of the project from the repository
2. Extract the ZIP file to your desired location
3. Open a terminal and navigate to the project directory
4. Install dependencies:
   ```
   npm install
   ```

### Option 2: Clone the Repository

1. Open a terminal and navigate to your desired directory
2. Clone the repository:
   ```
   git clone https://github.com/your-username/eslapms.git
   ```
3. Navigate to the project directory:
   ```
   cd eslapms
   ```
4. Install dependencies:
   ```
   npm install
   ```

## Frontend Setup

1. Configure the environment variables if needed:

   - Open `src/environments/environment.ts` and `src/environments/environment.development.ts`
   - Update the `apiUrl` if your backend runs on a different URL

2. Run the development server:

   ```
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`

## Backend Setup

The backend system is built with Laravel and can be set up using XAMPP:

### Using XAMPP

1. Download and install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/)

2. Start Apache and MySQL services from the XAMPP Control Panel

3. Create a new database:

   - Open your browser and go to `http://localhost/phpmyadmin`
   - Click on "New" in the left sidebar
   - Enter "eslapms" as the database name
   - Click "Create"

4. Download or clone the backend repository:

   ```
   git clone https://github.com/your-username/eslapms-backend.git
   ```

5. Navigate to the backend directory:

   ```
   cd eslapms-backend
   ```

6. Install PHP dependencies:

   ```
   composer install
   ```

7. Copy the example environment file:

   ```
   cp .env.example .env
   ```

8. Generate an application key:

   ```
   php artisan key:generate
   ```

9. Configure your database connection in the `.env` file:

   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=eslapms
   DB_USERNAME=root
   DB_PASSWORD=
   ```

   Note: The default XAMPP MySQL password is empty. If you've set a password, include it here.

10. Run database migrations and seeders:

    ```
    php artisan migrate --seed
    ```

11. Generate JWT secret key:

    ```
    php artisan jwt:secret
    ```

12. You can either:

    - Use XAMPP's built-in PHP server by copying the backend to the `htdocs` folder:
      - Copy the entire backend folder to `C:\xampp\htdocs\` (Windows) or `/Applications/XAMPP/htdocs/` (Mac)
      - Access the API at `http://localhost/eslapms-backend/public/api`
    - OR start Laravel's development server:
      ```
      php artisan serve
      ```
      - Access the API at `http://localhost:8000/api`

### Alternative Backend Setup (Without XAMPP)

If you prefer not to use XAMPP, you can also set up the backend using:

1. Download or clone the backend repository:

   ```
   git clone https://github.com/your-username/eslapms-backend.git
   ```

2. Navigate to the backend directory:

   ```
   cd eslapms-backend
   ```

3. Install PHP dependencies:

   ```
   composer install
   ```

4. Copy the example environment file:

   ```
   cp .env.example .env
   ```

5. Generate an application key:

   ```
   php artisan key:generate
   ```

6. Configure your database connection in the `.env` file:

   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=eslapms
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

7. Run database migrations and seeders:

   ```
   php artisan migrate --seed
   ```

8. Generate JWT secret key:

   ```
   php artisan jwt:secret
   ```

9. Start the development server:
   ```
   php artisan serve
   ```

The backend API will be available at `http://localhost:8000/api`.

### Building for Production

To build the frontend application for production:

```
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Sta. Maria Central School for their collaboration and support
- Department of Education (DepEd) for providing the standards and requirements
