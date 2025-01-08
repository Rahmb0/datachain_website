export function A11yProvider({ children }) {
  return (
    <>
      <SkipToContent />
      {children}
    </>
  );
}

function SkipToContent() {
  return (
    <a href="#main-content"
       className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                  bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50">
      Skip to main content
    </a>
  );
} 