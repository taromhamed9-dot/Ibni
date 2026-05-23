// Inline script that runs before paint to set the correct theme and avoid flash.
export function ThemeInit() {
  const code = `(() => {
    try {
      // Light is the default; only switch to dark if the user has explicitly chosen it.
      var stored = localStorage.getItem('theme');
      var theme = stored === 'dark' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
