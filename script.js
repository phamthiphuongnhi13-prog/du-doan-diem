const quotes = [
    "🌟 Mỗi giờ học đều đưa bạn gần hơn đến thành công!",
    "🚀 Chỉ cần cố thêm một chút nữa thôi!",
    "💪 Hôm nay tốt hơn hôm qua là đã rất giỏi rồi!",
    "🌱 Kiên trì là chìa khóa để đạt điểm cao!"
];

document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];

function analyze() {
    let Ht = parseFloat(hToday.value);
    let Hy = parseFloat(hYesterday.value);
    let D = parseFloat(days.value);
    let A = parseFloat(absent.value);
    let Q = parseFloat(quiz.value);
    let M = parseFloat(mid.value);

    // Chuẩn hóa
    let Hp = Ht / 8;
    let Dp = D / 7;
    let Qp = Q / 10;
    let Mp = M / 10;
    let Ap = 1 - A / 10;

    // Điểm dự đoán
    let score = 10 * (0.25*Hp + 0.2*Dp + 0.2*Qp + 0.25*Mp + 0.1*Ap);
    score = Math.max(0, Math.min(10, score));

    // Quy đổi điểm chữ
    let grade = "";
    if (score < 4) grade = "F";
    else if (score <= 5.4) grade = "D";
    else if (score <= 6.9) grade = "C";
    else if (score <= 8.4) grade = "B";
    else grade = "A";

    // So sánh giờ học
    let change = ((Ht - Hy) / Hy * 100).toFixed(1);

    document.getElementById("result").innerHTML = `
        <h2>📈 Kết quả phân tích</h2>
        <p>🎯 Điểm dự đoán: <b>${score.toFixed(2)}</b></p>
        <p>🏆 Điểm chữ: <b>${grade}</b></p>
        <p>⏱️ Thay đổi giờ học: <b>${change}%</b></p>
        <p>💡 Gợi ý: Học thêm 1 giờ/ngày có thể nâng điểm lên!</p>
    `;
}
