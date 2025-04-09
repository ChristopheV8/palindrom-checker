function checkPalindrome() {
    const input = document.getElementById("wordInput").value.toLowerCase().replace(' ', '');
    const reversed = input.split('').reverse().join('');
    const result = input === reversed ? "true" : "false";
    document.getElementById("result").textContent = result;
  }