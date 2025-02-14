<template>
  <div>
    <h1 class="detailTitle">流程图详情</h1>
    <BpmnViewer :xmlStr="processDefinitionXml" />
  </div>
</template>

<script>
import BpmnViewer from './components/BpmnViewer.vue';

export default {
  components: {
    BpmnViewer
  },
  data() {
    return {
      processDefinitionXml: ''
    };
  },
  created() {},
  methods: {},
  mounted() {
    // console.log(1111111111111,this.$store.state.bpmnXmlStrItem,)
    this.processDefinitionXml = this.$store.state.bpmnXmlStrItem;
  }
};
</script>
<style>
.detailTitle{
  margin:1rem 0 0 1rem ;
}
</style>