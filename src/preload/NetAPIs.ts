import { ipcRenderer } from 'electron'

export const netAPIs = {
  net: {
    get: (url: string, params?: any) => ipcRenderer.invoke("ipcAPIs.net.get", url, params),
    post :(url: string, data?: any) => ipcRenderer.invoke("ipcAPIs.net.post", url, data),
    postFile :(url: string, data?: FormData) => ipcRenderer.invoke("ipcAPIs.net.postFile", url, data),
  },
  user: {
    getUser: () => ipcRenderer.invoke("ipcAPIs.user.getUser")
  }
}
