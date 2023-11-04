# UMI 配置多环境

**1.项目根目录建立环境文件**

```typescript
// .umirc.production.ts
import { defineConfig } from 'umi';
 
export default defineConfig({
    define: {
        'process.env.NODE_ENV': 'production',
        'process.env.UMI_ENV_REQUEST_URL': 'http://59.110.46.248:888'
    },
});
```

**2.配置启动脚本**

```json
"scripts": {
    "dev": "cross-env UMI_ENV=development max dev",
    "start": "cross-env UMI_ENV=production max dev",
    "build": "cross-env UMI_ENV=development max build",
    "build:prod": "cross-env UMI_ENV=production max build",
    "postinstall": "max setup",
    "setup": "max setup"
  }
```

3.项目中使用

```typescript
console.log(process.env, 'process.env');
```