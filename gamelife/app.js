// 常數
const GRID_SIZE = 50;
const CELL_SIZE = 10;
const SPEED_MS = 300;

// 狀態
let grid = [];
let isRunning = false;
let generation = 0;
let animationId = null;

// DOM 元素
const gameContainer = document.getElementById('game-container');
const genDisplay = document.getElementById('gen-display');
const speedDisplay = document.getElementById('speed-display');

// 初始化遊戲
function init() {
    resetGrid();
    render();
}

// 重置網格
function resetGrid() {
    grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
        const row = [];
        for (let x = 0; x < GRID_SIZE; x++) {
            row.push(Math.random() < 0.2); // 20% 存活率
        }
        grid.push(row);
    }
    generation = 0;
    updateGeneration();
    render();
}

// 更新世代顯示
function updateGeneration() {
    genDisplay.textContent = generation;
}

// 渲染網格
function render() {
    gameContainer.innerHTML = '';
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell' + (grid[y][x] ? ' live' : '');
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener('click', () => toggleCell(x, y));
            gameContainer.appendChild(cell);
        }
    }
}

// 切換細胞狀態
function toggleCell(x, y) {
    if (y >= 0 && y < GRID_SIZE && x >= 0 && x < GRID_SIZE) {
        grid[y][x] = !grid[y][x];
        render();
    }
}

// 隨機化網格
function randomize() {
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            grid[y][x] = Math.random() < 0.2;
        }
    }
    generation = 0;
    updateGeneration();
    render();
}

// 計算鄰居存活數
function countLiveNeighbors(x, y) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = (x + dx + GRID_SIZE) % GRID_SIZE;
            const ny = (y + dy + GRID_SIZE) % GRID_SIZE;
            count += grid[ny][nx] ? 1 : 0;
        }
    }
    return count;
}

// 計算下一代
function nextGeneration() {
    const newGrid = grid.map(row => [...row]);
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            const neighbors = countLiveNeighbors(x, y);
            const alive = grid[y][x];
            if (alive && (neighbors === 2 || neighbors === 3)) {
                newGrid[y][x] = true;
            } else if (!alive && neighbors === 3) {
                newGrid[y][x] = true;
            } else {
                newGrid[y][x] = false;
            }
        }
    }
    grid = newGrid;
    generation++;
    updateGeneration();
    render();
}

// 開始/暫停控制
function toggleRunning() {
    isRunning = !isRunning;
    if (isRunning) {
        animationId = requestAnimationFrame(loop);
    } else {
        cancelAnimationFrame(animationId);
    }
}

// 循環函數
function loop() {
    if (!isRunning) return;
    animationId = requestAnimationFrame(loop);
    nextGeneration();
}

// 事件監聽
document.getElementById('btn-start').addEventListener('click', toggleRunning);
document.getElementById('btn-stop').addEventListener('click', () => {
    isRunning = false;
    cancelAnimationFrame(animationId);
});
document.getElementById('btn-reset').addEventListener('click', () => {
    isRunning = false;
    cancelAnimationFrame(animationId);
    resetGrid();
});
document.getElementById('btn-random').addEventListener('click', randomize);
document.getElementById('btn-clear').addEventListener('click', () => {
    isRunning = false;
    cancelAnimationFrame(animationId);
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            grid[y][x] = false;
        }
    }
    generation = 0;
    updateGeneration();
    render();
});

// 啟動
init();