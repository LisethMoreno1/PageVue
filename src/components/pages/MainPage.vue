<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <AppHeader />
        </header>
        <main class="flex-1">
            <!-- Aquí va tu contenido principal -->
            <AppHero />
            <hr class="max-w-[85rem] mx-auto border-t border-gray-600 opacity-20 my-4" />

            <AppPrograms />
            <hr class="max-w-[85rem] mx-auto border-t border-gray-600 opacity-20 my-4" />
            <AppFeatures />
            <hr class="max-w-[85rem] mx-auto border-t border-gray-600 opacity-20 my-4" />
            <AppCardSection />
            <hr class="max-w-[85rem] mx-auto border-t border-gray-600 opacity-20 my-4" />
            <AppTeam />
            <hr class="max-w-[85rem] mx-auto border-t border-gray-600 opacity-20 my-4" />
            <AppTestimonials />
            <hr class="max-w-[85rem] mx-auto border-t border-gray-600 opacity-20 my-4" />
            <AppContact />
        </main>
        <footer>
            <AppFooter />
        </footer>
    </div>
</template>

<script>
import AppHeader from '@/components/StaticPage/AppHeader.vue';
import AppFooter from '@/components/StaticPage/AppFooter.vue';
import AppContact from '@/components/StaticPage/AppContact.vue';
import AppTestimonials from '@/components/StaticPage/AppTestimonials.vue';
import AppTeam from '@/components/StaticPage/AppTeam.vue';
import AppCardSection from '@/components/StaticPage/AppCardSection.vue';
import AppFeatures from '@/components/StaticPage/AppFeatures.vue';
import AppPrograms from '@/components/StaticPage/AppPrograms.vue';
import AppHero from '@/components/StaticPage/AppHero.vue';



export default {
    components: {
        AppHeader,
        AppFooter,
        AppContact,
        AppTestimonials,
        AppTeam,
        AppCardSection,
        AppFeatures,
        AppPrograms,
        AppHero
    },
};
</script>