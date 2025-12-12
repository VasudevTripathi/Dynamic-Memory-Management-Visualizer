🧠 Dynamic Memory Management Visualizer

A visual and interactive simulator for understanding how operating systems allocate and deallocate memory using different dynamic allocation algorithms — First Fit, Best Fit, Worst Fit, and Next Fit.
This tool visually represents memory blocks, holes, fragmentation, and block splitting/merging in real time.

🚀 Features
🎯 Allocation Algorithms

First Fit – Allocates the first suitable free block

Best Fit – Finds the smallest suitable free block (reduces leftover space)

Worst Fit – Uses the largest available free block

Next Fit – A variant of First Fit that continues searching from last allocation point

📊 Real-Time Visualization

Memory displayed as a horizontal bar

Colored segments for allocated and free blocks

Dynamic updates on every allocation / deallocation

Labels show process ID + block size

Auto-merging of adjacent free blocks to reduce fragmentation

🔧 User Controls

Input process ID and size

Select allocation algorithm

Allocate / deallocate memory

Reset the entire memory

Real-time stats:

Total memory

Used memory

Free memory

Number of holes (external fragmentation indicator)

📝 Activity Log

Every operation (allocation, deallocation, failure, merging) is logged with timestamp.

🧩 Project Structure
dynamic-memory-management-visualizer/
│
├── index.html        # Main UI layout
├── style.css         # Styling & memory block visualization
└── script.js         # Memory algorithms + rendering + user controls

🛠️ Technologies Used

HTML – Interface structure

CSS – Memory layout visualization (flex-based)

JavaScript – Allocation algorithms + simulation engine + DOM updates

GitHub – Version control & project tracking

This project is completely frontend-based — no backend required.

📚 Concepts Demonstrated

Dynamic memory allocation

Contiguous memory management

External fragmentation

Block splitting & merging

Simulation-based teaching tool

OS memory algorithms visualization

📷 Screenshots

(Add your own screenshots here after running the project.)

🔍 How It Works

User initializes memory with a given size.

Memory is represented as an array of blocks.

When a process is allocated:

Algorithm searches for suitable free block

Block is split (if required)

Visualization updates

When process is deallocated:

Block marked free

Adjacent free blocks merge (coalescing)

Stats + GUI update automatically.

🚦 How to Run

Download or clone the repository:

git clone https://github.com/<your-username>/dynamic-memory-management-visualizer


Open index.html in any modern browser (Chrome recommended).

No additional installation or dependencies required.

🧪 Future Enhancements

Add compaction animation

Support paging & segmentation

Add timeline playback of operations

Add performance metrics for each algorithm

Host on GitHub Pages

👨‍💻 Author

Your Name
B.Tech CSE, Lovely Professional University

⭐ Give this repo a star if you found it useful!
