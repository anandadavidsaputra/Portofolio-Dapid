function initBrickGame() {
    const canvas = document.getElementById("brickGame");
    const ctx = canvas.getContext("2d");
    let animationId = null;

    // === KONSTANTA ===
    const PADDLE_WIDTH = 70, PADDLE_HEIGHT = 12;
    const BALL_RADIUS = 6;
    const BRICK_ROWS = 4, BRICK_COLS = 6;
    const BRICK_WIDTH = 42, BRICK_HEIGHT = 18;
    const BRICK_PADDING = 8, BRICK_OFFSET_TOP = 30, BRICK_OFFSET_LEFT = 18;
    const BALL_SPEED = 2.5;

    // === STATE ===
    const state = {
        paddleX: (canvas.width - PADDLE_WIDTH) / 2,
        ballX: canvas.width / 2,
        ballY: canvas.height - 30,
        dx: BALL_SPEED,
        dy: -BALL_SPEED,
        bricks: [],
        score: 0,
        running: true,
        gameOver: false,
        finished: false,
        autoPlay: false,
        input: {
            left: false,
            right: false
        }
    };

    // === FUNGSI PENDUKUNG ===
    function createBricks() {
        state.bricks = [];
        for (let c = 0; c < BRICK_COLS; c++) {
            state.bricks[c] = [];
            for (let r = 0; r < BRICK_ROWS; r++) {
                state.bricks[c][r] = { x: 0, y: 0, status: 1, alpha: 1 };
            }
        }
    }

    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#001f4d");
        gradient.addColorStop(0.5, "#004080");
        gradient.addColorStop(1, "#000000");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.roundRect(state.paddleX, canvas.height - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT, {
            tl: 6, tr: 6, br: 12, bl: 12
        });
        ctx.fillStyle = "#00bcd4";
        ctx.fill();
        ctx.closePath();
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(state.ballX, state.ballY, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;
    }

    function drawBricks() {
        for (let c = 0; c < BRICK_COLS; c++) {
            for (let r = 0; r < BRICK_ROWS; r++) {
                const b = state.bricks[c][r];
                if (b.status === 1 || b.alpha > 0) {
                    const brickX = (c * (BRICK_WIDTH + BRICK_PADDING)) + BRICK_OFFSET_LEFT;
                    const brickY = (r * (BRICK_HEIGHT + BRICK_PADDING)) + BRICK_OFFSET_TOP;
                    b.x = brickX;
                    b.y = brickY;
                    ctx.beginPath();
                    ctx.roundRect(brickX, brickY, BRICK_WIDTH, BRICK_HEIGHT, 4);
                    ctx.fillStyle = `rgba(0, 255, 255, ${b.alpha})`;
                    ctx.shadowColor = "#00ffff";
                    ctx.shadowBlur = 8 * b.alpha;
                    ctx.fill();
                    ctx.closePath();
                    ctx.shadowBlur = 0;
                    if (b.status === 0 && b.alpha > 0) {
                        b.alpha -= 0.05;
                        if (b.alpha < 0) b.alpha = 0;
                    }
                }
            }
        }
    }

    function collisionDetection() {
        for (let c = 0; c < BRICK_COLS; c++) {
            for (let r = 0; r < BRICK_ROWS; r++) {
                const b = state.bricks[c][r];
                if (b.status === 1 &&
                    state.ballX > b.x && state.ballX < b.x + BRICK_WIDTH &&
                    state.ballY > b.y && state.ballY < b.y + BRICK_HEIGHT) {
                    state.dy = -state.dy;
                    b.status = 0;
                    state.score++;
                    document.getElementById("score").textContent = "Score: " + state.score;

                    if (state.score === BRICK_ROWS * BRICK_COLS) {
                        state.running = false;
                        state.finished = true;
                        setTimeout(showVictoryEffect, 300);
                    }
                }
            }
        }
    }

    function drawGameOver() {
        ctx.font = "20px 'Lato', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Game Over 😅", canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillText("Skor Kamu: " + state.score, canvas.width / 2, canvas.height / 2 + 10);
        ctx.fillText("Klik untuk bermain lagi", canvas.width / 2, canvas.height / 2 + 34);
    }

    function update() {
        if (!state.running) return;

        // Pantul bola di kiri-kanan
        if (state.ballX + state.dx > canvas.width - BALL_RADIUS || state.ballX + state.dx < BALL_RADIUS)
            state.dx = -state.dx;

        // Pantul bola di atas
        if (state.ballY + state.dy < BALL_RADIUS)
            state.dy = -state.dy;
        else if (state.ballY + state.dy > canvas.height - BALL_RADIUS) {
            if (state.ballX > state.paddleX && state.ballX < state.paddleX + PADDLE_WIDTH)
                state.dy = -state.dy;
            else {
                state.running = false;
                state.gameOver = true;
            }
        }

        state.ballX += state.dx;
        state.ballY += state.dy;

        // Paddle movement
        if (state.autoPlay) {
            const target = state.ballX - PADDLE_WIDTH / 2;
            state.paddleX += (target - state.paddleX) * 0.1;
        } else {
            if (state.input.right && state.paddleX < canvas.width - PADDLE_WIDTH)
                state.paddleX += 3;
            else if (state.input.left && state.paddleX > 0)
                state.paddleX -= 3;
        }

        collisionDetection();
    }

    function render() {
        drawBackground();
        drawBricks();
        drawBall();
        drawPaddle();
        if (state.gameOver) drawGameOver();
    }

    function loop() {
        update();
        render();
        if (!state.finished) requestAnimationFrame(loop);
    }

    function resetGame() {
        state.paddleX = (canvas.width - PADDLE_WIDTH) / 2;
        state.ballX = canvas.width / 2;
        state.ballY = canvas.height - 30;
        state.dx = BALL_SPEED;
        state.dy = -BALL_SPEED;
        state.score = 0;
        state.running = true;
        state.finished = false;
        state.gameOver = false;
        document.getElementById("score").textContent = "Score: 0";
        createBricks();
        loop();
    }

    function showVictoryEffect() {
        const alertBox = document.getElementById("win-alert");
        document.getElementById("final-score").textContent = state.score;
        alertBox.style.display = "block";
        new Audio("https://assets.mixkit.co/sfx/download/mixkit-winning-notification-2018.mp3").play().catch(() => { });
    }

    // === EVENTS ===
    document.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") state.input.right = true;
        if (e.key === "ArrowLeft") state.input.left = true;
        if (e.key === " ") {
            state.running = !state.running;
            if (state.running) loop();
        }
    });
    document.addEventListener("keyup", e => {
        if (e.key === "ArrowRight") state.input.right = false;
        if (e.key === "ArrowLeft") state.input.left = false;
    });

    // Mobile buttons
    const leftBtn = document.getElementById("btn-left");
    const rightBtn = document.getElementById("btn-right");

    leftBtn.addEventListener("mousedown", () => state.input.left = true);
    leftBtn.addEventListener("mouseup", () => state.input.left = false);
    rightBtn.addEventListener("mousedown", () => state.input.right = true);
    rightBtn.addEventListener("mouseup", () => state.input.right = false);

    // Touch events
    leftBtn.addEventListener("touchstart", e => { e.preventDefault(); state.input.left = true; }, false);
    leftBtn.addEventListener("touchend", () => state.input.left = false, false);
    rightBtn.addEventListener("touchstart", e => { e.preventDefault(); state.input.right = true; }, false);
    rightBtn.addEventListener("touchend", () => state.input.right = false, false);

    canvas.addEventListener("click", () => {
        if (state.gameOver) resetGame();
    });

    // === ROUND RECT SUPPORT ===
    if (!CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
            if (typeof radius === "number") {
                radius = { tl: radius, tr: radius, br: radius, bl: radius };
            } else {
                radius = Object.assign({ tl: 0, tr: 0, br: 0, bl: 0 }, radius);
            }
            this.beginPath();
            this.moveTo(x + radius.tl, y);
            this.lineTo(x + width - radius.tr, y);
            this.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
            this.lineTo(x + width, y + height - radius.br);
            this.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
            this.lineTo(x + radius.bl, y + height);
            this.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
            this.lineTo(x, y + radius.tl);
            this.quadraticCurveTo(x, y, x + radius.tl, y);
            this.closePath();
            return this;
        };
    }

    // === DEV MODE ===
    document.getElementById("dev-win")?.addEventListener("click", () => {
        state.autoPlay = true;
        state.running = true;
        state.finished = false;
        state.gameOver = false;
        state.dx = BALL_SPEED;
        state.dy = -BALL_SPEED;
        loop();
    });

    window.devAutoDestroy = function () {
        for (let c = 0; c < BRICK_COLS; c++) {
            for (let r = 0; r < BRICK_ROWS; r++) {
                state.bricks[c][r].status = 0;
                state.bricks[c][r].alpha = 0;
            }
        }
        state.score = BRICK_ROWS * BRICK_COLS;
        document.getElementById("score").textContent = "Score: " + state.score;
    };

    window.restartGame = function () {
        document.getElementById("win-alert").style.display = "none";
        state.score = 0;
        state.autoPlay = false;
        state.finished = false;
        state.gameOver = false;
        state.running = true;
        document.getElementById("score").textContent = "Score: 0";
        resetGame(); // langsung panggil reset, tanpa reload halaman
    };

    // === INISIALISASI ===
    createBricks();
    resetGame();
}
