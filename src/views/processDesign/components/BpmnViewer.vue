<template>
  <div>
      <!-- 流程图容器 -->
      <div class="container">
          <!-- 创建一个canvas画布 npmn-js是通过canvas实现绘图的，并设置ref让vue获取到element -->
          <div class="bpmn-canvas" ref="canvas"></div>
          <!-- 工具栏显示的地方 -->
          <div class="bpmn-js-properties-panel" id="js-properties-panel"></div>
          <panel v-if="bpmnModeler" :modeler="bpmnModeler" />
          <!-- 把操作按钮写在这里面 -->
          <div class="toolbar">
              <el-button type="primary" size="mini" @click="handleSave()">保存</el-button>
          </div>
      </div>
  </div>
</template>
<script>
// bpmn 相关依赖
import BpmnModeler from "bpmn-js/lib/Modeler";
// 左侧自定义工具栏
import BpmData from "./BpmData";
// 右侧自定义属性面板
import panel from "./PropertyPanel-right.vue";
// BPMN国际化
// import customTranslate from '@/util/bpmn/customTranslate';
import customTranslate from '@/util/customTranslate';
// 自定义汉化模块
var customTranslateModule = {
  translate: ['value', customTranslate]
}
import CustomPaletteProvider from './bpmn2'
export default {
  components: {
      panel
  },
  props:{
      xmlStr:{
          type: String,
          default: ''
      }
  },
  data(){
      return{
          bpmnModeler: null,
          element: null,
          bpmData: new BpmData(),
      }
  },
  created(){
  },
  mounted() {
      const canvas = this.$refs.canvas;
      // 生成实例
      this.bpmnModeler = new BpmnModeler({
          container: canvas,
          // 加入工具栏支持
          propertiesPanel: {
              parent: "#js-properties-panel"
          },
          additionalModules: [
              customTranslateModule,
              {
                  // labelEditingProvider: ["value", ''], //禁用节点编辑
                  // contextPadProvider: ["value", ''], //禁用图形菜单
                  // bendpoints: ["value", {}], //禁用连线拖动
                  // zoomScroll: ["value", ''], //禁用滚动
                  // moveCanvas: ['value', ''], //禁用拖动整个流程图
                  // move: ['value', ''], //禁用单个图形拖动
                  paletteProvider: ['type', CustomPaletteProvider], // 左侧工具栏
              }
          ],
          // moddleExtensions: {
          //     camunda: camundaModdleDescriptor
          // }
      });
      // 新增流程定义
      this.createNewDiagram();
  },
  methods:{
      createNewDiagram() {
          const xmlStr = `
          <?xml version="1.0" encoding="UTF-8"?>
              <bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
              <bpmn2:process id="process1567044459787" name="流程1567044459787">
                  <bpmn2:documentation>描述</bpmn2:documentation>
                  <bpmn2:startEvent id="StartEvent_01ydzqe" name="开始">
                  <bpmn2:outgoing>SequenceFlow_1qw929z</bpmn2:outgoing>
                  </bpmn2:startEvent>
                  <bpmn2:sequenceFlow id="SequenceFlow_1qw929z" sourceRef="StartEvent_01ydzqe" targetRef="Task_1piqdk6" />
                  <bpmn2:userTask id="Task_1piqdk6" name="请假申请">
                  <bpmn2:incoming>SequenceFlow_1qw929z</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_11h4o22</bpmn2:outgoing>
                  </bpmn2:userTask>
                  <bpmn2:exclusiveGateway id="ExclusiveGateway_0k39v3u">
                  <bpmn2:incoming>SequenceFlow_11h4o22</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1iu7pfe</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_04uqww2</bpmn2:outgoing>
                  </bpmn2:exclusiveGateway>
                  <bpmn2:sequenceFlow id="SequenceFlow_11h4o22" sourceRef="Task_1piqdk6" targetRef="ExclusiveGateway_0k39v3u" />
                  <bpmn2:sequenceFlow id="SequenceFlow_1iu7pfe" sourceRef="ExclusiveGateway_0k39v3u" targetRef="Task_10fqcwp" />
                  <bpmn2:userTask id="Task_10fqcwp" name="经理审批">
                  <bpmn2:incoming>SequenceFlow_1iu7pfe</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1xod8nh</bpmn2:outgoing>
                  </bpmn2:userTask>
                  <bpmn2:sequenceFlow id="SequenceFlow_04uqww2" sourceRef="ExclusiveGateway_0k39v3u" targetRef="Task_15n23yh" />
                  <bpmn2:userTask id="Task_15n23yh" name="总部审批">
                  <bpmn2:incoming>SequenceFlow_04uqww2</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0c8wrs4</bpmn2:outgoing>
                  </bpmn2:userTask>
                  <bpmn2:exclusiveGateway id="ExclusiveGateway_1sq33g6">
                  <bpmn2:incoming>SequenceFlow_0c8wrs4</bpmn2:incoming>
                  <bpmn2:incoming>SequenceFlow_1xod8nh</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0h8za82</bpmn2:outgoing>
                  </bpmn2:exclusiveGateway>
                  <bpmn2:sequenceFlow id="SequenceFlow_0c8wrs4" sourceRef="Task_15n23yh" targetRef="ExclusiveGateway_1sq33g6" />
                  <bpmn2:sequenceFlow id="SequenceFlow_1xod8nh" sourceRef="Task_10fqcwp" targetRef="ExclusiveGateway_1sq33g6" />
                  <bpmn2:endEvent id="EndEvent_0pnmjd3">
                  <bpmn2:incoming>SequenceFlow_0h8za82</bpmn2:incoming>
                  </bpmn2:endEvent>
                  <bpmn2:sequenceFlow id="SequenceFlow_0h8za82" sourceRef="ExclusiveGateway_1sq33g6" targetRef="EndEvent_0pnmjd3" />
              </bpmn2:process>
              <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                  <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process1567044459787">
                  <bpmndi:BPMNShape id="StartEvent_01ydzqe_di" bpmnElement="StartEvent_01ydzqe">
                      <dc:Bounds x="532" y="72" width="36" height="36" />
                      <bpmndi:BPMNLabel>
                      <dc:Bounds x="539" y="53" width="22" height="14" />
                      </bpmndi:BPMNLabel>
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1qw929z_di" bpmnElement="SequenceFlow_1qw929z">
                      <di:waypoint x="550" y="108" />
                      <di:waypoint x="550" y="150" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="UserTask_1qxjy46_di" bpmnElement="Task_1piqdk6">
                      <dc:Bounds x="500" y="150" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ExclusiveGateway_0k39v3u_di" bpmnElement="ExclusiveGateway_0k39v3u" isMarkerVisible="true">
                      <dc:Bounds x="525" y="275" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_11h4o22_di" bpmnElement="SequenceFlow_11h4o22">
                      <di:waypoint x="550" y="230" />
                      <di:waypoint x="550" y="275" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1iu7pfe_di" bpmnElement="SequenceFlow_1iu7pfe">
                      <di:waypoint x="575" y="300" />
                      <di:waypoint x="680" y="300" />
                      <di:waypoint x="680" y="380" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="UserTask_18pwui1_di" bpmnElement="Task_10fqcwp">
                      <dc:Bounds x="630" y="380" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_04uqww2_di" bpmnElement="SequenceFlow_04uqww2">
                      <di:waypoint x="525" y="300" />
                      <di:waypoint x="430" y="300" />
                      <di:waypoint x="430" y="380" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="UserTask_1j0us24_di" bpmnElement="Task_15n23yh">
                      <dc:Bounds x="380" y="380" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ExclusiveGateway_1sq33g6_di" bpmnElement="ExclusiveGateway_1sq33g6" isMarkerVisible="true">
                      <dc:Bounds x="525" y="515" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0c8wrs4_di" bpmnElement="SequenceFlow_0c8wrs4">
                      <di:waypoint x="430" y="460" />
                      <di:waypoint x="430" y="540" />
                      <di:waypoint x="525" y="540" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1xod8nh_di" bpmnElement="SequenceFlow_1xod8nh">
                      <di:waypoint x="680" y="460" />
                      <di:waypoint x="680" y="540" />
                      <di:waypoint x="575" y="540" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="EndEvent_0pnmjd3_di" bpmnElement="EndEvent_0pnmjd3">
                      <dc:Bounds x="532" y="602" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0h8za82_di" bpmnElement="SequenceFlow_0h8za82">
                      <di:waypoint x="550" y="565" />
                      <di:waypoint x="550" y="602" />
                  </bpmndi:BPMNEdge>
                  </bpmndi:BPMNPlane>
              </bpmndi:BPMNDiagram>
              </bpmn2:definitions>
          `;
          console.log('子组件接受--',this.xmlStr)
          // 将字符串转换成图显示出来
          this.bpmnModeler.importXML(xmlStr, err => {
              if (err) {
                  console.error(err);
              } else {
                  this.adjustPalette();
              }
          });
      },
      // 调整左侧工具栏排版
      adjustPalette() {
          try {
              // 获取 bpmn 设计器实例
              const canvas = this.$refs.canvas;
              const djsPalette = canvas.children[0].children[1].children[4];
              const djsPalStyle = {
                  width: "130px",
                  padding: "5px",
                  background: "white",
                  left: "20px",
                  borderRadius: 0
              };
              for (var key in djsPalStyle) {
                  djsPalette.style[key] = djsPalStyle[key];
              }
              const palette = djsPalette.children[0];
              const allGroups = palette.children;
              allGroups[0].style["display"] = "none";
              // 修改控件样式
              for (var gKey in allGroups) {
                  const group = allGroups[gKey];
                  for (var cKey in group.children) {
                      const control = group.children[cKey];
                      const controlStyle = {
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          width: "100%",
                          padding: "5px"
                      };
                      if (control.className && control.dataset && control.className.indexOf("entry") !== -1) {
                          const controlProps = this.bpmData.getControl(control.dataset.action);
                          control.innerHTML = `<div style='font-size: 14px;font-weight:500;margin-left:15px;'>${
                              controlProps["title"]
                          }</div>`;
                          for (var csKey in controlStyle) {
                              control.style[csKey] = controlStyle[csKey];
                          }
                      }
                  }
              }
          } catch (e) {
              console.log(e);
          }
      },
      // 保存流程图
      handleSave(){
          // console.log(this.bpmnTemplate, "模板");
          this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
              if (!err) {
                  console.log(xml);
              }
          });
      },
  },
}
</script>
<style lang="scss" scoped>
/*左边工具栏以及编辑节点的样式*/
@import "~bpmn-js/dist/assets/diagram-js.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
.container {
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  .bpmn-canvas {
      width: 100%;
      height: 100%;
  }
  .panel {
      position: absolute;
      right: 20px;
      top: 50px;
      width: 300px;
  }
::v-deep .bjs-powered-by {
      display: none;
  }
  .toolbar {
      position: absolute;
      top: 20px;
      right: 350px;
      a {
      text-decoration: none;
      margin: 5px;
      color: #409eff;
      }
  }
}
</style>