import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>home screen</p>

      <Link href="/category/0">category 0</Link>
    </div>
  )
}
