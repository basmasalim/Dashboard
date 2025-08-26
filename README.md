# Angular User Dashboard

A simple Angular application that displays a list of users with search, filtering, and detailed view functionality.  
This project demonstrates the use of **Angular Standalone Components**, **Routing**, **HTTP requests**, and **custom pipes**.

---

## 🚀 Features
- User Dashboard with paginated list of users
- Search users by **First Name**, **Last Name**, or **ID**
- Detailed User Information page
- Responsive UI with PrimeNG
- Loading indicator service
- Clean project structure with services and interfaces

---

## 🛠️ Tech Stack
- [Angular 20](https://angular.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [PrimeNG](https://primeng.org/) (UI components)  

---

## 📂 Project Structure
```

src/
├── app/
│   ├── core/
│   │   ├── interfaces/   # Shared interfaces
│   │   └── services/     # API services
│   ├── pages/
│   │   ├── dashboard/    # Dashboard page
│   │   └── details/      # User details page
│   └── app.routes.ts     # Routing configuration
└── environments/         # Environment configs

````

---

## ⚙️ Setup & Installation

1. Clone the repository
   ```bash
   git clone https://github.com/basmasalim/Dashboard.git
   cd YOUR_REPO_NAME
``

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   ng serve
   ```

   App will be available at 👉 `http://localhost:4200`

---

## 🏗️ Build

To build the project for production:

```bash
ng build --configuration production
```

---

## 📸 Screenshots

### Dashboard

![Dashboard Screenshot](./screenshots/dashboard.png)

### User Details

![User Details Screenshot](./screenshots/details.png)

---

## 🤝 Contributing

Contributions are welcome!

* Fork the repo
* Create a feature branch (`git checkout -b feature-name`)
* Commit your changes (`git commit -m "Added new feature"`)
* Push to the branch (`git push origin feature-name`)
* Open a Pull Request 🎉
