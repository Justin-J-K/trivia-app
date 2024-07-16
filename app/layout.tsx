import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative h-screen">
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-1/4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
