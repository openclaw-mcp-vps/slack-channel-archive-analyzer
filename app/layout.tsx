import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackArchiver – Find & Archive Inactive Slack Channels",
  description: "Automatically analyze your Slack workspace, identify dead channels, and archive them with member notifications. Save time and reduce noise."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="736cdc1b-6058-4802-b1dc-ed99c9e8e7dd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
