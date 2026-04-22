import './globals.css';

export const metadata = {
  viewport: "width=device-width, initial-scale=1",
  title: 'Mad Signs Portas ACM',
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/apple-icon.png',
  },
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
