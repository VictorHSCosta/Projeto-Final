export const metadata = {
    title: "Controle de estoque",
    description: "Controla o estoque de livros",
    icons: [
      { rel: "icon", url: "/images/logo.svg" }
    ]
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    )
}