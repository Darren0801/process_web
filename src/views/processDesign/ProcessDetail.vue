<template>
  <div>
    <h1>流程图展示</h1>
    <BpmnViewer :xml="processDefinitionXml" />
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
  created() {
  },
  methods: {
    
  }
};
</script>