import { defineComponent, inject, h } from 'vue';
import '../../../hooks/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const ns = useNamespace("tree");
    const nodeInstance = inject("NodeInstance");
    const tree = inject("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(h, { _self: nodeInstance, node, data, store }) : h("span", { class: ns.be("node", "label") }, [
        tree.ctx.slots.default ? tree.ctx.slots.default({ node, data }) : node.label
      ]);
    };
  }
});
var NodeContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/mac/source/element-plus/packages/components/tree/src/tree-node-content.vue"]]);

export { NodeContent as default };
//# sourceMappingURL=tree-node-content.mjs.map
