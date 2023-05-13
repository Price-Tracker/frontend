<template>
    <div class="flex flex-wrap justify-center max-w-7xl mx-auto">
        <div v-for="index in productCount"
            class="m-5 border border-blue-300 shadow rounded-md p-4 max-w-xl w-full">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-20 w-20"></div>
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productCount: 8,
        };
    },
};
</script>