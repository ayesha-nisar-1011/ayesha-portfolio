document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("copy-email-btn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText("ayesha.niisar@gmail.com").then(function () {
      const original = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(function () {
        btn.textContent = original;
      }, 1500);
    });
  });
});
