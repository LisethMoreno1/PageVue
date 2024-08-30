<template>

    <!-- Features -->
    <div class="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            <!-- Stats -->
            <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200"> {{ $t('AppFeatures.features.statsOne.title') }}</h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">{{ $t('AppFeatures.features.statsOne.value') }}</p>
                <p class="mt-1 text-gray-500 dark:text-neutral-500">{{ $t('AppFeatures.features.statsOne.description') }}</p>
            </div>
            <!-- End Stats -->

            <!-- Stats -->
            <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">{{ $t('AppFeatures.features.statsTwo.title') }}</h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">{{ $t('AppFeatures.features.statsTwo.value') }}</p>
                <p class="mt-1 text-gray-500 dark:text-neutral-500">{{ $t('AppFeatures.features.statsTwo.description') }}</p>
            </div>
            <!-- End Stats -->

            <!-- Stats -->
            <div>
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">{{ $t('AppFeatures.features.statsThree.title') }}</h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">{{ $t('AppFeatures.features.statsThree.value') }}</p>
                <p class="mt-1 text-gray-500 dark:text-neutral-500">{{ $t('AppFeatures.features.statsThree.description') }}</p>
            </div>
            <!-- End Stats -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Features -->
</template>


<script>
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { t } = useI18n();
        return { t };
    }
};
</script>
