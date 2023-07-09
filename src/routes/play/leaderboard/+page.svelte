<script lang="ts">
    import { getLeaderboard } from '$lib/client/api';

    const loggedInUser = { id: 5, email: "user5@example.com", username: "user5", score: 50 }
</script>

<h1 class="mt-10 text-center font-serif text-[3rem] font-bold underline">Leaderboard</h1>

<div class="flex justify-center py-10 px-5">
    <table class="table-auto w-full border border-[#707070] border-4 max-w-[600px]">
        <thead class="bg-[#797d74] text-white sticky -top-1 z-10">
            <tr class="">
                <th class="w-1/4 px-4 py-5">
                    <span class="font-mono text-xl font-bold">Ranking</span>
                </th>
                <th class="w-1/4 px-4 py-5">
                    <span class="font-mono text-xl font-bold">Name</span>
                </th>
                <th class="w-1/4 px-4 py-5">
                    <span class="font-mono text-xl font-bold">Score</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {#await getLeaderboard() then userList} 
                {#each userList as user, index}
                <tr class="{ user.id === loggedInUser.id ? 'bg-[#544f48]' : index % 2  === 1 ? 'bg-[#4b5547] hover:bg-[#404a3c]' : 'bg-[#424a40] hover:bg-[#323830]'} border border-[#707070]">
                    <td class="w-1/4 px-4 py-4 text-center font-mono">{index + 1}</td>
                    <td class="w-1/4 px-4 py-4 text-center font-mono">{user.username}</td>
                    <td class="w-1/4 px-4 py-4 text-center font-mono">{user.score}</td>
                </tr>
                {/each}
                {#if userList.every(u => {
                    return u.id !== loggedInUser.id;
                })}
                <tr class="bg-[#544f48] border border-[#707070]">
                    <td class="w-1/4 px-4 py-4 text-center font-mono">ranking</td>
                    <td class="w-1/4 px-4 py-4 text-center font-mono">{loggedInUser.username}</td>
                    <td class="w-1/4 px-4 py-4 text-center font-mono">{loggedInUser.score}</td>
                </tr>
                {/if}
            {/await}
        </tbody>
    </table>
</div>