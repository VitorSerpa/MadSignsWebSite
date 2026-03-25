import './globals.css';

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="page"
      >
        {children}
      </body>
    </html>
  );
}
