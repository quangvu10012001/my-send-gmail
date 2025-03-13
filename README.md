# 🚀 Electron React Gmail Sender Boilerplate  

A modern **Electron + React + TypeScript** boilerplate featuring **Ant Design UI**, **EJS templating**, and **Gmail sending functionality using Nodemailer**.  

![Electron React App](https://source.unsplash.com/1200x500/?technology,coding)

---

## 📌 Features  
✅ **Electron + React + TypeScript**  
✅ **Ant Design for a sleek UI**  
✅ **Send Gmail using Nodemailer**  
✅ **EJS templating for dynamic content**  
✅ **Modern UI & optimized performance**  

---

## 📂 Project Structure  

```
electron-react-gmail-boilerplate/
│── src/
│   ├── main/         # Electron Main Process
│   │   ├── main.ts   # Electron app entry point
│   │   ├── preload.ts # Secure IPC communication
│   ├── renderer/     # React Frontend
│   │   ├── App.tsx   # Main UI
│   │   ├── index.tsx # React entry point
│   ├── public/       # HTML and assets
│   │   ├── index.ejs # Main HTML template
│── package.json      # Project metadata and dependencies
│── tsconfig.json     # TypeScript configuration
│── webpack.config.js # Webpack bundling
```

---

## 💻 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-repo/electron-react-gmail-boilerplate.git
cd electron-react-gmail-boilerplate
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Run the App  
```sh
npm run dev
```

---

## ✉️ **Gmail Configuration**  

### 1️⃣ Enable Less Secure Apps  
To send emails via Gmail, you need to **enable "Less Secure Apps"** or generate an **App Password**.  

### 2️⃣ Update `src/main/main.ts`  
Edit this section with your Gmail credentials:
```ts
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
```
⚠️ **DO NOT** expose your credentials in public repositories. Use **environment variables** in production.

---

## 🎨 **UI Preview**  
![App UI](https://source.unsplash.com/800x400/?email,technology)

---

## ⚡ Usage  

1. Enter the recipient’s email  
2. Add a subject and message  
3. Click **"Send Email"**  
4. The app will confirm if the email was sent successfully  

---

## 🛠 Built With  

| Technology  | Version  |
|-------------|---------|
| Electron    | 31.7.7  |
| React       | 18.0    |
| TypeScript  | 5.0     |
| Ant Design  | 5.0     |
| Nodemailer  | 6.9.0   |

---

## 📜 License  
This project is open-source under the **MIT License**.  

🔗 **Follow for Updates** → [GitHub](https://github.com/your-repo)  

🚀 Happy Coding! 🎉  
