// 本地存储工具函数
// 使用的时候 import { LocalStorage } from '@/utils/storage';
//  LocalStorage.set('userName', '张三');
//  LocalStorage.get('userName') || '未登录';
// 本地存储和会话存储的核心 API 完全一致，区别在于：
// localStorage：数据持久化存储，关闭浏览器后不会丢失（除非手动清除）
// sessionStorage：数据仅在当前会话有效，关闭标签页 / 浏览器后自动清除

export const LocalStorage = {
  // 设置数据
  set(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
 
  // 获取数据
  get(key) {
    const value = localStorage.getItem(key);
    if (!value) return null;
    
    // 尝试解析为对象
    try {
      return JSON.parse(value);
    } catch (e) {
      return value; // 解析失败则返回原始字符串
    }
  },
 
  // 删除数据
  remove(key) {
    localStorage.removeItem(key);
  },
 
  // 清空所有数据
  clear() {
    localStorage.clear();
  }
};
 
// 会话存储工具函数
export const SessionStorage = {
  set(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  },
 
  get(key) {
    const value = sessionStorage.getItem(key);
    if (!value) return null;
    
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },
 
  remove(key) {
    sessionStorage.removeItem(key);
  },
 
  clear() {
    sessionStorage.clear();
  }
};