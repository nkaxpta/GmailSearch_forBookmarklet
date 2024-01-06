javascript: (function () {
  const result = window.prompt("Gmailで検索");
  const search = `"${result}"`;
  if (result) {
    window.open(`https://mail.google.com/mail/u/0/#search/${search}`);
  }
})();
