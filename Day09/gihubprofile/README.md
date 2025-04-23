# React + Vite

# 🔍 GitHub Profile Explorer

A React-based web application that fetches and displays random or user-defined GitHub profiles using the GitHub REST API.

## 🚀 Features

- Fetch random GitHub profiles on initial load.
- Input a number to fetch that many GitHub profiles.
- Displays:
  - Avatar
  - Username
  - Link to GitHub profile
- Search functionality for fetching user-defined number of profiles.

## 🛠️ Technologies Used

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- HTML & CSS
- GitHub REST API

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/github-profile-explorer.git
cd github-profile-explorer

```
2. Install Dependencies
```
npm install
```
3. Start the development server:
```
npm start

```

## ⚙️ How It Works

- On initial render, it fetches 10 random GitHub profiles using https://api.github.com/users.
- You can input any number to fetch that many profiles using the per_page query.
- Each card displays the user's avatar, login name, and a link to their GitHub profile.



