# 🍳 Taylor’s Kitchen

**Hey, Taylor! Let’s get cooking!**  
We’ll turn your ingredients into something amazing. 🥗  

A simple recipe idea generator where users can enter ingredients and get meal suggestions.

---

## 🚀 Features

- Enter ingredients and generate recipe ideas  
- Displays image and recipe name in card view  
- Loader while fetching data  
- Error and “No results found” messages  
- Pagination for multiple results  
- Clean responsive UI (React + Tailwind CSS)

---

## 🛠️ Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **TheMealDB API**

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/taylors-kitchen.git
cd taylors-kitchen
yarn install
yarn dev
```

Then open http://localhost:5173 in your browser.

🧩 API

Endpoint: https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
(Supports one ingredient per call — for multiple ingredients, loop and merge results.)

## 🧩 UI Overview

**1. Title & Subheading**  
Welcomes the user with a friendly greeting and explains the app’s purpose.  
> _"Hey, Taylor! Let’s get cooking! We’ll turn your ingredients into something amazing."_

---

**2. Ingredient Input Section**  
- Users can type ingredients (e.g., rice, chicken).  
- Click **“+”** to add them to a list.  
- Press **“Generate Recipe Ideas”** to fetch matching recipes.

---

**3. Loader Cards**  
- While fetching recipes, shimmer loader cards appear to indicate progress.  

---

**4. Recipe Card Grid**  
- Displays recipe image and name in a clean card layout.  
- Fully responsive and adapts to all screen sizes.

---

**5. Error Messages**  
- Shown when there’s a network or API issue.  
> Example: “Error: Something went wrong. Please try again later.”

---

**6. No Results Found Section**  
- Shown when no recipes match the given ingredients.  
> Example: No recipes found this time — let’s switch up the ingredients and try again!”

---

**7. Pagination Footer**  
- Allows easy navigation between multiple pages of recipe results.  
- Includes **Next** and **Previous** buttons.

---


📄 Author

Varshini S
Frontend Developer | React Enthusiast 💻
