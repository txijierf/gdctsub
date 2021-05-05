import { createSelector } from 'reselect';

export const selectWorkflowStore = state => state.WorkflowStore;

// BASE SELECTORS

export const selectWorkflowChart = createSelector(
  [selectWorkflowStore],
  workflowStore => workflowStore.chart,
);

export const selectWorkflowFilter = createSelector(
  [selectWorkflowStore],
  workflowStore => workflowStore.filter,
);

export const selectWorkflowError = createSelector(
  [selectWorkflowStore],
  workflowStore => workflowStore.error,
);

export const selectWorkflowName = createSelector(
  [selectWorkflowStore],
  workflowStore => workflowStore.name,
);

export const selectWorkflowId = createSelector(
  [selectWorkflowStore],
  workflowStore => workflowStore._id,
);

// CHART FILTER

export const selectSelectedWorkflowNode = createSelector(
  [selectWorkflowChart],
  workflowChart => workflowChart.selected,
);

export const selectSelectedNodeId = createSelector([selectSelectedWorkflowNode], workflowNode =>
  workflowNode ? workflowNode.id : undefined,
);

export const selectSelectedNodetype = createSelector([selectSelectedWorkflowNode], workflowNode =>
  workflowNode ? workflowNode.type : undefined,
);

export const selectWorkflowNodes = createSelector(
  [selectWorkflowChart],
  workflowChart => workflowChart.nodes,
);

export const selectWorkflowLinks = createSelector(
  [selectWorkflowChart],
  workflowChart => workflowChart.links,
);

export const selectSelectedWorkflowLink = createSelector(
  [selectSelectedNodeId, selectWorkflowLinks],
  (selectedNodeId, workflowLinks) => workflowLinks[selectedNodeId],
);

export const selectSelectedWorkflowNodeContent = createSelector(
  [selectWorkflowNodes, selectSelectedNodeId],
  (workflowNodes, selectedNodeId) => workflowNodes[selectedNodeId],
);

export const selectedLinkConnection = createSelector(
  [selectSelectedWorkflowLink, selectWorkflowNodes],
  (link, nodes) => {
    if (link) {
      const { from, to } = link;

      const fromValue = nodes[from.nodeId].type.name;
      const toValue = nodes[to.nodeId].type.name;

      return `${fromValue} -> ${toValue}`;
    }
  },
);

export const selectSelectedNodeValue = createSelector(
  [selectSelectedNodetype, selectSelectedWorkflowNodeContent, selectedLinkConnection],
  (type, selectedNode, selectedLinkString) => {
    if (selectSelectedNodetype) {
      let value = 'Selected ';
      if (type === 'node') {
        value += `node: ${selectedNode.type.name}`;
      } else {
        value += `link: ${selectedLinkString}`;
      }

      return value;
    }
  },
);
