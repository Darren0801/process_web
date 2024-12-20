import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
// 隐藏左侧工具栏部分的图形
export default class CustomPaletteProvider extends PaletteProvider {
  constructor(palette, create, elementFactory, spaceTool, lassoTool, handTool, globalConnect, translate) {
    super(palette, create, elementFactory, spaceTool, lassoTool, handTool, globalConnect, translate);
  }
  getPaletteEntries(element) {
    const entries = super.getPaletteEntries(element);
    // 隐藏指定类型的元素
    delete entries['create.intermediate-event']; // 中间
    delete entries['create.user-task']; // 用户任务
    delete entries['create.user-sign-task']; // 会签任务
    delete entries['create.subprocess-expanded'];// 子流程
    delete entries['create.data-object'];// 数据对象
    delete entries['create.data-store'];// 数据存储
    delete entries['create.participant-expanded'];// 扩展流程
    delete entries['create.group'];// 分组
    return entries;
  }
}