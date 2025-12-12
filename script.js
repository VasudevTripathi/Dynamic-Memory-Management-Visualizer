let memory = [];
let totalMemorySize = 0;
let nextFitIndex = 0;

const memoryContainer = document.getElementById("memoryContainer");
const logDiv = document.getElementById("log");

const totalSpan = document.getElementById("statTotal");
const usedSpan = document.getElementById("statUsed");
const freeSpan = document.getElementById("statFree");
const holesSpan = document.getElementById("statHoles");

document.getElementById("initBtn").addEventListener("click", () => {
    const size = parseInt(document.getElementById("totalMemoryInput").value, 10);
    if (isNaN(size) || size <= 0) {
        addLog("Please enter a valid total memory size.");
        return;
    }
    initMemory(size);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    if (totalMemorySize > 0) {
        initMemory(totalMemorySize);
        addLog("Memory has been reset.");
    } else {
        addLog("Initialize memory first.");
    }
});

document.getElementById("allocBtn").addEventListener("click", () => {
    const pid = document.getElementById("pidInput").value.trim();
    const size = parseInt(document.getElementById("sizeInput").value, 10);
    const algo = document.getElementById("algoSelect").value;

    if (!pid) {
        addLog("Please enter a Process ID.");
        return;
    }
    if (isNaN(size) || size <= 0) {
        addLog("Please enter a valid size.");
        return;
    }
    if (totalMemorySize === 0) {
        addLog("Initialize memory first.");
        return;
    }

    const success = allocate(pid, size, algo);
    if (success) {
        addLog(`Allocated ${size} units to ${pid} using ${algo}.`);
    } else {
        addLog(`Allocation failed for ${pid} (${size} units) using ${algo}.`);
    }
    renderMemory();
    updateStats();
});

document.getElementById("deallocBtn").addEventListener("click", () => {
    const pid = document.getElementById("pidInput").value.trim();
    if (!pid) {
        addLog("Please enter a Process ID to deallocate.");
        return;
    }
    if (totalMemorySize === 0) {
        addLog("Initialize memory first.");
        return;
    }
    const success = deallocate(pid);
    if (success) {
        addLog(`Deallocated process ${pid}.`);
    } else {
        addLog(`No block found for process ${pid}.`);
    }
    renderMemory();
    updateStats();
});

function initMemory(size) {
    totalMemorySize = size;
    memory = [{
        start: 0,
        size: size,
        free: true,
        pid: null
    }];
    nextFitIndex = 0;
    renderMemory();
    updateStats();
    logDiv.innerHTML = "";
    addLog(`Initialized memory with size ${size}.`);
}

function allocate(pid, size, algo) {
    // Prevent duplicate PID
    if (memory.some(block => !block.free && block.pid === pid)) {
        addLog(`Process ID ${pid} already exists.`);
        return false;
    }

    let index = -1;
    switch (algo) {
        case "first-fit":
            index = findFirstFit(size);
            break;
        case "best-fit":
            index = findBestFit(size);
            break;
        case "worst-fit":
            index = findWorstFit(size);
            break;
        case "next-fit":
            index = findNextFit(size);
            break;
        default:
            return false;
    }

    if (index === -1) return false;

    const block = memory[index];
    if (block.size === size) {
        block.free = false;
        block.pid = pid;
    } else {
        // Split block
        const allocatedBlock = {
            start: block.start,
            size: size,
            free: false,
            pid: pid
        };
        const remainingBlock = {
            start: block.start + size,
            size: block.size - size,
            free: true,
            pid: null
        };
        memory.splice(index, 1, allocatedBlock, remainingBlock);
    }

    if (algo === "next-fit") {
        nextFitIndex = index;
    }

    return true;
}

function deallocate(pid) {
    let found = false;
    for (let i = 0; i < memory.length; i++) {
        if (!memory[i].free && memory[i].pid === pid) {
            memory[i].free = true;
            memory[i].pid = null;
            found = true;
        }
    }
    if (found) {
        mergeFreeBlocks();
    }
    return found;
}
function findFirstFit(size) {
    for (let i = 0; i < memory.length; i++) {
        if (memory[i].free && memory[i].size >= size) {
            return i;
        }
    }
    return -1;
}
function findBestFit(size) {
    let bestIndex = -1;
    let bestSize = Infinity;
    for (let i = 0; i < memory.length; i++) {
        if (memory[i].free && memory[i].size >= size && memory[i].size < bestSize) {
            bestSize = memory[i].size;
            bestIndex = i;
        }
    }
    return bestIndex;
}
function findWorstFit(size) {
    let worstIndex = -1;
    let worstSize = -1;
    for (let i = 0; i < memory.length; i++) {
        if (memory[i].free && memory[i].size >= size && memory[i].size > worstSize) {
            worstSize = memory[i].size;
            worstIndex = i;
        }
    }
    return worstIndex;
}
function findNextFit(size) {
    if (memory.length === 0) return -1;
    let startIndex = nextFitIndex;
    let i = startIndex;

    do {
        if (memory[i].free && memory[i].size >= size) {
            return i;
        }
        i = (i + 1) % memory.length;
    } while (i !== startIndex);

    return -1;
}
function mergeFreeBlocks() {
    for (let i = 0; i < memory.length - 1; ) {
        const current = memory[i];
        const next = memory[i + 1];
        if (current.free && next.free) {
            current.size += next.size;
            memory.splice(i + 1, 1);
        } else {
            i++;
        }
    }
}

function renderMemory() {
    memoryContainer.innerHTML = "";
    if (totalMemorySize === 0) return;

    memory.forEach(block => {
        const div = document.createElement("div");
        div.classList.add("memory-block");
        div.classList.add(block.free ? "free" : "allocated");
        const widthPercent = (block.size / totalMemorySize) * 100;
        div.style.width = widthPercent + "%";

        if (widthPercent > 8) {
            // Only show text if block is wide enough
            div.textContent = block.free
                ? `Free (${block.size})`
                : `${block.pid} (${block.size})`;
        }

        memoryContainer.appendChild(div);
    });
}

function updateStats() {
    let used = 0;
    let free = 0;
    let holes = 0;

    memory.forEach(block => {
        if (block.free) {
            free += block.size;
            holes++;
        } else {
            used += block.size;
        }
    });

    totalSpan.textContent = totalMemorySize;
    usedSpan.textContent = used;
    freeSpan.textContent = free;
    holesSpan.textContent = totalMemorySize === 0 ? 0 : holes;
}

function addLog(message) {
    const time = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.textContent = `[${time}] ${message}`;
    logDiv.appendChild(p);
    logDiv.scrollTop = logDiv.scrollHeight;
}
