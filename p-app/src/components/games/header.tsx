import Player from "./player";
import "@/app/games/games.css"

export default function Header() {
    return (<>
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />
                <meta
                    content="#000000"
                    name="theme-color"
                />
                <link
                    href="%PUBLIC_URL%/manifest.json"
                    rel="manifest"
                />
                <link
                    href="%PUBLIC_URL%/favicon.ico"
                    rel="shortcut icon"
                />
                <title>
                    React App
                </title>
            </head>
            <body>
                <noscript>
                    {' '}You need to enable JavaScript to run this app.{' '}
                </noscript>
                <div id="modal" />
                <div id="content">
                    <header>
                        <h1>
                            The{' '}
                            <em>
                                Almost
                            </em>
                            {' '}Final Countdown
                        </h1>
                        <p>
                            Stop the timer once you estimate that time is (almost) up
                        </p>
                       
                    </header>
                    <div id="root" />
                </div>
            </body>
        </html>

    </>)
}