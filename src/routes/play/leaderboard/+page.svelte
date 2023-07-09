<script lang="ts">
	import { user, userProfile } from "$lib/stores";

  const loggedInUser = { 
    id: $userProfile?.id,
    username: $userProfile?.username,
    score: "N/A"
  } 

  async function getTopUsers() {
    const res = await fetch("http://localhost:6969/api/top-users")
    const data = await res.json();
    return data;
  }
  

</script>
<div class="flex justify-center py-10 px-5">
  <table class="table-auto w-full border border-surface-700 max-w-[600px]">
    <thead class="bg-surface-600 text-white sticky -top-1 z-10">
      <tr class="">
        <th class="px-4 py-5">Ranking</th>
        <th class="px-4 py-5">Name</th>
        <th class="px-4 py-5">Score</th>
      </tr>
    </thead>
    <tbody>
      {#await getTopUsers()}
        <tr class="bg-[#424a40] border border-surface-700">
            <td class="py-4 text-center" colspan="100%">Loading...</td>
        </tr>
      {:then topUsers}
        {#each topUsers as user, index}
          <tr class="{ user.id === loggedInUser.id ? 'bg-warning-600' : index % 2  === 1 ? 'bg-[#4b5547]' : 'bg-[#424a40]'} border border-surface-700">
              <td class="px-4 py-4 text-center">{index + 1}</td>
              <td class="px-4 py-4 text-center">{user.username}</td>
              <td class="px-4 py-4 text-center">{user.score}</td>
          </tr>
        {/each}
        {#if topUsers.every((u) => {
          return u.id !== loggedInUser.id;
        })}
          <tr class="bg-warning-600 border border-surface-700">
              <td class="px-4 py-4 text-center">ranking</td>
              <td class="px-4 py-4 text-center">{loggedInUser.username}</td>
              <td class="px-4 py-4 text-center">{loggedInUser.score}</td>
          </tr>
        {/if}
      {/await}
    </tbody>
  </table>
</div>