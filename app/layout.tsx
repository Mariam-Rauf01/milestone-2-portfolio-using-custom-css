// app/layout.tsx
import './globals.css';  // Import your custom global CSS file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts link to the head */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lusitana:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
