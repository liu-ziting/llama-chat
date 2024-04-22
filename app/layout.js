import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

export const metadata = {
    title: 'Llama3 Chat',
    openGraph: {
        title: 'Llama3 Chat',
        description: 'Llama 3 is the latest language model from Meta.'
    }
}

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Llama3 Chat </title>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦙</text></svg>"
                />
                <script type="text/javascript">
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "m0go9466r4");
                </script>
            </head>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
