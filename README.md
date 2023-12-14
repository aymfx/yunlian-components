# 构建 aymfx-ui 产物

pnpm --filter aymfx-ui run build

# 构建 hooks 产物

pnpm --filter @aymfx-ui/hooks run build

# 构建 组件产物

pnpm --filter @aymfx-ui/components run build

# 构建 utils产物

pnpm --filter @aymfx-ui/utils run build

# 总构建

pnpm --filter "./packages/\*\*" run build

# 检查类型

npx tsc -p tsconfig.packages.json --noEmit --composite false

# 启动项目

pnpm --filter @aymfx-ui/examples run dev

# 规范

type：本次提交的类型，默认规范集支持以下类型。

feat：添加新功能
fix：Bug 修复
build：构建相关的修改
chore：对项目功能没有影响的修改
ci：持续集成方面的修改
docs：文档的修改
perf：性能优化
refactor：代码重构
revert：代码回退
style：样式相关调整
test：测试相关代码

scope：本次提交涉及哪个子模块，此部分可不填。
subject：本次提交的描述信息

feat(button): add click event.

fix(input): fix the error of v-model.

docs: add README.md for button.
