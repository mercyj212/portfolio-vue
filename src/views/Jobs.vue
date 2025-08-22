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
            exact
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

    <div class="p-8">
        <h1 class="text-3xl font-bold mb-6">Image Gallery</h1>
        <div v-if="loading" class="text-gray-500 text-lg">Loading images...</div>
        <div v-else>
            <div v-if="Jobs.length">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="img in Jobs" :key="img.id" class="flex flex-col items-center bg-white rounded-lg shadow p-4">
                        <img :src="img.url" :alt="img.title" class="w-full h-auto rounded-md mb-2" />
                        <p class="text-base font-medium text-gray-700">{{ img.title }}</p>
                    </div>

                </div>
            </div>
            <div v-else class="text-gray-500 text-lg">No images found.</div>

        </div>
    </div>
</template>

 <script>
export default {
    name: "Jobs",
    data() {
        return {
            images: [],
            loading: true,
        };
    },

    methods: {
        fetchJobs() {
            this.loading = true;
            fetch("https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font")
                .then((res) => res.blob())
                .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    this.Jobs = [{
                        id: 1,
                        url: url,
                        title: "I am a pacifico font"
                    }];
                    this.loading = false;
                })
                .catch(() => {
                    this.loading = false;
                });
        },

        fetchJobs() {
            this.loading = true;
            const fontTexts = [
                "I am a pacifico font",
                "Vue Developer",
                "Frontend Engineer",
                "Backend Specialist",
                "Fullstack Coder",
                "UI Designer",
                "API Integrator",
                "Tech Enthusiast",
                "Portfolio Image",
                "Creative Mind",
                "Problem Solver"
            ];
            const jobsPromises = fontTexts.map((text, idx) => {
                const url = `https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=${encodeURIComponent(text)}`;
                return fetch(url)
                    .then(res => res.blob())
                    .then(blob => ({
                        id: idx + 1,
                        url: URL.createObjectURL(blob),
                        title: text
                    }));
            });
            Promise.all(jobsPromises)
                .then(images => {
                    this.Jobs = images;
                    this.loading = false;
                })
                .catch(() => {
                    this.Jobs = [];
                    this.loading = false;
                });
        },

    },
    mounted() {
        this.fetchJobs();
    },
};
</script> 

