<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white font-bold text-xl">My Portfolio</div>
        <ul class="flex space-x-4">
          <li>
            <router-link 
            to="/" 
            class="text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-3 rounded-md font-semibold"
            active-class="bg-gray-900 text-white"
            exact
            >Home</router-link>
          </li>
          <li>
            <router-link 
            to="/about" 
            class="text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-3 rounded-md font-semibold"
            active-class="bg-gray-900 text-white"
            >About</router-link>
          </li>

          <li>
            <router-link 
            to="/contact" 
            class="text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-3 rounded-md font-semibold"
            active-class="bg-gray-900 text-white"
            >Contact</router-link>
          </li>

          <li>
            <router-link 
            to="/projects" 
            class="text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-3 rounded-md font-semibold"
            active-class="bg-gray-900 text-white"
            >Projects</router-link>
          </li>

          <li>
            <router-link 
            to="/products" 
            class="text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-3 rounded-md font-semibold"
            active-class="bg-gray-900 text-white"
            >Products</router-link>
          </li>

            <li>
            <router-link 
            to="/jobs" 
            class="text-gray-300 hover:text-white hover:bg-gray-900 px-3 py-3 rounded-md font-semibold"
            active-class="bg-gray-900 text-white"
            >Jobs</router-link>
          </li>

        </ul>
      </div>
    </nav>
    <div class="container mx-auto mt-10 text-center">
      <h1 class="text-5xl font-extrabold mb-6 text-gray-900">Welcome to My Portfolio</h1>
      <p class="text-xl text-gray-600 mb-8">Explore my projects, products, and learn more about me.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 class="text-2xl font-semibold mb-2 text-gray-800">About Me</h2>
          <p class="text-gray-600 mb-4">Discover my background, skills, and interests.</p>
          <router-link to="/about" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">Learn More</router-link>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 class="text-2xl font-semibold mb-2 text-gray-800">Projects</h2>
          <p class="text-gray-600 mb-4">Browse through my latest work and case studies.</p>
          <router-link to="/projects" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">View Projects</router-link>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 class="text-2xl font-semibold mb-2 text-gray-800">Contact</h2>
          <p class="text-gray-600 mb-4">Get in touch for collaborations or inquiries.</p>
          <router-link to="/contact" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">Contact Me</router-link>
        </div>
      </div>
      <div class="mt-12">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Featured Products</h3>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="bg-gray-100 rounded-lg p-4 w-64 shadow hover:shadow-lg transition">
            <h4 class="font-semibold text-gray-700 mb-1">Product One</h4>
            <p class="text-gray-500 text-sm mb-2">A brief description of product one.</p>
            <router-link to="/products" class="text-blue-600 hover:underline text-sm">See Details</router-link>
          </div>
          <div class="bg-gray-100 rounded-lg p-4 w-64 shadow hover:shadow-lg transition">
            <h4 class="font-semibold text-gray-700 mb-1">Product Two</h4>
            <p class="text-gray-500 text-sm mb-2">A brief description of product two.</p>
            <router-link to="/products" class="text-blue-600 hover:underline text-sm">See Details</router-link>
          </div>
        </div>
      </div>
 </div>
    <footer class="bg-gray-800 text-white py-6 mt-10">
      <div class="container mx-auto text-center">
          <a href="https://github.com/" target="_blank" class="text-gray-300 hover:text-white transition">
            <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a href="mailto:your@email.com" class="text-gray-300 hover:text-white transition">
            <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 3 6.01V6h18zm-18 12V8.99l9 7 9-7V18H3z"/></svg>
          </a>
            <p class="mt-4 text-gray-400 text-sm">© 2023 My Portfolio. All rights reserved.</p>
        </div>
    </footer>
</template>