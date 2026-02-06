
function copyCode() {
  const codeEl = document.getElementById("refCode");
  const code = codeEl ? codeEl.innerText.trim() : "";
  if (!code) return;

  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector(".btn");
    if (!btn) return;
    const prev = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => (btn.innerText = prev), 1200);
  }).catch(() => {
    const textarea = document.createElement("textarea");
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(textarea);
    alert("Copied: " + code);
  });
}
