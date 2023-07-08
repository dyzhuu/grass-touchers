<script lang="ts">

    import { Avatar } from '@skeletonlabs/skeleton';

    import MenuNavigation from '$lib/component/MenuNavigation.svelte';

    import logoWhite from "$lib/public/logoWhite.png";

</script>

<div class="h-1/6" />    

<!-- <div class="h-1/3 block text-center overflow-visible m-5 bg-gradient-to-tl from-tertiary-900 to-tertiary-700">
    <div class="align-middle">
    <Avatar class="ml-auto mr-auto -translate-y-20" shadow="drop-shadow-md" width="w-40" border="border-4 border-secondary-900" rounded="rounded-full" src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024" />
    </div>
    <h1 class="h1 -translate-y-10">
        <span class="bg-gradient-to-br from-secondary-700 to-secondary-900 bg-clip-text text-transparent box-decoration-clone">Username</span>
    </h1>
</div> -->

<!-- <div class="flex justify-center items-center h-1/3">
    <div class="flex justify-center items-center w-full h-full overflow-visible m-5 bg-gradient-to-tl from-tertiary-900 to-tertiary-700">
        <h1 class="text-center h1 bg-gradient-to-br from-secondary-700 to-secondary-900 bg-clip-text text-transparent box-decoration-clone">Username</h1>
    </div>
    <Avatar class="ml-auto mr-auto absolute -translate-y-[6rem]" shadow="drop-shadow-md" width="w-40" border="border-4 border-secondary-900" rounded="rounded-full" src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024" />
</div> -->


<div class="flex justify-center items-center h-1/3">
    <Avatar class="ml-auto mr-auto absolute -translate-y-[6rem]" shadow="drop-shadow-md" width="w-40" border="border-4 border-tertiary-500" rounded="rounded-full" src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024" />
    <div class=" border-4 border-tertiary-500 flex justify-center items-end w-full h-full overflow-visible m-5 bg-gradient-to-tl from-tertiary-900 to-tertiary-700">
        <h1 class="text-center h1 bg-gradient-to-br from-secondary-700 p-10 to-secondary-900 bg-clip-text text-transparent box-decoration-clone"><b>Username 🖌</b><br>Points - 5001</h1>
    </div>
</div>

<!-- bottom information below profile -->

<div class="my-20">
    <div class="my-5 flex justify-center items-center">
        <img alt="logo" src={logoWhite} class="h-20">
        <h1 class="text-center text-6xl bg-gradient-to-b from-success-300 to-green-300 bg-clip-text text-transparent box-decoration-clone"><b>39</b></h1>
    </div>

    <div class="my-5 flex justify-center items-center">
        <h4 class="text-center h4 bg-gradient-to-b from-tertiary-400 to-tertiary-600 bg-clip-text text-transparent box-decoration-clone">Joined - 9th July, 2023<br>Most recent grass touch - an hour ago</h4>
    </div>
</div>
<!-- <hr class="!border-t-2 secondary-900" /> -->


