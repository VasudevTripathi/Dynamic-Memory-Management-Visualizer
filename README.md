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


