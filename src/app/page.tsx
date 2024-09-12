import Image from 'next/image'

export default function Home() {
  return (
    <div className="page font-[family-name:var(--font-geist-sans)]">
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
      
      <div style={{marginTop: '40px'}} className="image w-full flex justify-center ">
        <Image
          src="https://images.unsplash.com/photo-1725900737080-54b5a571b38c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={800}
          height={800}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}