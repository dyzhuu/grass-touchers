<script lang="ts">
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton'

    const you = [
        { ranking: 100, name: 'hee', score: '1' },
    ]

    const sourceData = [
        { ranking: 1, name: 'Hydrogen', score: '100' },
        { ranking: 2, name: 'Helium', score: '90' },
        { ranking: 3, name: 'Lithium', score: '80' },
        { ranking: 4, name: 'Beryllium', score: '70' },
        { ranking: 5, name: 'Boron', score: '60' },
        { ranking: 6, name: 'Hydrogen', score: '100' },
        { ranking: 7, name: 'Helium', score: '90' },
        { ranking: 8, name: 'Lithium', score: '80' },
        { ranking: 9, name: 'Beryllium', score: '70' },
        { ranking: 10, name: 'Boron', score: '60' },
        { ranking: 11, name: 'Hydrogen', score: '100' },
        { ranking: 12, name: 'Helium', score: '90' },
        { ranking: 13, name: 'Lithium', score: '80' },
        { ranking: 14, name: 'Beryllium', score: '70' },
    ];

</script>
<div class="flex justify-center">
  <table class="table-auto w-full border border-gray-300 rounded-lg max-w-[600px]">
    <thead class="bg-primary-500 text-white">
      <tr>
        <th class="px-4 py-2">Ranking</th>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Score</th>
      </tr>
    </thead>
    <tbody>
      {#each sourceData as data}
        <tr class="{data.ranking % 2  === 0 ? 'bg-surface-700' : 'bg-surface-900'}">
            <td class="px-4 py-4 text-center">{data.ranking}</td>
            <td class="px-4 py-4 text-center">{data.name}</td>
            <td class="px-4 py-4 text-center">{data.score}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

