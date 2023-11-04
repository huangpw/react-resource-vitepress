# react-resource-vitepress

前端 React 学习网站，包含 web 端&移动端&小程序&Electron 等栏目

# Gitee

Git 全局设置:

```bash
git config --global user.name "huangpw"
git config --global user.email "1042850644@qq.com"
```

创建 git 仓库:

```bash
mkdir manage-admin
cd manage-admin
git init
touch README.md
git add README.md
git commit -m "huangpw"
git remote add origin https://github.com/huangpw/react-resource-vitepress.git
git remote add origin https://gitee.com/huangpeiwen/react-resource-vitepress.git
git push -u origin "master"
```

```bash
1.初始化
git init
2.查看当前状态
git status
3.提交到暂存区
git add .
4.查询当前状态
git status
5.提交到本地的版本库
git commit -m "huangpw"
6.第一次需要关联远程仓库
git remote add origin https://github.com/huangpw/react-resource-vitepress.git
git remote add origin https://gitee.com/huangpeiwen/react-resource-vitepress.git
7.提交代码到远程仓库
git push -u origin "master"
8.将远程指定分支 拉取到 本地当前分支上
git pull # 将与本地当前分支同名的远程分支 拉取到 本地当前分支上
# git pull origin <远程分支名>:<本地分支名> # 将远程指定分支 拉取到 本地指定分支上
git pull -u origin "master" # git pull origin <远程分支名>
9.将项目克隆到本地
git clone https://github.com/huangpw/react-resource-vitepress.git
git clone https://gitee.com/huangpeiwen/react-resource-vitepress.git
10.删除原来的关联
git remote rm origin
```

# git出现Your branch and ‘origin/master‘ have diverged解决方法

如果不需要保留本地的修改，只要执行下面两步：

```bash
git fetch origin
git reset --hard origin/master
```

当我们在本地提交到远程仓库的时候，如果遇到上述问题，我们可以首先使用如下命令：

```bash
git rebase origin/master
```

然后使用

```bash
git pull --rebase
```

最后使用

```bash
git push origin master
```

把内容提交到远程仓库上。
