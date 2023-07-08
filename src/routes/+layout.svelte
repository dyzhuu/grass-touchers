<script lang="ts">
	import { Toast, Modal } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
</script>

<Modal zIndex="98" />
<Toast zIndex="99" />

<slot />