<!-- PROJECT TITLE -->
<p align="center">
  <h1 align="center">Dynamic Memory Management Visualizer</h1>
</p>

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/Project-Dynamic%20Memory%20Visualizer-blue.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Algorithms-First%20Fit%20%7C%20Best%20Fit%20%7C%20Worst%20Fit%20%7C%20Next%20Fit-orange.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Language-HTML%20%7C%20CSS%20%7C%20JavaScript-green.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/<your-username>/dynamic-memory-management-visualizer?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/<your-username>/dynamic-memory-management-visualizer?color=yellow&style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/<your-username>/dynamic-memory-management-visualizer?style=for-the-badge" />
</p>

---

# 🧠 Overview

The **Dynamic Memory Management Visualizer** is an interactive learning tool designed to simulate how Operating Systems allocate and deallocate memory dynamically using four major algorithms:

- **First Fit**
- **Best Fit**
- **Worst Fit**
- **Next Fit**

The visualizer shows:
- Memory blocks as colored segments  
- Allocated vs Free spaces  
- Block splitting & merging  
- Hole formation (fragmentation)  
- Live statistics (used, free, holes)  
- Logs for each operation  

This project demonstrates OS-level concepts visually to make learning memory management easier and more intuitive.

---

# 🎯 Features

### 🔹 Allocation Algorithms
- **First Fit:** Picks the first block large enough  
- **Best Fit:** Chooses the smallest suitable free block  
- **Worst Fit:** Chooses the largest available free block  
- **Next Fit:** Like First Fit, but continues search from last position  

### 🔹 Visualization
- Horizontal bar representing memory  
- Dynamic block creation, splitting, merging  
- Color-coded blocks (Allocated / Free)  
- Labels showing PID & size  

### 🔹 Stats & Logs
- Total memory  
- Used memory  
- Free memory  
- Number of free holes  
- Detailed event log for each allocation/deallocation  

### 🔹 User Controls
- Enter Process ID  
- Enter requested size  
- Choose allocation algorithm  
- Allocate / Deallocate / Reset memory  

---

---

# 🛠️ Technologies Used

| Component | Technology |
|----------|------------|
| Frontend | HTML, CSS, JavaScript |
| Visualization | Flexbox-based rendering |
| Version Control | Git + GitHub |
| Deployment | GitHub Pages |

---

# 📚 Memory Allocation Algorithms Overview

### 📌 First Fit  
Scans memory from the beginning and allocates the first hole large enough.

### 📌 Best Fit  
Searches all free blocks and selects the **smallest block** that fits → reduces leftover space.

### 📌 Worst Fit  
Chooses the **largest free block** → reduces large internal fragmentation.

### 📌 Next Fit  
Works like First Fit but continues from the block where the last allocation happened.

---

# 🧪 How to Use

1. Enter **Total Memory Size**  
2. Click **Initialize**  
3. Enter **Process ID** (e.g., P1)  
4. Enter **Size to Allocate**  
5. Select algorithm: First Fit / Best Fit / Worst Fit / Next Fit  
6. Click **Allocate**  
7. To free memory:
   - Enter PID → Click **Deallocate**  
8. View:
   - Updated visualization  
   - Logs  
   - Memory stats  

---

# 🛠️ Local Setup (GUI ONLY)

> No terminal required. Just follow GUI steps.

### Upload files:
1. Go to GitHub repo  
2. Click **Add file → Upload files**  
3. Upload:
   - `index.html`  
   - `style.css`  
   - `script.js`  
4. Click **Commit changes**

### Edit files:
Use the **pencil icon** on GitHub to edit step-by-step and create multiple commits.

---

# 🌱 Future Enhancements

- Add memory **compaction animation**  
- Add **paging and segmentation** simulation  
- Add **internal fragmentation** tracking  
- Add **timeline playback** of all operations  
- Add **random workload generator**  
- Dark mode UI  

---


# ✨ Author

**Vasudev Tripathi** 
-B.Tech CSE — Operating Systems Project  
Lovely Professional University  

---

# ⭐ Support

If you like this project, please ⭐ star the repository — it motivates development!

---



