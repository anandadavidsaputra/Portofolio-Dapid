function initBrickGame() {
    const canvas = document.getElementById("brickGame");
    const ctx = canvas.getContext("2d");

    const paddleWidth = 70, paddleHeight = 12;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let ballRadius = 6;
    let x, y, dx, dy;

    const brickRowCount = 4, brickColumnCount = 6;
    const brickWidth = 42, brickHeight = 18;
    const brickPadding = 8, brickOffsetTop = 30, brickOffsetLeft = 18;

    let bricks = [], score = 0, finished = false;
    let rightPressed = false, leftPressed = false;
    let running = false, gameOver = false;

    // Tambahkan roundRect dulu SEBELUM resetGame
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

    function resetGame() {
        paddleX = (canvas.width - paddleWidth) / 2;
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2.0; dy = -2.0;
        score = 0;
        finished = false;
        gameOver = false;
        running = true;
        initBricks();
        draw();
    }

    function initBricks() {
        bricks = [];
        for (let c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (let r = 0; r < brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1, alpha: 1 };
            }
        }
    }

    initBricks();
    resetGame();

    document.addEventListener("keydown", e => {
        if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
        if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
    });

    document.addEventListener("keyup", e => {
        if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
        if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
    });

    document.getElementById("btn-left").addEventListener("touchstart", () => rightPressed = false, false);
    document.getElementById("btn-right").addEventListener("touchstart", () => leftPressed = false, false);
    document.getElementById("btn-left").addEventListener("mousedown", () => leftPressed = true);
    document.getElementById("btn-right").addEventListener("mousedown", () => rightPressed = true);
    document.getElementById("btn-left").addEventListener("mouseup", () => leftPressed = false);
    document.getElementById("btn-right").addEventListener("mouseup", () => rightPressed = false);

    canvas.addEventListener("mouseenter", () => { if (!running && !gameOver) running = true; });
    canvas.addEventListener("click", () => { if (gameOver) resetGame(); });

    function drawPaddle() {
        ctx.beginPath();
        ctx.roundRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight, {
            tl: 6, tr: 6, br: 12, bl: 12
        });
        ctx.fillStyle = "#00bcd4";
        ctx.fill();
        ctx.closePath();
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;
    }

    function drawBricks() {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const b = bricks[c][r];
                if (b.status === 1 || b.alpha > 0) {
                    const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                    const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                    b.x = brickX;
                    b.y = brickY;
                    ctx.beginPath();
                    ctx.roundRect(brickX, brickY, brickWidth, brickHeight, 4);
                    ctx.fillStyle = `rgba(0, 255, 255, ${b.alpha})`;
                    ctx.shadowColor = "#00ffff";
                    ctx.shadowBlur = 8 * b.alpha;
                    ctx.fill();
                    ctx.closePath();
                    ctx.shadowBlur = 0;
                    if (b.status === 0 && b.alpha > 0) b.alpha -= 0.05;
                }
            }
        }
    }

    function collisionDetection() {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const b = bricks[c][r];
                if (b.status === 1 && x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    document.getElementById("score").textContent = "Score: " + score;
                    if (score === brickRowCount * brickColumnCount && !finished) {
                        finished = true;
                        running = false;
                        setTimeout(() => {
                            alert("🎉 Selamat! Anda keren banget! 🎉");
                        }, 300);
                    }
                }
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

    function drawGameOverText() {
        ctx.font = "20px 'Lato', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Game Over 😅", canvas.width / 2, canvas.height / 2);
        ctx.font = "14px 'Lato', sans-serif";
        ctx.fillText("Klik untuk bermain lagi", canvas.width / 2, canvas.height / 2 + 24);
    }

    function draw() {
        drawBackground();
        drawBricks();
        drawBall();
        drawPaddle();
        collisionDetection();

        if (running) {
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;
            if (y + dy < ballRadius) dy = -dy;
            else if (y + dy > canvas.height - ballRadius) {
                if (x > paddleX && x < paddleX + paddleWidth) {
                    dy = -dy;
                } else {
                    running = false;
                    gameOver = true;
                    drawGameOverText();
                    return;
                }
            }

            x += dx;
            y += dy;
        } else if (gameOver) {
            drawGameOverText();
        }

        if (rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 2.0;
        else if (leftPressed && paddleX > 0) paddleX -= 2.0;

        requestAnimationFrame(draw);
    }
}
