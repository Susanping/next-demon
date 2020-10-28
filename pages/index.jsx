import Link from 'next/link'
import '../styles/index.css'
function Home() {
  return (
    <ul className="bg">
      <li>
        <Link href="/about/[id]" as="/about/1">
           <span>跳转到about页面</span>
        </Link>
      </li>
      <li>
        <Link href="/home/[id]" as="/home/1">
        <span>跳转到home页面</span>
        </Link>
      </li>
    </ul>
  )
}

export default Home;