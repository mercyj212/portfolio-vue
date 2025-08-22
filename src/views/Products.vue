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
              active-class="bg-gray-900 px-3 py-3 rounded-md text-white"
              exact
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
      <h1 class="text-4xl font-bold mb-4">Our Works</h1>
      <p class="text-lg text-gray-700">This is our projects done through the years</p>
    </div>

    <div class="container mx-auto mt-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-if="loading" class="text-center col-span-3">Loading products...</div>
        <div v-else v-for="product in products" :key="product.id" class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-2">{{ product.name }}</h2>
            <p class="text-gray-700">{{ product.description }}</p>
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

<script>   
export default {
    name: 'Products',
    data() {
      return {
        products: [], 
        loading: false,
      };
    },

    methods: {
        async fetchProducts() {
            this.loading = true;
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                this.products = data.products.map(product => ({
                    id: product.id,
                    name: product.title,
                    description: product.description
                }));
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                this.loading = false;
            }
        },

        
    },
    mounted() {
        this.fetchProducts();
    },
}
</script>
