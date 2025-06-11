import React, { useState } from 'react';

const NestedComment = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState({});

  // Helper: update all children
  const updateChildren = (node, checked, checkedMap) => {
    checkedMap[node.id] = checked;
    if (node.children) {
      node.children.forEach(child => updateChildren(child, checked, checkedMap));
    }
  };

  // Helper: uncheck parent if any child is unchecked
  const updateParents = (nodeId, parentMap, checkedMap) => {
    const parentId = parentMap[nodeId];
    if (!parentId) return;

    const siblings = parentMap._children[parentId];
    const anyUnchecked = siblings.some(sib => !checkedMap[sib.id]);

    if (anyUnchecked) {
      checkedMap[parentId] = false;
      updateParents(parentId, parentMap, checkedMap);
    }
  };

  // Build parent reference and children map once
  const buildParentMap = (data, parent = null, parentMap = { _children: {} }) => {
    data.forEach(item => {
      if (parent) {
        parentMap[item.id] = parent.id;
        parentMap._children[parent.id] = parentMap._children[parent.id] || [];
        parentMap._children[parent.id].push(item);
      }
      if (item.children) {
        buildParentMap(item.children, item, parentMap);
      }
    });
    return parentMap;
  };

  const parentMap = buildParentMap(data);

  const handleCheck = (item, isChecked) => {
    const updatedChecked = { ...checkedItems };
    updateChildren(item, isChecked, updatedChecked);
    if (!isChecked) {
      updateParents(item.id, parentMap, updatedChecked);
    }
    setCheckedItems(updatedChecked);
  };

  const renderComments = (items) => (
    <div className="pl-4">
      {items.map(item => (
        <div key={item.id} className="p-2 border-l border-gray-300">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!!checkedItems[item.id]}
              onChange={(e) => handleCheck(item, e.target.checked)}
            />
            <span>{item.label}</span>
          </label>
          {item.children && renderComments(item.children)}
        </div>
      ))}
    </div>
  );

  return <div>{renderComments(data)}</div>;
};

export default NestedComment;
