"use client";

export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center text-primary-text bg-primary-bg dark:bg-dark-primary-bg dark:text-dark-primary-text'>
      <div className='max-w-4xl mx-auto px-12 pt-16'>
        <div className='flex items-center justify-center gap-3 lg:gap-8 mb-8'>
          <h1 className='text-2xl md:text-6xl font-bold font-heading'>
            Welcome, Stranger!
          </h1>
          <div className='text-2xl md:text-6xl animate-wave'>👋🏻</div>
        </div>
        <div className='space-y-6 text-base md:text-lg font-body '>
          <p>
            My name is Vlad, I am a product-minded fullstack software engineer
            in the making.
          </p>
          <p>
            Even before university, I had experience with programming. Starting
            off with competitive programming in school left me with a foundation
            to build upon in low-level languages like C and C++.
          </p>

          <p>
            Uni projects taught me Java, Kotlin (I really prefer the latter) and
            Python well. More specifically, I have good experience with OOP
            development, various build/CI/CD systems, I understand JVM well and
            I can write good code. I have used python in diverse environments
            and use cases, for standalone apps and scripts, for making simple
            web APIs, and most importantly I worked quite a lot with python
            notebooks, for data analysis, mining and retrieval tasks. Frameworks
            like pandas, numpy, tensorflow, stuff like that.
          </p>

          <p>
            For some time, I been working on the basic skillset necessary for
            DeFi development: teaching myself Solidity & EVM, along with
            JavaScript with all its blockchain dev toolset: hardhat, truffle,
            foundry, cast. As a result, I managed to work/cofound closely two
            DeFi projects. I am also really keen to capitalize on my
            understanding on architecture and low-level programming to add Rust
            to my skillset as soon as possible.
          </p>

          <p>
            I have plenty of experience in collaborative software development,
            and have a soft spot for nice products, clean solutions and
            analytics. Let&apos;s work!
          </p>
        </div>
      </div>
    </main>
  );
}
