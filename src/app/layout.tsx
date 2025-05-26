import { Metadata } from "next";
import "./globals.css";
import { TaskProvider } from "./context/useTask.context";

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'My task in process and completed',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className="bg-slate-300 h-screen"
      >
        <TaskProvider>
         {children}
        </TaskProvider>
      </body>
    </html>
  );
}
