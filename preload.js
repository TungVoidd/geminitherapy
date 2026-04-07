const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('bridge', {
  activateTherapy: () => ipcRenderer.send('activate-therapy'),
  hideOverlay: () => ipcRenderer.send('hide-overlay'),
  onShowWand: (fn) => ipcRenderer.on('show-wand', () => fn()),
  onHideWand: (fn) => ipcRenderer.on('hide-wand', () => fn()),
});
