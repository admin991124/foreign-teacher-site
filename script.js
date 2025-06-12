// 登录验证脚本
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (username === "admin" && password === "123456") {
      message.textContent = "登录成功，欢迎回来！";
      message.style.color = "green";
    } else {
      message.textContent = "用户名或密码错误。";
      message.style.color = "red";
    }
  });
}
