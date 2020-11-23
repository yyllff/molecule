import * as React from 'react';
import Tree, { TreeNode } from 'mo/components/tree';
import { Icon } from 'mo/components/icon';
export default {
    title: 'Tree',
};

export const Basic = () => (
    <Tree
        prefixCls="rc-tree"
        draggable
        /**
         * TODO: antd 用的精灵图...
         */
        // showLine
        showIcon
        switcherIcon={<Icon type="chevron-right" />}
    >
        <TreeNode title="parent" key="parent">
            <TreeNode title="child" key="child">
                <TreeNode title="child3" key="child3">
                    <TreeNode
                        icon={({ selected }) => <Icon type="symbol-file" />}
                        title="child5"
                        key="child5"
                    ></TreeNode>
                </TreeNode>
                <TreeNode title="child4" key="child4"></TreeNode>
            </TreeNode>
            <TreeNode title="child1" key="child1"></TreeNode>
        </TreeNode>
    </Tree>
);
