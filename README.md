# Woodland Haven

Woodland Haven is a luxurious small hotel with wooden cabins nestled in nature. This web app, built with React using Vite, is designed for internal use by hotel staff. The authentication system is implemented with the Supabase auth API to ensure that only authorized hotel employees can access the app.

## Features

- **Authentication:** Secure login system for hotel employees, with the ability to add new accounts for new employees.

- **Navigation:**

  - Sidebar navigation with five pages: Home, Bookings, Cabins, Users, Settings.
  - Top navigation menu displaying the user's profile picture and name.
  - Buttons for updating user data and password, changing app color mode, and logging out.

- **Dashboard (Home Page):**

  - Overview of arriving and departing guests.
  - Check-in and check-out functionality for guests.
  - Statistics on the number of bookings, stays, sales chart, occupancy rate, etc., for different periods (7, 30, or 90 days).

- **Bookings Page:**

  - Paginated table displaying all bookings.
  - Sorting by date and amount of money spent.
  - Filtering by booking status (checked out, checked in, unconfirmed).
  - Modal menu for checking in, deleting, or viewing detailed booking information.

- **Cabins Page:**

  - View and manage all cabins.
  - Add new cabins.
  - Sorting by name, price, and capacity.
  - Filtering based on discounts.

- **Users Page:**

  - Create new user accounts.

- **Settings Page:**
  - Adjust app settings, including min and max nights and guests per booking.
  - Set breakfast prices.

## Technologies Used

- **React Query:** Global remote state management.
- **Styled Components:** Styling the app with the use of global variables.
- **React Hook Form:** Handling forms efficiently.
- **Supabase:** Backend for authentication and data storage.
- **Compound Component Pattern:** For modular and reusable UI components.
- **Recharts:** Chart library for displaying charts on the dashboard.
- **Dark Mode:** Implemented using React context.

## Live Preview

The project is deployed on Vercel and can be live previewed [here](https://woodland-haven-99j5urmbi-s-srdjans-projects.vercel.app).
