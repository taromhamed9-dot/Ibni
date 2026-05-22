// Inline script that runs before paint to set the correct theme and avoid flash.
export function ThemeInit() {
  const code = `(() => {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
