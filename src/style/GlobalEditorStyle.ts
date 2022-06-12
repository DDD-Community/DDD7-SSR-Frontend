import { css } from '@emotion/react';

export const GlobalEditorStyle = css`
  .toastui-editor-dark.toastui-editor-defaultUI {
    border-color: #494c56;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-md-container,
  .toastui-editor-dark .toastui-editor-ww-container {
    background-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar {
    background-color: #191a1c;
    border-bottom-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-toolbar-icons {
    background-position-y: -49px;
    border-color: #232428;
  }

  .toastui-editor-dark .toastui-editor-toolbar-icons:not(:disabled):hover {
    background-color: #191a1c;
    border-color: #36383f;
  }

  .toastui-editor-dark .toastui-editor-toolbar-divider {
    background-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-tooltip {
    background-color: #535662;
  }

  .toastui-editor-dark .toastui-editor-tooltip .arrow {
    background-color: #535662;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar .scroll-sync::before {
    color: #8f939f;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar .scroll-sync.active::before {
    color: #67ccff;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar .switch {
    background-color: #2b4455;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar input:checked + .switch {
    background-color: #2b4455;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar .switch::before {
    background-color: #8f939f;
  }

  .toastui-editor-dark .toastui-editor-defaultUI-toolbar input:checked + .switch::before {
    background-color: #67ccff;
  }

  .toastui-editor-dark .toastui-editor-main .toastui-editor-md-splitter {
    background-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-mode-switch {
    border-top-color: #393b42;
    background-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-mode-switch .tab-item {
    border-color: #393b42;
    background-color: #191a1c;
    color: #757a86;
  }

  .toastui-editor-dark .toastui-editor-mode-switch .tab-item.active {
    border-top-color: #121212;
    background-color: #191a1c;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-popup,
  .toastui-editor-dark .toastui-editor-context-menu {
    background-color: #121212;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border-color: #494c56;
  }

  .toastui-editor-dark .toastui-editor-popup-add-heading ul li:hover {
    background-color: #36383f;
  }

  .toastui-editor-dark .toastui-editor-popup-body label {
    color: #9a9da3;
  }

  .toastui-editor-dark .toastui-editor-popup-body input[type='text'] {
    background-color: transparent;
    color: #eee;
    border-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-popup-body input[type='text']:focus {
    outline-color: #67ccff;
  }

  .toastui-editor-dark .toastui-editor-popup-body input[type='text'].disabled {
    color: #969aa5;
    border-color: #191a1c;
    background-color: rgba(48, 50, 56, 0.4);
  }

  .toastui-editor-dark .toastui-editor-popup-add-image .toastui-editor-tabs .tab-item {
    border-bottom-color: #292e37;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-popup-add-image .toastui-editor-tabs .tab-item:hover {
    border-bottom-color: #3c424d;
  }

  .toastui-editor-dark .toastui-editor-popup-add-image .toastui-editor-tabs .tab-item.active {
    color: #67ccff;
    border-bottom-color: #67ccff;
  }

  .toastui-editor-dark .toastui-editor-popup-body .toastui-editor-file-name {
    border-color: #191a1c;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-popup-body .toastui-editor-file-select-button {
    border-color: #191a1c;
    background-color: #232428;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-popup-body .toastui-editor-file-select-button:hover {
    border-color: #494c56;
  }

  .toastui-editor-dark.toastui-editor-defaultUI .toastui-editor-close-button {
    color: #eee;
    border-color: #191a1c;
    background-color: #232428;
  }

  .toastui-editor-dark.toastui-editor-defaultUI .toastui-editor-close-button:hover {
    border-color: #494c56;
  }

  .toastui-editor-dark.toastui-editor-defaultUI .toastui-editor-ok-button {
    color: #121212;
    background-color: #67ccff;
  }

  .toastui-editor-dark.toastui-editor-defaultUI .toastui-editor-ok-button:hover {
    color: #121212;
    background-color: #32baff;
  }

  .toastui-editor-dark .toastui-editor-popup-add-table .toastui-editor-table-cell {
    border-color: #191a1c;
    background-color: #121212;
  }

  .toastui-editor-dark .toastui-editor-popup-add-table .toastui-editor-table-cell.header {
    border-color: #191a1c;
    background-color: #232428;
  }

  .toastui-editor-dark .toastui-editor-popup-add-table .toastui-editor-table-selection-layer {
    border-color: rgba(103, 204, 255, 0.4);
    background-color: rgba(103, 204, 255, 0.1);
  }

  .toastui-editor-dark .toastui-editor-popup-add-table .toastui-editor-table-description {
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-md-tab-container {
    background-color: #232428;
    border-bottom-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-md-tab-container .tab-item {
    border-color: #393b42;
    background-color: #2d2f34;
    color: #757a86;
  }

  .toastui-editor-dark .toastui-editor-md-tab-container .tab-item.active {
    border-bottom-color: #121212;
    background-color: #121212;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-context-menu .menu-group {
    border-bottom-color: #191a1c;
    color: #eee;
  }

  .toastui-editor-dark .toastui-editor-context-menu .menu-item span::before {
    background-position-y: -126px;
  }

  .toastui-editor-dark .toastui-editor-context-menu li:not(.disabled):hover {
    background-color: #36383f;
  }

  .toastui-editor-dark .toastui-editor-context-menu li.disabled {
    color: #969aa5;
  }

  .toastui-editor-dark .toastui-editor-dropdown-toolbar {
    border-color: #494c56;
    background-color: #232428;
  }

  .toastui-editor-dark .ProseMirror,
  .toastui-editor-dark .toastui-editor-contents p,
  .toastui-editor-dark .toastui-editor-contents h1,
  .toastui-editor-dark .toastui-editor-contents h2,
  .toastui-editor-dark .toastui-editor-contents h3,
  .toastui-editor-dark .toastui-editor-contents h4,
  .toastui-editor-dark .toastui-editor-contents h5,
  .toastui-editor-dark .toastui-editor-contents h6 {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-contents h1,
  .toastui-editor-dark .toastui-editor-contents h2 {
    border-color: #fff;
  }

  .toastui-editor-dark .toastui-editor-contents del {
    color: #777980;
  }

  .toastui-editor-dark .toastui-editor-contents blockquote {
    border-color: #303135;
  }

  .toastui-editor-dark .toastui-editor-contents blockquote p,
  .toastui-editor-dark .toastui-editor-contents blockquote ul,
  .toastui-editor-dark .toastui-editor-contents blockquote ol {
    color: #777980;
  }

  .toastui-editor-dark .toastui-editor-contents pre {
    background-color: #232428;
  }

  .toastui-editor-dark .toastui-editor-contents pre code {
    background-color: transparent;
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-contents code {
    color: #c1798b;
    background-color: #35262a;
  }

  .toastui-editor-dark .toastui-editor-contents div {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-ww-code-block-language {
    border-color: #191a1c;
    background-color: #121212;
  }

  .toastui-editor-dark .toastui-editor-ww-code-block-language input {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-contents .toastui-editor-ww-code-block:after {
    background-color: #232428;
    border: 1px solid #393b42;
    color: #eee;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwIDMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjUsMTIuNWwyLDJMMTIsMjBoLTJ2LTJMMTUuNSwxMi41eiBNMTgsMTBsMiwybC0xLjUsMS41bC0yLTJMMTgsMTB6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==');
  }

  .toastui-editor-dark .toastui-editor-contents .toastui-editor-custom-block-editor {
    background: #392d31;
    color: #fff;
    border-color: #327491;
  }

  .toastui-editor-dark .toastui-editor-custom-block.ProseMirror-selectednode .toastui-editor-custom-block-view {
    color: #fff;
    border-color: #327491;
  }

  .toastui-editor-dark .toastui-editor-custom-block-view button {
    background-color: #232428;
    border-color: #393b42;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwIDMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjUsMTIuNWwyLDJMMTIsMjBoLTJ2LTJMMTUuNSwxMi41eiBNMTgsMTBsMiwybC0xLjUsMS41bC0yLTJMMTgsMTB6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==');
  }

  .toastui-editor-dark .toastui-editor-custom-block-view button:hover {
    background-color: #232428;
    border-color: #595c68;
  }

  .toastui-editor-dark .toastui-editor-custom-block-view .info {
    color: #65acca;
  }

  .toastui-editor-dark .toastui-editor-contents table {
    border-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-contents table th,
  .toastui-editor-dark .toastui-editor-contents table td {
    border-color: #191a1c;
  }

  .toastui-editor-dark .toastui-editor-contents table th {
    background-color: #3a3c42;
  }

  .toastui-editor-dark .toastui-editor-contents table td,
  .toastui-editor-dark .toastui-editor-contents table td p {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-contents td.toastui-editor-cell-selected {
    background-color: rgba(103, 204, 255, 0.5);
  }

  .toastui-editor-dark .toastui-editor-contents th.toastui-editor-cell-selected {
    background-color: rgba(103, 204, 255, 0.3);
  }

  .toastui-editor-dark table.ProseMirror-selectednode {
    outline-color: #67ccff;
  }

  .toastui-editor-dark .html-block.ProseMirror-selectednode {
    outline-color: #67ccff;
  }

  .toastui-editor-dark .toastui-editor-contents ul,
  .toastui-editor-dark .toastui-editor-contents menu,
  .toastui-editor-dark .toastui-editor-contents ol,
  .toastui-editor-dark .toastui-editor-contents dir {
    color: #55575f;
  }

  .toastui-editor-dark .toastui-editor-contents ul > li::before {
    background-color: #55575f;
  }

  .toastui-editor-dark .toastui-editor-contents hr {
    border-color: #55575f;
  }

  .toastui-editor-dark .toastui-editor-contents a {
    color: #4b96e6;
  }

  .toastui-editor-dark .toastui-editor-contents a:hover {
    color: #1f70de;
  }

  .toastui-editor-dark .toastui-editor-contents .image-link:hover::before {
    border-color: #393b42;
    background-color: #232428;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBzdHJva2U9IiNFRUUiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy42NjUgMTUuMDdsLTEuODE5LS4wMDJjLTEuNDg2IDAtMi42OTItMS4yMjgtMi42OTItMi43NDR2LS4xOTJjMC0xLjUxNSAxLjIwNi0yLjc0NCAyLjY5Mi0yLjc0NGgzLjg0NmMxLjQ4NyAwIDIuNjkyIDEuMjI5IDIuNjkyIDIuNzQ0di4xOTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDQ1IC0xNzQzKSB0cmFuc2xhdGUoMTA0MCAxNzM4KSB0cmFuc2xhdGUoNSA1KSBzY2FsZSgxIC0xKSByb3RhdGUoNDUgMzcuMjkzIDApIi8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLjMyNiA0LjkzNGwxLjgyMi4wMDJjMS40ODcgMCAyLjY5MyAxLjIyOCAyLjY5MyAyLjc0NHYuMTkyYzAgMS41MTUtMS4yMDYgMi43NDQtMi42OTMgMi43NDRoLTMuODQ1Yy0xLjQ4NyAwLTIuNjkyLTEuMjI5LTIuNjkyLTIuNzQ0VjcuNjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDQ1IC0xNzQzKSB0cmFuc2xhdGUoMTA0MCAxNzM4KSB0cmFuc2xhdGUoNSA1KSBzY2FsZSgxIC0xKSByb3RhdGUoNDUgMzAuOTk2IDApIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=');
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  .toastui-editor-dark .toastui-editor-contents .task-list-item::before {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjNTU1NzVGIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAzMCAtMzE2KSB0cmFuc2xhdGUoNzg4IDE5MikgdHJhbnNsYXRlKDI0MiAxMjQpIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHg9Ii41IiB5PSIuNSIgcng9IjIiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==');
    background-color: transparent;
  }

  .toastui-editor-dark .toastui-editor-contents .task-list-item.checked::before {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzRCOTZFNiI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2IDBjMS4xMDUgMCAyIC44OTUgMiAydjE0YzAgMS4xMDUtLjg5NSAyLTIgMkgyYy0xLjEwNSAwLTItLjg5NS0yLTJWMkMwIC44OTUuODk1IDAgMiAwaDE0em0tMS43OTMgNS4yOTNjLS4zOS0uMzktMS4wMjQtLjM5LTEuNDE0IDBMNy41IDEwLjU4NSA1LjIwNyA4LjI5M2wtLjA5NC0uMDgzYy0uMzkyLS4zMDUtLjk2LS4yNzgtMS4zMi4wODMtLjM5LjM5LS4zOSAxLjAyNCAwIDEuNDE0bDMgMyAuMDk0LjA4M2MuMzkyLjMwNS45Ni4yNzggMS4zMi0uMDgzbDYtNiAuMDgzLS4wOTRjLjMwNS0uMzkyLjI3OC0uOTYtLjA4My0xLjMyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNTAgLTI5NikgdHJhbnNsYXRlKDc4OCAxOTIpIHRyYW5zbGF0ZSgyNjIgMTA0KSIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K');
  }

  .toastui-editor-dark .toastui-editor-md-delimiter,
  .toastui-editor-dark .toastui-editor-md-code.toastui-editor-md-delimiter,
  .toastui-editor-dark .toastui-editor-md-thematic-break,
  .toastui-editor-dark .toastui-editor-md-link,
  .toastui-editor-dark .toastui-editor-md-table,
  .toastui-editor-dark .toastui-editor-md-block-quote {
    color: #55575f;
  }

  .toastui-editor-dark .toastui-editor-md-meta,
  .toastui-editor-dark .toastui-editor-md-html {
    color: #55575f;
  }

  .toastui-editor-dark .toastui-editor-md-link.toastui-editor-md-link-url.toastui-editor-md-marked-text {
    color: #777980;
  }

  .toastui-editor-dark .toastui-editor-md-block-quote .toastui-editor-md-marked-text,
  .toastui-editor-dark .toastui-editor-md-list-item .toastui-editor-md-meta {
    color: #b3b5bc;
  }

  .toastui-editor-dark .toastui-editor-md-link.toastui-editor-md-link-desc.toastui-editor-md-marked-text,
  .toastui-editor-dark .toastui-editor-md-list-item-style.toastui-editor-md-list-item-odd {
    color: #4b96e6;
  }

  .toastui-editor-dark .toastui-editor-md-list-item-style.toastui-editor-md-list-item-even {
    color: #ef6767;
  }

  .toastui-editor-dark .toastui-editor-md-table .toastui-editor-md-table-cell {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-md-code.toastui-editor-md-marked-text {
    color: #c1798b;
  }

  .toastui-editor-dark .toastui-editor-md-code {
    background-color: #35262a;
  }

  .toastui-editor-dark .toastui-editor-md-code-block-line-background {
    background-color: #232428;
  }

  .toastui-editor-dark .toastui-editor-md-code-block .toastui-editor-md-meta {
    color: #aaa;
  }

  .toastui-editor-dark .toastui-editor-md-custom-block {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-md-custom-block-line-background {
    background-color: #392d31;
  }

  .toastui-editor-dark .toastui-editor-md-custom-block .toastui-editor-md-delimiter {
    color: #327491;
  }

  .toastui-editor-dark .toastui-editor-md-custom-block .toastui-editor-md-meta {
    color: #65acca;
  }

  .toastui-editor-dark .toastui-editor-contents .toastui-editor-md-preview-highlight::after {
    background-color: rgba(255, 250, 193, 0.5);
  }

  .toastui-editor-md-preview {
    background-color: #212225;
  }

  .toastui-editor-dark .toastui-editor-contents th.toastui-editor-md-preview-highlight,
  .toastui-editor-dark .toastui-editor-contents td.toastui-editor-md-preview-highlight {
    background-color: rgba(255, 250, 193, 0.5);
  }

  .toastui-editor-dark .toastui-editor-contents th.toastui-editor-md-preview-highlight {
    color: #fff;
  }

  .toastui-editor-dark .toastui-editor-contents th.toastui-editor-md-preview-highlight,
  .toastui-editor-dark .toastui-editor-contents td.toastui-editor-md-preview-highlight {
    background-color: rgba(255, 250, 193, 0.25);
  }

  .toastui-editor-dark .toastui-editor-contents .toastui-editor-md-preview-highlight::after {
    background-color: rgba(255, 250, 193, 0.25);
  }
`;
