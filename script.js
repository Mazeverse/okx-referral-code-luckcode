function copyCode() {
  const text = document.getElementById('refCode').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Referral code copied!');
  });
}
