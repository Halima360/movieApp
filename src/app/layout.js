import Header from '@/components/Header'
import './globals.css'



export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB web  app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='bg-white text-black'>
        <Header/>
        {children}</body>
    </html>
  )
}
