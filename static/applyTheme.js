const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("theme", savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefersDark ? "dark" : "light";
  document.documentElement.setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
}
