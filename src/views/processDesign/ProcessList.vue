<template>
  <div>
    <div style="margin: 1rem 0 0 1rem">流程列表</div>
    <div style="text-align: left; padding: 2rem">
      <div
        class="listName"
        v-for="item in processList"
        :key="item.id"
        @click="goToProcessDetail(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processList: [
        {
          name: "莘庄交运设施监测下立交流程图",
          id: "1",
        },
        {
          name: "虹桥交运设施监测下立交流程图",
          id: "2",
        },
        {
          name: "浦江交运设施监测下立交流程图",
          id: "3",
        },
      ],
    };
  },
  methods: {
    goToProcessDetail() {
      // 这里可以实现路由跳转或其他逻辑
      const bpmnXmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions 
  xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
  targetNamespace="http://example.org/bpmn20">
  
  <process id="SimpleProcess" name="简单审批流程">
    <startEvent id="StartEvent_1" name="开始"/>
    <userTask id="UserTask_1" name="提交申请"/>
    <exclusiveGateway id="ExclusiveGateway_1"/>
    
    <sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="UserTask_1"/>
    <sequenceFlow id="Flow_2" sourceRef="UserTask_1" targetRef="ExclusiveGateway_1"/>
    
    <sequenceFlow id="Flow_Approved" sourceRef="ExclusiveGateway_1" targetRef="EndEvent_1">
      <conditionExpression xsi:type="tFormalExpression">\${approved}</conditionExpression>
    </sequenceFlow>
    
    <sequenceFlow id="Flow_Rejected" sourceRef="ExclusiveGateway_1" targetRef="EndEvent_2">
      <conditionExpression xsi:type="tFormalExpression">\${!approved}</conditionExpression>
    </sequenceFlow>
    
    <endEvent id="EndEvent_1" name="审批通过"/>
    <endEvent id="EndEvent_2" name="审批拒绝"/>
  </process>
</definitions>`;

      this.$store.commit("setXmlStr", bpmnXmlStr);
      this.$router.push({ path: "./ProcessDetail" });
    },
  },
};
21;
</script>
<style lang="scss" scoped>
.listName {
  cursor: pointer;
  background-color: #f3f3f3;
  margin-bottom: 0.5rem;
  padding: 0.1rem; /* 添加内边距 */
  white-space: nowrap; /* 防止换行 */
  overflow: hidden;
  font-size: 1rem;
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  border-radius: 0.3rem;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}
.listName:hover {
  background-color: #e0e0e0; /* 悬浮时的背景颜色 */
}
</style>
