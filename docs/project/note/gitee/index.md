---
layout: doc
---

# 🐟VitePress+Gitee部署代码

## 1. 先在 gitee 上创建一个工程

![gitee](https://picss.sunbangyan.cn/2023/11/03/7503ea97e3db8723178b7552a328dc6a.png)

## 2. 创建完成后公开仓库

gitee 先在改了规则，新创建工程的时候，只能创建为私有化仓库。

创建完之后，再通过管理修改仓库基本信息，将仓库公开后才能使用`gitee pages`。不过`gitee pages`是需要上传个人信息认证的，认证过之后，就不需要再认证了。

![gitee](https://picss.sunbangyan.cn/2023/11/03/7050228e6aba10e75ad001efbb22fceb.png)

![gitee](https://picst.sunbangyan.cn/2023/11/03/0c2ed15e016041a9ef38109cb577aff6.png)

## 3. 关联项目并发布

Git 全局设置:

```bash
git config --global user.name "huangpw"
git config --global user.email "1042850644@qq.com"
```

创建 git 仓库:

```bash
mkdir react-resource-vitepress
cd react-resource-vitepress
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/huangpeiwen/react-resource-vitepress.git
git push -u origin "master"
```

已有仓库?

```bash
cd existing_git_repo
git remote add origin https://gitee.com/huangpeiwen/react-resource-vitepress.git
git push -u origin "master"
```

![gitee](https://picst.sunbangyan.cn/2023/11/03/6582dc547b379ea027a5520c9f651a80.png)

![gitee](https://picdm.sunbangyan.cn/2023/11/03/064246d395de028eb89fa2615429ac30.png)
![gitee](https://picss.sunbangyan.cn/2023/11/03/adea22fc1b36d911570fbb753207fa3e.png)
