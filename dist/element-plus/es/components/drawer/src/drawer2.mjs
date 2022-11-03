import { defineComponent, computed, ref, resolveComponent, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, withModifiers, createElementBlock, renderSlot, toDisplayString, createCommentVNode, vShow } from 'vue';
import { Close } from '@element-plus/icons-vue';
import { ElOverlay } from '../../overlay/index.mjs';
import '../../focus-trap/index.mjs';
import '../../dialog/index.mjs';
import '../../../utils/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../hooks/index.mjs';
import { drawerProps, drawerEmits } from './drawer.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ElFocusTrap from '../../focus-trap/src/focus-trap.mjs';
import { useDeprecated } from '../../../hooks/use-deprecated/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { addUnit } from '../../../utils/dom/style.mjs';
import { useDialog } from '../../dialog/src/use-dialog.mjs';

const _sfc_main = defineComponent({
  name: "ElDrawer",
  components: {
    ElOverlay,
    ElFocusTrap,
    ElIcon,
    Close
  },
  props: drawerProps,
  emits: drawerEmits,
  setup(props, { slots }) {
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    return {
      ...useDialog(props, drawerRef),
      drawerRef,
      focusStartRef,
      isHorizontal,
      drawerSize,
      ns,
      t
    };
  }
});
const _hoisted_1 = ["aria-label", "aria-labelledby", "aria-describedby"];
const _hoisted_2 = ["id"];
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = resolveComponent("close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_overlay = resolveComponent("el-overlay");
  return openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: !_ctx.appendToBody
  }, [
    createVNode(Transition, {
      name: _ctx.ns.b("fade"),
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave,
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createVNode(_component_el_overlay, {
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex,
          onClick: _ctx.onModalClick
        }, {
          default: withCtx(() => [
            createVNode(_component_el_focus_trap, {
              loop: "",
              trapped: _ctx.visible,
              "focus-trap-el": _ctx.drawerRef,
              "focus-start-el": _ctx.focusStartRef,
              onReleaseRequested: _ctx.onCloseRequested
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  ref: "drawerRef",
                  "aria-modal": "true",
                  "aria-label": _ctx.title || void 0,
                  "aria-labelledby": !_ctx.title ? _ctx.titleId : void 0,
                  "aria-describedby": _ctx.bodyId,
                  class: normalizeClass([_ctx.ns.b(), _ctx.direction, _ctx.visible && "open", _ctx.customClass]),
                  style: normalizeStyle(_ctx.isHorizontal ? "width: " + _ctx.drawerSize : "height: " + _ctx.drawerSize),
                  role: "dialog",
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createElementVNode("span", {
                    ref: "focusStartRef",
                    class: normalizeClass(_ctx.ns.e("sr-focus")),
                    tabindex: "-1"
                  }, null, 2),
                  _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                    key: 0,
                    class: normalizeClass(_ctx.ns.e("header"))
                  }, [
                    !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                      key: 0,
                      close: _ctx.handleClose,
                      titleId: _ctx.titleId,
                      titleClass: _ctx.ns.e("title")
                    }, () => [
                      !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        id: _ctx.titleId,
                        role: "heading",
                        class: normalizeClass(_ctx.ns.e("title"))
                      }, toDisplayString(_ctx.title), 11, _hoisted_2)) : createCommentVNode("v-if", true)
                    ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                      createCommentVNode(" DEPRECATED SLOT ")
                    ]),
                    _ctx.showClose ? (openBlock(), createElementBlock("button", {
                      key: 2,
                      "aria-label": _ctx.t("el.drawer.close"),
                      class: normalizeClass(_ctx.ns.e("close-btn")),
                      type: "button",
                      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
                    }, [
                      createVNode(_component_el_icon, {
                        class: normalizeClass(_ctx.ns.e("close"))
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_close)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 10, _hoisted_3)) : createCommentVNode("v-if", true)
                  ], 2)) : createCommentVNode("v-if", true),
                  _ctx.rendered ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    id: _ctx.bodyId,
                    class: normalizeClass(_ctx.ns.e("body"))
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 10, _hoisted_4)) : createCommentVNode("v-if", true),
                  _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                    key: 2,
                    class: normalizeClass(_ctx.ns.e("footer"))
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("v-if", true)
                ], 14, _hoisted_1)
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
          [vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8, ["disabled"]);
}
var Drawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/source/element-plus/packages/components/drawer/src/drawer.vue"]]);

export { Drawer as default };
//# sourceMappingURL=drawer2.mjs.map
