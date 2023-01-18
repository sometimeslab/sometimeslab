<template>
  <div class="relative">
    <LayoutsSideNav />
    <div class="pl-32 bg-gray-200/70 min-h-screen">
      <slot />
    </div>
    <LayoutsSideBreadcrumbs />
  </div>
</template>