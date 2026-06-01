// 利用 Vite 特有的 import.meta.glob 批量读取所有文件夹下的 html 文件
const pages = import.meta.glob('./*/index*.html');

const nav = document.getElementById('nav');

if (nav) {
  // 对路径进行排序，使 01, 02 顺序排列
  const sortedPaths = Object.keys(pages).sort();

  for (const path of sortedPaths) {
    const cleanPath = path.replace('./', '');
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    // 设置链接和文本
    a.href = cleanPath;
    
    // 从路由中提取类似 "01 - JavaScript Drum Kit" 的标题
    const folderName = cleanPath.split('/')[0];
    const isStart = cleanPath.includes('START');
    
    a.innerHTML = `
      ${folderName} 
      <span class="badge ${isStart ? 'start' : 'finished'}">
        ${isStart ? ' TS ' : ' JS '}
      </span>
    `;
    
    li.appendChild(a);
    nav.appendChild(li);
  }
}
