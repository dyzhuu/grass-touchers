<script lang="ts">
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton'


    const sourceData = [
        { position: 1, name: 'Hydrogen', score: '100' },
        { position: 2, name: 'Helium', score: '90' },
        { position: 3, name: 'Lithium', score: '80' },
        { position: 4, name: 'Beryllium', score: '70' },
        { position: 5, name: 'Boron', score: '60' },
    ];

    const tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Name', 'Score'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['name', 'score']),
    }     
</script>

<Table source={tableSimple}/>
