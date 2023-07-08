<script lang="ts">
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton'

    const you = [
        { position: 100, name: 'hee', score: '1' },
    ]

    const sourceData = [
        { position: 1, name: 'Hydrogen', score: '100' },
        { position: 2, name: 'Helium', score: '90' },
        { position: 3, name: 'Lithium', score: '80' },
        { position: 4, name: 'Beryllium', score: '70' },
        { position: 5, name: 'Boron', score: '60' },
        { position: 6, name: 'Hydrogen', score: '100' },
        { position: 7, name: 'Helium', score: '90' },
        { position: 8, name: 'Lithium', score: '80' },
        { position: 9, name: 'Beryllium', score: '70' },
        { position: 10, name: 'Boron', score: '60' },
        { position: 11, name: 'Hydrogen', score: '100' },
        { position: 12, name: 'Helium', score: '90' },
        { position: 13, name: 'Lithium', score: '80' },
        { position: 14, name: 'Beryllium', score: '70' },
        { position: 15, name: 'Boron', score: '60' },
        { position: 15, name: 'Boron', score: '60' },
        { position: 15, name: 'Boron', score: '60' },
        { position: 15, name: 'Boron', score: '60' },
        { position: 16, name: 'Boron', score: '60' },
        { position: 17, name: 'Boron', score: '60' },
    ];

    const leaderboard: TableSource = {
        // A list of heading labels.
        head: ['Rank', 'Name', 'Score'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['position', 'name', 'score']),
    }

    const youTable: TableSource = {
        // A list of heading labels.
        head: [],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(you, ['position', 'name', 'score']),
    }
</script>

<div id="global">
    <Table source={leaderboard}/>
</div>

<div id="self">
    <Table source={youTable}/>
</div>

<style>
    #self {
        background-color: "bg-surface-800";
        width: 100%;
        position: fixed;
        bottom: 69px;
        right: -5px;
        z-index: 2;
    }
</style>