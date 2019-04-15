<!--　<template>
  　　<pdf src="../static/pdf/jq2017_10_01.pdf"></pdf>
　　</template>

　　<script>
　　　　import pdf from 'vue-pdf'

　　　　export default {
  　　　　components: {
    　　　　pdf
  　　　　　}
　　　　}
　　</script>-->
<template>
	<div>
		<el-button type="primary" @click="logContent">主要按钮</el-button>
		
		<pdf ref="myPdfComponent" src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"></pdf>
	</div>
</template>

<script>
	import pdf from 'vue-pdf'

	export default {
		components: {
			pdf
		},
		methods: {
			logContent() {
				this.$refs.myPdfComponent.pdf.forEachPage(function(page) {
					return page.getTextContent()
						.then(function(content) {
							var text = content.items.map(item => item.str);
							console.log(text);
						})
				});
			}
		}
	}
</script>