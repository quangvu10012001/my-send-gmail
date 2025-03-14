// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    loginGmail: (email: string, password: string) =>
      ipcRenderer.invoke('login-gmail', email, password),
    sendEmail: (emailDetails: any) =>
      ipcRenderer.invoke('send-email', emailDetails),
  },
  loginGmail: (email: string, password: string) =>
    ipcRenderer.invoke('login-gmail', email, password),
  sendEmail: (emailDetails: any) =>
    ipcRenderer.invoke('send-email', emailDetails),
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
