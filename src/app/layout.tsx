import "~/styles/globals.css"

export const metadata = {
  title: "Sebinho – livraria",
  description: "Conheça a livraria Sebinho: compra, venda ou troca de livros.",
  icons: {
    rel: "icon",
    url: "/images/logo.svg"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
)}