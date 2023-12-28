import Banner from './components/Banner';
import Blogs from './blogs/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Banner></Banner>
     <Blogs></Blogs>

    </main>
  )
}
