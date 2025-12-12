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
