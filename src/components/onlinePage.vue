<template>
	<div class="helpPage">
		<div class="container">
			<el-tabs type="border-card" @tab-click="handleClick">
				<el-tab-pane>
					<span slot="label"><i class="el-icon-service"></i> 问答</span>
					<anwser ref="anwser"></anwser>
				</el-tab-pane>
				<el-tab-pane><span slot="label"><i class="el-icon-tickets"></i> 列表</span>
				<anwserList ref="anwserList"></anwserList>
				 </el-tab-pane>
			</el-tabs>
		</div>
	</div>

</template>

<script>
import panel from "./panel.vue";
import * as api from "../api";
import auth from "../auth";
import anwser from "@/components/anwser"; //设置手机
import anwserList from "@/components/anwserList"; //设置手机
export default {
  name: "",
  components: {
    "imp-panel": panel,
    anwser,
    anwserList
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    handleClick(tab, event) {
      if (tab.index == "1") {
        this.$refs.anwserList.loadData();
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(function() {});
  }
};
</script>

<style>
.container {
  width: 73%;
  margin: 0 auto;
}

.helpPage {
  margin-top: 100px;
    min-height: 703px;
}
</style>