document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // 获取用户名和密码
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 设置简单的登录验证（您可以根据需要进行改进）
    if (username === "admin" && password === "password123") {
        // 登录成功，跳转到主页面
        window.location.href = "index.html";  // 假设主页面是 index.html
    } else {
        alert("用户名或密码错误，请重试！");
    }
});
