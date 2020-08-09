# IntroductionToAlgorithms_Study

        
------        
        
### 作者：冰红茶  
### 参考书籍：《Introduction to Algorithms》Third Edition Thomas H.Cormen; Charles E.Leiserson; Ronald L.Rivest; Clifford Stein 
### 参考书籍：《剑指Offer》第二版 何海涛
### 参考源：[leetcode：https://www.nowcoder.com/ta/leetcode](https://www.nowcoder.com/ta/leetcode)

            
------    
            
        

   算法技能是每个码农都绕不开的槛。一月份的时候看完了链表和二叉树的一部分，还有分治算法，打算再用一周的时间恶补一下其他的基础知识，然后再刷刷leetcode。复习一下以前的知识，然后准备上战场检验一下自己^_ ^
  
## 目录
- [IntroductionToAlgorithms_Study](#introductiontoalgorithms_study)
    - [作者：冰红茶](#作者冰红茶)
    - [参考书籍：《Introduction to Algorithms》Third Edition Thomas H.Cormen; Charles E.Leiserson; Ronald L.Rivest; Clifford Stein](#参考书籍introduction-to-algorithmsthird-edition-thomas-hcormen-charles-eleiserson-ronald-lrivest-clifford-stein)
    - [参考书籍：《剑指Offer》第二版 何海涛](#参考书籍剑指offer第二版-何海涛)
    - [参考源：leetcode：https://www.nowcoder.com/ta/leetcode](#参考源leetcodehttpswwwnowcodercomtaleetcode)
  - [目录](#目录)
  - [一、排序问题](#一排序问题)
    - [1.1 模板](#11-模板)
      - [冒泡排序](#冒泡排序)
      - [插入排序](#插入排序)
      - [快速排序](#快速排序)
      - [归并排序](#归并排序)
    - [1.2 题目](#12-题目)
      - [1.3 子数组和为定值](#13-子数组和为定值)
      - [42. 接雨水](#42-接雨水)
  - [三、数组问题](#三数组问题)
    - [3.1 常见模版](#31-常见模版)
    - [3.2 题目](#32-题目)
      - [荷兰国旗问题](#荷兰国旗问题)
      - [289. 生命游戏](#289-生命游戏)
      - [面试题 01.07. 旋转矩阵](#面试题-0107-旋转矩阵)
      - [48. 旋转图像](#48-旋转图像)
      - [240. 搜索二维矩阵 II](#240-搜索二维矩阵-ii)
      - [34. 在排序数组中查找元素的第一个和最后一个位置](#34-在排序数组中查找元素的第一个和最后一个位置)
      - [11. 盛最多水的容器](#11-盛最多水的容器)
      - [1248. 统计「优美子数组」](#1248-统计优美子数组)
      - [209. 长度最小的子数组](#209-长度最小的子数组)
      - [386. 字典序排数](#386-字典序排数)
      - [179. 最大数](#179-最大数)
      - [560. 和为K的子数组](#560-和为k的子数组)
      - [456. 132模式](#456-132模式)
      - [面试题53 - II. 0～n-1中缺失的数字](#面试题53---ii-0n-1中缺失的数字面试题53---ii-0n-1中缺失的数字)
      - [36. 有效的数独](#36-有效的数独)
      - [283. 移动零](#283-移动零)
      - [27. 移除元素](#27-移除元素)
      - [26. 删除排序数组中的重复项](#26-删除排序数组中的重复项)
      - [80. 删除排序数组中的重复项 II](#80-删除排序数组中的重复项-ii)
      - [448. 找到所有数组中消失的数字](#448-找到所有数组中消失的数字)
      - [442. 数组中重复的数据](#442-数组中重复的数据)
      - [35.搜索插入位置](#35搜索插入位置)
      - [581. 最短无序连续子数组](#581-最短无序连续子数组)
      - [509 斐波那契数](#509-斐波那契数)
      - [剑指 Offer 14- I. 剪绳子](#剑指-offer-14--i-剪绳子)
      - [剑指 Offer 29. 顺时针打印矩阵](#剑指-offer-29-顺时针打印矩阵)
      - [剑指 Offer 39. 数组中出现次数超过一半的数字](#剑指-offer-39-数组中出现次数超过一半的数字)
      - [剑指 Offer 61. 扑克牌中的顺子](#剑指-offer-61-扑克牌中的顺子)
  - [四、字符串问题](#四字符串问题)
    - [4.1 基本模板](#41-基本模板)
      - [1) 递归法](#1-递归法)
    - [4.2 题目](#42-题目)
      - [面试题48. 最长不含重复字符的子字符串](#面试题48-最长不含重复字符的子字符串)
      - [面试题67. 把字符串转换成整数](#面试题67-把字符串转换成整数)
      - [面试题46. 把数字翻译成字符串](#面试题46-把数字翻译成字符串)
      - [67. 二进制求和](#67-二进制求和)
      - [415. 字符串相加](#415-字符串相加)
      - [1297. 子串的最大出现次数](#1297-子串的最大出现次数)
      - [137. 只出现一次的数字 II](#137-只出现一次的数字-ii)
      - [647. 回文子串](#647-回文子串)
      - [227. 基本计算器 II](#227-基本计算器-ii)
      - [224. 基本计算器](#224-基本计算器)
      - [165. 比较版本号](#165-比较版本号)
      - [242. 有效的字母异位词](#242-有效的字母异位词)
      - [567. 字符串的排列](#567-字符串的排列)
      - [680. 验证回文字符串 Ⅱ](#680-验证回文字符串-ⅱ)
      - [461.汉明距离](#461汉明距离)
      - [443 压缩字符串](#443-压缩字符串)
  - [五、哈希表](#五哈希表)
    - [5.1 基本模板](#51-基本模板)
      - [1) 统计频率](#1-统计频率)
      - [2) 过滤重复数字](#2-过滤重复数字)
    - [5.2 题目](#52-题目)
      - [347. 前 K 个高频元素](#347-前-k-个高频元素)
      - [面试题56 - I. 数组中数字出现的次数](#面试题56---i-数组中数字出现的次数)
      - [面试题56 - II. 数组中数字出现的次数 II](#面试题56---ii-数组中数字出现的次数-ii)
      - [260. 只出现一次的数字 III](#260-只出现一次的数字-iii)
      - [面试题51. 数组中的逆序对](#面试题51-数组中的逆序对)
      - [146. LRU缓存机制](#146-lru缓存机制)
      - [49. 字母异位词分组](#49-字母异位词分组)
  - [六、栈和队列](#六栈和队列)
    - [6.1 基本模板](#61-基本模板)
      - [1) 单调](#1-单调)
    - [6.2 题目](#62-题目)
      - [946. 验证栈序列](#946-验证栈序列)
      - [678. 有效的括号字符串](#678-有效的括号字符串)
      - [剑指 Offer 59 - I. 滑动窗口的最大值](#剑指-offer-59---i-滑动窗口的最大值)
      - [155. 最小栈](#155-最小栈)
      - [剑指 Offer 09. 用两个栈实现队列](#剑指-offer-09-用两个栈实现队列)
  - [七、链表](#七链表)
    - [7.1 基本模板](#71-基本模板)
      - [1) 快慢指针](#1-快慢指针)
      - [2) 反转链表](#2-反转链表)
    - [7.2 题目](#72-题目)
      - [876. 链表的中间结点](#876-链表的中间结点)
      - [138. 复制带随机指针的链表](#138-复制带随机指针的链表)
      - [445. 两数相加 II](#445-两数相加-ii)
      - [141. 环形链表](#141-环形链表)
      - [142. 环形链表 II](#142-环形链表-ii)
      - [61. 旋转链表](#61-旋转链表)
      - [23. 合并K个排序链表](#23-合并k个排序链表)
  - [八、树](#八树)
    - [8.1 基本模板](#81-基本模板)
    - [8.2 题目](#82-题目)
      - [面试题26. 树的子结构](#面试题26-树的子结构)
      - [236. 二叉树的最近公共祖先](#236-二叉树的最近公共祖先)
      - [235. 二叉搜索树的最近公共祖先](#235-二叉搜索树的最近公共祖先)
      - [91. 解码方法](#91-解码方法)
      - [39. 组合总和](#39-组合总和)
      - [39. 镜像二叉树](#39-镜像二叉树)
      - [994. 腐烂的橘子](#994-腐烂的橘子)
      - [572. 另一个树的子树](#572-另一个树的子树)
      - [572. 另一个树的子树](#572-另一个树的子树-1)
      - [230. 二叉搜索树中第K小的元素](#230-二叉搜索树中第k小的元素)
      - [662. 二叉树最大宽度](#662-二叉树最大宽度)
      - [332. 重新安排行程](#332-重新安排行程)
      - [437.路径总和-iii](#437路径总和-iii)
      - [538. 把二叉搜索树转换为累加树](#538-把二叉搜索树转换为累加树)
      - [617. 合并二叉树](#617-合并二叉树)
      - [剑指 Offer 07. 重建二叉树](#剑指-offer-07-重建二叉树)
      - [106. 从中序与后序遍历序列构造二叉树](#106-从中序与后序遍历序列构造二叉树)
      - [114. 二叉树展开为链表](#114-二叉树展开为链表)
      - [剑指 Offer 55 - II. 平衡二叉树](#剑指-offer-55---ii-平衡二叉树)
  - [九、DFS深度优先搜索](#九dfs深度优先搜索)
    - [9.1 基本模板](#91-基本模板)
      - [1) 递归法](#1-递归法-1)
      - [2) 迭代法](#2-迭代法)
    - [9.2 题目](#92-题目)
      - [54. 螺旋矩阵](#54-螺旋矩阵)
      - [59. 螺旋矩阵 II](#59-螺旋矩阵-ii)
  - [十、BFS广度优先搜索](#十bfs广度优先搜索)
    - [10.1 基本模板](#101-基本模板)
      - [1) 递归法](#1-递归法-2)
      - [2) 迭代法](#2-迭代法-1)
    - [10.2 题目](#102-题目)
      - [103 二叉树的锯齿形层次遍历](#103-二叉树的锯齿形层次遍历)
      - [127 单词接龙](#127-单词接龙)
      - [130. 被围绕的区域](#130-被围绕的区域)
      - [199.二叉树的右视图](#199二叉树的右视图)
      - [200. 岛屿数量](#200-岛屿数量)
      - [面试题13. 机器人的运动范围](#面试题13-机器人的运动范围)
      - [22. 括号生成](#22-括号生成)
      - [面试题33. 二叉搜索树的后序遍历序列](#面试题33-二叉搜索树的后序遍历序列)
      - [542. 01 矩阵](#542-01-矩阵)
      - [1091. 二进制矩阵中的最短路径](#1091-二进制矩阵中的最短路径)
      - [剑指 Offer 55 - I. 二叉树的深度](#剑指-offer-55---i-二叉树的深度)
  - [十一、贪心](#十一贪心)
    - [11.1 基本模板](#111-基本模板)
      - [1) 递归法](#1-递归法-3)
      - [2) 迭代法](#2-迭代法-2)
      - [55. 跳跃游戏](#55-跳跃游戏)
      - [面试题 08.11. 硬币](#面试题-0811-硬币)
      - [139. 单词拆分](#139-单词拆分)
  - [十二、回溯法](#十二回溯法)
    - [12.1 基本模板](#121-基本模板)
      - [1) 递归](#1-递归)
      - [2) 迭代法](#2-迭代法-3)
    - [12.2 题目](#122-题目)
      - [79. 单词搜索](#79-单词搜索)
      - [212. 单词搜索 II](#212-单词搜索-ii)
      - [面试题38. 字符串的排列](#面试题38-字符串的排列)
      - [78. 子集](#78-子集)
      - [90. 子集 II](#90-子集-ii)
      - [面试题34. 二叉树中和为某一值的路径](#面试题34-二叉树中和为某一值的路径)
      - [93. 复原IP地址](#93-复原ip地址)
      - [351. 安卓系统手势解锁](#351-安卓系统手势解锁)
      - [216. 组合总和 III](#216-组合总和-iii)
      - [46. 全排列](#46-全排列)
      - [39. 组合总和](#39-组合总和-1)
      - [40. 组合总和 II](#40-组合总和-ii)
      - [77. 组合](#77-组合)
      - [131. 分割回文串](#131-分割回文串)
  - [十三、动态规划](#十三动态规划)
    - [13.1 与分治思想的异同](#131-与分治思想的异同)
      - [1) 相同之处](#1-相同之处)
      - [2) 不同之处](#2-不同之处)
    - [13.2 题目](#132-题目)
      - [1014. 最佳观光组合](#1014-最佳观光组合)
      - [面试题 08.11. 硬币](#面试题-0811-硬币-1)
      - [139. 单词拆分](#139-单词拆分-1)
      - [279. 完全平方数](#279-完全平方数)
      - [377. 组合总和 Ⅳ](#377-组合总和-ⅳ)
      - [518. 零钱兑换 II](#518-零钱兑换-ii)
      - [1143. 最长公共子序列](#1143-最长公共子序列)
      - [583. 两个字符串的删除操作](#583-两个字符串的删除操作)
      - [96. 不同的二叉搜索树](#96-不同的二叉搜索树)
      - [面试题63. 股票的最大利润](#面试题63-股票的最大利润)
      - [714. 买卖股票的最佳时机含手续费](#714-买卖股票的最佳时机含手续费)
      - [343. 整数拆分](#343-整数拆分)
      - [198. 打家劫舍](#198-打家劫舍)
      - [70. 爬楼梯](#70-爬楼梯)
  - [十四、图论](#十四图论)
    - [14.1 基本模板](#141-基本模板)
      - [1) 图的遍历](#1-图的遍历)
      - [2) 有向图是否存在环](#2-有向图是否存在环)
      - [3) 构造无向图](#3-构造无向图)
      - [4) 并查集](#4-并查集)
    - [14.2 题目](#142-题目)
      - [207. 课程表](#207-课程表)
      - [310. 最小高度树](#310-最小高度树)
      - [547. 朋友圈](#547-朋友圈)
  - [十五、数学问题](#十五数学问题)
    - [15.1 基本模板](#151-基本模板)
      - [1) 最大公约数](#1-最大公约数)
    - [15.2 题目](#152-题目)
      - [365. 水壶问题](#365-水壶问题)
      - [264. 丑数 II](#264-丑数-ii)
      - [313. 超级丑数](#313-超级丑数)
      - [面试题62. 圆圈中最后剩下的数字](#面试题62-圆圈中最后剩下的数字)
      - [面试题44. 数字序列中某一位的数字](#面试题44-数字序列中某一位的数字)
      - [190. 颠倒二进制位](#190-颠倒二进制位)
      - [201. 数字范围按位与](#201-数字范围按位与)
      - [231. 2的幂](#231-2的幂)
      - [50. Pow(x, n)](#50-powx-n)
      - [69. x 的平方根](#69-x-的平方根)
      - [1262. 可被三整除的最大和](#1262-可被三整除的最大和)
      - [950. 按递增顺序显示卡牌](#950-按递增顺序显示卡牌)
  - [十六、设计问题](#十六设计问题)
    - [16.1 基本模板](#161-基本模板)
    - [16.2 题目](#162-题目)
      - [355. 设计推特](#355-设计推特)
      - [460. LFU缓存](#460-lfu缓存)
      - [146. LRU缓存机制](#146-lru缓存机制-1)


## 一、排序问题
### 1.1 模板
#### 冒泡排序
```js
    function bubble(arr) {
        let len = arr.length;
        while(len--) {
            for (let j = 0; j < len; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
```

#### 插入排序
```js
    function insert(arr) {
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            while (j - 1 >= 0 && arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                j--;
            }
        }
        return arr;
    }
```

#### 快速排序
```js
    function quick(arr) {
        if (arr.length < 2) return arr;
        const left = [], right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[0]) left.push(arr[i]);
            else right.push(arr[i]);
        }
        return [...quick(left), arr[0], ...quick(right)];
    }
```

#### 归并排序

```js
    function guibing(arr) {
        if (arr.length < 2) return arr;
        const middle = arr.length >> 1, result = [];
        const left = guibing(arr.slice(0, middle)), right = guibing(arr.slice(middle));
        let i = 0, j = 0;
        while (i < left.length || j < right.length) {
            i >= left.length || left[i] >= right[j] ? result.push(right[j++]) : result.push(left[i++]);
        }
        return result;
    }
```

### 1.2 题目
#### 1.3 子数组和为定值
> -  sum = x\[0\]a\[0\] + x\[1\]a\[1\] + x\[2\]a\[2\] + x\[3\]a\[3\] +... 
> -  x数组表示该项的数是否存在，共有2^n种情况
> -  如果迭代的时候需要i的同步更新，则在迭代的时候传入i+1的值;
> -  x\[i-1\] != 0是为了避免出现sum已经等于目标值的情况下，由于后面的x值为0，那么也算作一种情况的话就会有重复的x数组出现

```c
        void Sum(int x[], int a[], int i, int sum) {
            if(i<7 && sum<=7) {
                if(sum == 7 && x[i-1] != 0) {
                    int j=0;
                    for(j=0; j<6; j++) {
                        printf("x[%d] = %d  ", j, x[j]); 
                    }
                    printf("\n\r");
                }
                x[i] = 1;
                Sum(x, a, i+1, sum+a[i]);
                x[i] = 0;
                Sum(x, a, i+1, sum);
            }
        }

        void main() {
            int a[6] = {0,1,2,3,4,5};
            int x[6] = {0,0,0,0,0,0};
            Sum(x, a, 0, 0);
        }

        // 结果
        x[0] = 1  x[1] = 1  x[2] = 1  x[3] = 0  x[4] = 1  x[5] = 0  

        x[0] = 1  x[1] = 0  x[2] = 1  x[3] = 0  x[4] = 0  x[5] = 1  

        x[0] = 1  x[1] = 0  x[2] = 0  x[3] = 1  x[4] = 1  x[5] = 0  

        x[0] = 0  x[1] = 1  x[2] = 1  x[3] = 0  x[4] = 1  x[5] = 0  

        x[0] = 0  x[1] = 0  x[2] = 1  x[3] = 0  x[4] = 0  x[5] = 1  

        x[0] = 0  x[1] = 0  x[2] = 0  x[3] = 1  x[4] = 1  x[5] = 0  
```
> - 分支限界条件 这是一个必要条件而表示充要条件 而且需要在数组的元素均大于0的前提下
> - 必要条件就是说有这个条件的话有可能达到目的，但是没有这个条件就不可能达到目的

```c
void Sum(int x[], int a[], int size, int i, int sum, int res, int targer) {
            if(i<size+1 ) {
                if(sum == targer && x[i-1] != 0) {
                    int j=0;
                    for(j=0; j<size; j++) {
                        printf("x[%d] = %d  ", j, x[j]); 
                    }
                    printf("\n\r");
                }
                if(sum <= targer && sum + res >= targer) {
                    x[i] = 1;
                    Sum(x, a, size, i+1, sum+a[i], res-a[i], targer);
                    }
                if(sum + res-a[i] >= targer) {
                    x[i] = 0;
                    Sum(x, a, size, i+1, sum, res-a[i], targer);
                }
            }
        }

        void main() {
            int a[10] = {1,2,3,4,5,6,7,8,9,10};
            int size = sizeof(a)/sizeof(int);
            int x = (int*)malloc(size*sizeof(int));
            memset(x,0,size);
            int res = 0;
            int j;
            for(j=0; j<size; j++) {
                res += a[j];
            }
            Sum(x, a, size, 0, 0, res, 40);
        }
```

#### [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)
```js
        var trap = function(height) {
            function findMaxHeight(i, j, isLast) {
                if (j < 0) return 0;
                if (i >= j) return j;
                let index = i, max = height[i];
                for(let k = i + 1; k <= j; k++) {
                    if (height[k] >= max) {
                        max = height[k];
                        index = k;
                    }
                }
                return index;
            }
            function half(i, j) {
                if(j - i < 2) return 0;
                const b = findMaxHeight(i, j);
                const a = findMaxHeight(i, b - 1);
                const c = findMaxHeight(b + 1, j, true);
                let sum = 0;
                for(let k = a; k <= c; k++) {
                    if (k === b) continue;
                    sum += (k < b ? height[a] : height[c]) - height[k];
                }
                return half(i, a) + half(c, j) + sum;
            }
            return half(0, height.length - 1);
        };
```
## 三、数组问题
### 3.1 常见模版
> - 搬运符合条件的数组元素到一边

```js
    // 快慢指针
    function move(arr) {
        for (let fast = 0, slow = 0; fast < arr.length; fast++) {
            if (arr[fast] < 0) {
                [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
                slow++;
            }
        }
    }

    // 变种
    function remove(arr) {
        let slow = 0;
        for (let fast = 0; fast < nums.length; fast++) {
            if (nums[fast] !== val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        return slow;
    }

    // sort算法
    function move(arr) {
        arr.sort((a, b) => b < 5 ? 1 : -1);
    }
```

> - 对排序的数组删除重复k次以上的元素
```js
        // 双指针
        var removeDuplicates = function(nums, k) {
            let slow = k;
            for(let i = k; i < nums.length; i++) {
                if(nums[i] !== nums[slow - k]) nums[slow++] = nums[i];
            }
            return slow;
        };
```

> - 原地哈希  利用正负符号可逆运算
```js
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    var findDisappearedNumbers = function(nums) {
        nums.forEach(i => {
            const target = Math.abs(i) - 1;
            if (nums[target] >= 0)
                nums[target] = - nums[target];
        })
    };
```

> - 摩尔投票法

```js
        var majorityElement = function(nums) {
            let vote = 0, target;
            for (let i = 0, len = nums.length; i < len; i++) {
                if (!vote) target = nums[i];
                vote = nums[i] === target ? vote + 1 : vote - 1;
            }
            return target;
        };
```

### 3.2 题目
#### 荷兰国旗问题
```c
void exec(int a[], int size) {
            
            int j = -1;
            int i = -1;
            int k = -1;
            for(k=0; k<size; k++) {
                if(a[k] == 0 ) {
                    if(a[k-1] > a[k]) {
                        a[i+1] = a[i+1] ^ a[k];
                        a[k] = a[i+1] ^ a[k];
                        a[i+1] = a[i+1] ^ a[k];
                    }
                    i++;
                }
                if(a[k] == 1) {
                    if (a[k-1] > a[k]) {
                        a[j+1] = a[j+1] ^ a[k];
                        a[k] = a[j+1] ^ a[k];
                        a[j+1] = a[j+1] ^ a[k];   
                    }
                    j++;
                }
                
                // 由于1一直不出现,j被迫向前
                if(i>j) {
                    j=i;
                }
            }
        }

        void main() {
            // int a[7] = {0,0,0,2,2,2,1};
            // int a[7] = {2,2,2,0,0,0,1};
            int a[7] = {1,1,1,0,0,2,1};
            int size = sizeof(a)/sizeof(int);
            exec(a, size);
            int j;
            for(j=0; j<size; j++) {
                printf("a[%d]=%d ",j,a[j]);
            }
        }
```
#### [289. 生命游戏](https://leetcode-cn.com/problems/game-of-life/solution/ce-wai-kong-jian-jie-fa-ji-yuan-di-jie-fa-by-theow/)
```js
        /**
         * @param {number[][]} board
         * @return {void} Do not return anything, modify board in-place instead.
         */
        var gameOfLife = function(board) {
            const dir = [[0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]];
            const res = [];
            let liveNum;
            for(let i = 0; i < board.length; i++) {
                res[i] = [];
                for(let j = 0; j < board[0].length; j++) {
                    liveNum = dir.reduce((t, [offsetX, offsetY]) => {
                        const [x, y] = [offsetX + i, offsetY + j];
                        if (x >= 0 && x < board.length && y >=0 && y < board[0].length)
                            t += board[x][y];
                        return t;
                    }, 0)
                    if (liveNum === 3) res[i][j] = 1;
                    else if (liveNum === 2) res[i][j] = board[i][j];
                    else res[i][j] = 0;
                }
            }
            for(let i = 0; i < board.length; i++) {
                for(let j = 0; j < board[0].length; j++) {
                    board[i][j] = res[i][j];
                }
            }
            return board;
        };
```

#### [面试题 01.07. 旋转矩阵](https://leetcode-cn.com/problems/rotate-matrix-lcci/)
```js
        /** 
         * @param {number[][]} matrix
         * @return {void} Do not return anything, modify matrix in-place instead.
         */
        var rotate = function(matrix) {
            const copy = JSON.parse(JSON.stringify(matrix));
            const col = matrix[0].length - 1;
            for(let i = 0; i <= col; i++) {
                for(let j = 0; j < matrix.length; j++) {
                    matrix[i][j] = copy[col - j][i];
                }
            }
            return matrix;
        };
        
```
#### [48. 旋转图像](https://leetcode-cn.com/problems/rotate-image)
![image.png](https://pic.leetcode-cn.com/97632fa267c8f8e3f1168015ce0daccad4ba859dbbe8a13a09928e8cb0c39e14-image.png)

```js
        /**
         * @param {number[][]} matrix
         * @return {void} Do not return anything, modify matrix in-place instead.
         */
        var rotate = function(matrix) {
            const lastIndex = matrix.length - 1;
            const half = matrix.length >> 1;
            const halfPlus = (matrix.length + 1) >> 1;
            let a, b, temp;
            for (let i = 0; i < halfPlus; i++) {
                for (let j = 0; j < half; j++) {
                    a = lastIndex - i;
                    b = lastIndex - j;
                    [matrix[i][j], matrix[b][i], matrix[a][b], matrix[j][a]]
                        = [matrix[b][i], matrix[a][b], matrix[j][a], matrix[i][j]];
                }
            }
            return matrix;
        };
```
#### [240. 搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)
```js
        /**
         * @param {number[][]} matrix
         * @param {number} target
         * @return {boolean}
         */
        var searchMatrix = function(matrix, target) {
            for(let item of matrix) {
                if (item[0] > target) return false;
                let left = 0, right = item.length - 1, mid;
                while(left <= right) {
                    mid = (left + right) >> 1;
                    if (item[mid] === target) return true;
                    if (item[mid] > target) right = mid - 1;
                    else left = mid + 1;
                }
            }
            return false;
        };
```
#### [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array)
![image.png](https://pic.leetcode-cn.com/b64d63648a6f0a99eae1d2b9a0869ce65b8edd96f3c71710c405d0cf1de6f954-image.png)
```js
        /**
        * @param {number[]} nums
        * @param {number} target
        * @return {number[]}
        */
        var searchRange = function(nums, target) {
            let left = 0, right = nums.length - 1, mid;
            while (left <= right) {
                mid = (left + right) >> 1;
                if (nums[mid] === target) break;
                if (nums[mid] > target) right = mid - 1;
                else left = mid + 1;
            }
            if(left > right) return [-1, -1];
            let i = mid, j = mid;
            while(nums[i] === nums[i - 1]) i--;
            while(nums[j] === nums[j + 1]) j++;
            return [i, j];
        };
```
```js
        /**
        * @param {number[]} nums
        * @return {number}
        */
        var findDuplicate = function(nums) {
            let i = nums[0], j = nums[0];
            while(i !== j) {
                i = nums[i];
                j = nums[j];
                j = nums[j];
            }
            return i;
        };
```
#### [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)
```js
        /**
         * @param {number[]} height
         * @return {number}
         */
        var maxArea = function(height) {
            let left = 0, right = height.length - 1, max = 0, sum = 0;
            while(left < right) {
                sum = Math.min(height[left], height[right]) * (right - left);
                max = Math.max(sum, max);
                height[left] > height[right] ? right-- : left++;
            }
            return max;
        };
```

#### [1248. 统计「优美子数组」](https://leetcode-cn.com/problems/count-number-of-nice-subarrays/)
```js
        /**
         * @param {number[]} nums
         * @param {number} k
         * @return {number}
         */
        var numberOfSubarrays = function(nums, k) {
            let sum = 0, queue = [-1];
            for (let i = 0; i <= nums.length; i++) {
                if (nums[i] & 1 || i === nums.length) queue.push(i);
                if (queue.length === k + 2) {
                    sum += (queue[1] - queue[0]) * (i - queue[k]);
                    queue.shift();
                }
            }
            return sum;
        };
```

#### [209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)
![image.png](https://pic.leetcode-cn.com/cd3393a28111964c0150d2e28387f962e1e06ae53efcf58e507a6be63d66b64d-image.png)

```js
        /**
         * @param {number} s
         * @param {number[]} nums
         * @return {number}
         */
        var minSubArrayLen = function(s, nums) {
            let min = Infinity, start = 0, sum = nums[0];
            if (sum >= s) return 1;
            for (let i = 1; i < nums.length; i++) {
                sum += nums[i];
                if (sum >= s) {
                    while(sum - nums[start] >= s) sum -= nums[start++];
                    min = Math.min(min, i - start + 1);
                }
            }
            return min === Infinity ? 0 : min;
        };
        /**
         * @param {number} s
         * @param {number[]} nums
         * @return {number}
         */
        var minSubArrayLen = function(s, nums) {
            let min = Infinity, sum;
            for(let i = 0; i < nums.length; i++) {
                if (nums[i] >= s) return 1;
                let j = i, sum = nums[j];
                while (sum + nums[--j] < s) sum += nums[j];
                if (j >= 0) min = Math.min(min, i - j + 1);
            }
            return min === Infinity ? 0 : min;
        };
```
#### [386. 字典序排数](https://leetcode-cn.com/problems/lexicographical-numbers/)
```js
        /**
         * @param {number} n
         * @return {number[]}
         */
        var lexicalOrder = function(n) {
            const res = [];
            for (let i = 0; i < n; i++) res[i] = i + 1;
            res.sort((a, b) => '' + a > '' + b ? 1 : -1);
            return res;
        };

        /** 树
         * @param {number} n
         * @return {number[]}
         */
        var lexicalOrder = function(n) {
            const stack = [9, 8, 7, 6, 5, 4, 3, 2, 1];
            const res = [];
            let i = stack.length, temp, front;
            while(i) {
                while(i--) {
                    front = stack.pop();
                    if (front === undefined || front > n)  continue;
                    res.push(front);
                    for(let i = 9; i >= 0; i--) stack.push(+('' + front + i));
                }
                i = stack.length;
            }
            return res;
        };
```
#### [179. 最大数](https://leetcode-cn.com/problems/largest-number/)
```js
        /**
         * @param {number[]} nums
         * @return {string}
         */
        var largestNumber = function(nums) {
            nums.sort((a, b) => +('' + b + a) - +('' + a + b));
            const res = nums.join('');
            return res[0] === '0' ? '0' : res;
        };
```

#### [560. 和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)
```js
        /**
        * @param {number[]} nums
        * @param {number} k
        * @return {number}
        */
        var subarraySum = function(nums, k) {
            let res = 0; sum = 0, j = 0;
            const record = [];
            for (let i = 0; i < nums.length; i++) {
                sum += nums[i];
                record[i] = sum;
                if(sum === k) res++;
            }
            for (let i = 1; i < nums.length; i++) {
                for (let j = 0; j < i; j++) {
                    if (record[i] - record[j] === k) res++;
                }
            }
            return res;
        };
```

#### [456. 132模式](https://leetcode-cn.com/problems/132-pattern/)
```js
        /**
        * @param {number[]} nums
        * @return {boolean}
        */
        var find132pattern = function(nums) {
            let min = nums[0];
            for(let i = 1; i < nums.length; i++) {
                if (nums[i] > min) {
                    for (let j = i + 1; j < nums.length; j++) {
                        if (nums[j] > min && nums[j] < nums[i]) return true;
                    }
                }
                if (nums[i] < min) min = nums[i];
            }
            return false;
        };
```

#### [面试题53 - II. 0～n-1中缺失的数字](面试题53 - II. 0～n-1中缺失的数字)
![image.png](https://pic.leetcode-cn.com/929563a4bb25b99b59c756ab52c73b71923e49e408f18cd617b78180698ec7bc-image.png)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length - 1 === nums[nums.length - 1]) return nums.length;
    if (nums[0]) return 0;
    let left = 0, right = (nums.length - 1) >> 1;
    while(left <= right) {
        mid = (left + right) >> 1;
        if (mid === nums[mid]) left = mid + 1;
        else break;
    }
    while(left === nums[left]) left++;
    return left;
};
```

#### [36. 有效的数独](https://leetcode-cn.com/problems/valid-sudoku/)

![image.png](https://pic.leetcode-cn.com/b3fb556c88bf74629e2c2fc1de164b05181f9c9af041676dfe1155b374860b68-image.png)
```js
        /**
        * @param {character[][]} board
        * @return {boolean}
        */
        var isValidSudoku = function(board) {
            const row = board.length, col = board[0].length;
            if (row % 3 || col % 3) return false;
            const row3 = row / 3, col3 = col / 3;
            const recordRow = new Set();
            const recordCol = Array(col).fill(0).map(i => new Set());
            const recordSqu = [];
            for(let i = 0; i < row / 3; i++) {
                recordSqu[i] = [];
                for(let j = 0; j < col / 3; j++) {
                    recordSqu[i][j] = new Set();
                }
            }
            let i3, j3;
            for(let i = 0; i < row; i++) {
                recordRow.clear();
                i3 = parseInt(i / 3);
                for(let j = 0; j < col; j++) {
                    if (board[i][j] === '.') continue;
                    if (recordRow.has(board[i][j])) return false;
                    recordRow.add(board[i][j]);
                    if (recordCol[j].has(board[i][j])) return false;
                    recordCol[j].add(board[i][j]);
                    j3 = parseInt(j / 3);
                    if (recordSqu[i3][j3].has(board[i][j])) return false;
                    recordSqu[i3][j3].add(board[i][j]);
                }
            }
            return true;
        };
```

#### [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

```js
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var moveZeroes = function(nums) {
        let len = nums.length;
        for (let i = 0; i < len; i++) {
            if (!nums[i]) {
                nums.splice(i, 1);
                nums.push(0);
                i--;
                len--;
            }
        }
    };

    // 快慢指针
    // 还可以拓展到其他需要搬运数组元素到一边的情况
    var moveZeroes = function(nums) {
        for (let i = 0, slow = 0; i < nums.length; i++) {
            nums[i] && ([nums[i], nums[slow++]] = [nums[slow], nums[i]]);
        }
    };
```

#### [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

![截屏2020-07-19 下午5.21.13.png](https://pic.leetcode-cn.com/29cae64c720c3d576d383c10179f328098c652afe8a4dfbfedb402337fe30a96-%E6%88%AA%E5%B1%8F2020-07-19%20%E4%B8%8B%E5%8D%885.21.13.png)

```js
    
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    var removeElement = function(nums, val) {
        nums.sort((a, b) => a === val ? 1 : -1);
        nums.indexOf(val) >= 0 && nums.splice(nums.indexOf(val));
        return nums.length;
    };

    // 双指针
    var removeElement = function(nums, val) {
        let slow = 0;
        for (let fast = 0; fast < nums.length; fast++) {
            if (nums[fast] !== val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        return slow;
    };
```

#### [26. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

![截屏2020-07-19 下午6.12.09.png](https://pic.leetcode-cn.com/c810dc24d4758a35d10b659b34bf483721cca353f97fa498e3d2cc9816a197c2-%E6%88%AA%E5%B1%8F2020-07-19%20%E4%B8%8B%E5%8D%886.12.09.png)

```js
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var removeDuplicates = function(nums) {
            let slow = 1;
            for (let i = 1; i < nums.length; i++) {
                if (nums[i - 1] !== nums[i]) {
                    nums[slow++] = nums[i];
                }
            }
            return slow;
        };
```

#### [80. 删除排序数组中的重复项 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii)
![截屏2020-07-19 下午8.11.16.png](https://pic.leetcode-cn.com/4b0853ba92b9f38e063d9c660bf3aac92761c5b24e0b7b87cd27db5dffdfd528-%E6%88%AA%E5%B1%8F2020-07-19%20%E4%B8%8B%E5%8D%888.11.16.png)

```js
        /**
         * @param {number[]} nums
         * @return {number}
         */

        // 双指针
        var removeDuplicates = function(nums) {
            let slow = 2;
            for(let i = 2; i < nums.length; i++) {
                if(nums[i] !== nums[slow - 2]) nums[slow++] = nums[i];
            }
            return slow;
        };

        // splice
        var removeDuplicates = function(nums) {
            for(let i = 1; i < nums.length; i++) {
                if (nums[i] === nums[i - 1]) {
                    let j = i;
                    while (nums[j++] === nums[j]) nums.splice(j--, 1);
                }
            }
            return nums.length;
        };
```

#### [448. 找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)

![截屏2020-07-19 下午9.41.29.png](https://pic.leetcode-cn.com/57d6cebfd6a03e7d282631d336d11dbfd84aeb720e863cc19c0a33a92c916e87-%E6%88%AA%E5%B1%8F2020-07-19%20%E4%B8%8B%E5%8D%889.41.29.png)

```js
        /**
         * @param {number[]} nums
         * @return {number[]}
         */
        var findDisappearedNumbers = function(nums) {
            nums.forEach(i => {
                const target = Math.abs(i) - 1;
                if (nums[target] >= 0)
                    nums[target] = - nums[target];
            })
            return nums.reduce((t, i, index) => {
                if (i > 0) t.push(index + 1);
                return t
            }, [])
        };
```

#### [442. 数组中重复的数据](https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/)

![截屏2020-07-19 下午10.42.23.png](https://pic.leetcode-cn.com/e3256f4460bb99f36b7b622ed9a8ae008d9f88fc941dbec4013a8642c651e5f9-%E6%88%AA%E5%B1%8F2020-07-19%20%E4%B8%8B%E5%8D%8810.42.23.png)

```js
        /**
         * @param {number[]} nums
         * @return {number[]}
         */
        var findDuplicates = function(nums) {
            nums.forEach(i => {
                const target = (i >> 0) - 1;
                const origin = nums[target] >> 0;
                if (nums[target] - origin < 0.9) {
                    nums[target] = (nums[target] * 10 + 1) / 10;
                }
            })
            return nums.reduce((t, i, index) => {
                if (i * 10 - (i >> 0) * 10 === 2) t.push(index + 1);
                return t;
            }, []);
        };
```


#### [35.搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

![image.png](https://pic.leetcode-cn.com/7040bad11f507b09c1ec2ab675a38d5a6cfb94a627142371bd622571fbeadfe7-image.png)


```js
        /*
        * @lc app=leetcode.cn id=35 lang=javascript
        *
        * [35] 搜索插入位置
        */

        // @lc code=start
        /**
         * @param {number[]} nums
         * @param {number} target
         * @return {number}
         */
        var searchInsert = function(nums, target) {
            let left = 0, right = nums.length - 1, middle;
            while(left <= right) {
                middle = (left + right) >> 1;
                if (nums[middle] === target) return middle;
                if (nums[middle] > target) right = middle - 1;
                else left = middle + 1;
            }
            return left;
        };
```

#### [581. 最短无序连续子数组](https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray)

![image.png](https://pic.leetcode-cn.com/eb6e554bff45ca7a6ec27448c3eea857a15b23c025254478e5c6ce33e64dcbcb-image.png)

```js
        /*
        * @lc app=leetcode.cn id=581 lang=javascript
        *
        * [581] 最短无序连续子数组
        */

        // @lc code=start
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var findUnsortedSubarray = function(nums) {
            const copy = [...nums];
            copy.sort((a, b) => a - b);
            let i = 0, j = nums.length - 1;
            while (i < nums.length && nums[i] === copy[i]) i++;
            if (i === nums.length) return 0;
            while (j >= 0 && nums[j] === copy[j]) j--;
            return j - i + 1;
        };
```

#### [509 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number)

```js
        /*
        * @lc app=leetcode.cn id=509 lang=javascript
        *
        * [509] 斐波那契数
        */

        // @lc code=start
        /**
         * @param {number} n
         * @return {number}
         */
        var fib = function(n) {
            let slow = 0, fast = n ? 1 : 0;
            for (let i = 2; i <= n; i++) {
                [slow, fast] = [fast, (slow + fast) % 1000000007];
            }
            return fast;
        };
```

#### [剑指 Offer 14- I. 剪绳子](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

```js
        /**
         * @param {number} n
         * @return {number}
         */
        var cuttingRope = function(n) {
            if (n === 2) return 1;
            if (n === 3) return 2;
            const dp = [1, 1, 2, 3];
            for (let i = 4; i <= n; i++) {
                dp[i] = 0;
                for (let j = 1; j < i; j++) {
                    dp[i] = Math.max(dp[i], dp[i - j] * dp[j]);
                }
            }
            return dp[n];
        };
```


#### [剑指 Offer 29. 顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof)

![截屏2020-08-03 上午1.12.42.png](https://pic.leetcode-cn.com/c4776711f59585bada69ff04b5cce6be83bd5a0fe0ea275df3c06a0c0fac8848-%E6%88%AA%E5%B1%8F2020-08-03%20%E4%B8%8A%E5%8D%881.12.42.png)

```js
        /**
         * @param {number[][]} matrix
         * @return {number[]}
         */
        var spiralOrder = function(matrix) {
            const result = [];
            if (!matrix.length) return result;
            const col = matrix[0].length;
            const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            let i = 0, j = 0, k = 0, tol = matrix.length * col;
            while(result.length < tol) {
                if (i >= 0 && i < matrix.length && j >= 0 && j < col && matrix[i][j] !== '*') {
                    result.push(matrix[i][j]);
                    matrix[i][j] = '*';
                }
                else {
                    i -= dir[k][0];
                    j -= dir[k][1];
                    k++;
                    if (k === dir.length) k = 0;
                }
                i += dir[k][0];
                j += dir[k][1];
            } 
            return result;
        };
```


#### [剑指 Offer 39. 数组中出现次数超过一半的数字](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)

![image.png](https://pic.leetcode-cn.com/2853aa09967c7ddd572c0370509d28946802ed4ca9796379989715afe8eff415-image.png)

```js
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var majorityElement = function(nums) {
            let vote = 0, target;
            for (let i = 0, len = nums.length; i < len; i++) {
                if (!vote) target = nums[i];
                vote = nums[i] === target ? vote + 1 : vote - 1;
            }
            return target;
        };
```

#### [剑指 Offer 61. 扑克牌中的顺子](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/solution/js-pai-xu-bao-li-fa-by-hblvsjtu/)

![image.png](https://pic.leetcode-cn.com/712942fd0712e8f2c0d7acec254eb6f6bee534f453e751e8c6b96a2aa2472bf4-image.png)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a, b) => a - b);
    let kingNum = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!nums[i]) kingNum++;
        else if (i > kingNum && nums[i] - nums[i - 1] !== 1) {
            if (!kingNum) return false;
            kingNum--;
            nums[--i]++;
        }
    }
    return true;
};
```


## 四、字符串问题
### 4.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
### 4.2 题目
#### [面试题48. 最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/solution/jsdong-tai-gui-hua-by-heronwan-3/)

```js
        var lengthOfLongestSubstring = function(s) {
            let record = '', max = 0, index;
            for(let i = 0; i < s.length; i++) {
                index = record.indexOf(s[i]);
                record += s[i];
                if (index >= 0) record = record.substring(index + 1);
                else max = Math.max(max, record.length);
            }
            return max;
        };
```
#### [面试题67. 把字符串转换成整数](https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/)

```js
        /**
         * @param {string} str
         * @return {number}
         */
        var strToInt = function(str) {
            let res = str.trim().match(/^([+-]?\d+).*$/);
            if (!res) return 0;
            if (res[1] < -2147483648) return -2147483648;
            else if (res[1] > 2147483647) return 2147483647;
            return res[1];
        };
```

#### [面试题46. 把数字翻译成字符串](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)

```js
        /**
         * @param {number} num
         * @return {number}
         */
        var translateNum = function(num) {
            let str = '' + num;
            let res = 0;
            function dfs(i) {
                if (i >= str.length) res++;
                else {
                    dfs(i + 1);
                    if (+str[i] && +(str[i] + str[i + 1]) < 26) dfs(i + 2);
                }
            }
            dfs(0);
            return res;
        };
```

#### [67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)

```js
        /**
         * @param {string} a
         * @param {string} b
         * @return {string}
         */
        var addBinary = function(a, b) {
            let max = Math.max(a.length, b.length);
            a = a.padStart(max, 0);
            b = b.padStart(max, 0);
            let res = '', sum = 0;
            while(max--) {
                sum = (+a[max]) + (+b[max]) + (sum > 1);
                res = (sum & 1) + res;
            }
            return sum > 1 ? '1' + res : res; 
        };
```

#### [415. 字符串相加](https://leetcode-cn.com/problems/add-strings/)

```js
        /**
         * @param {string} num1
         * @param {string} num2
         * @return {string}
         */
        var addStrings = function(num1, num2) {
            let max = Math.max(num1.length, num2.length);
            num1 = num1.padStart(max, 0);
            num2 = num2.padStart(max, 0);
            let res = '', sum = 0;
            while(max--) {
                sum = (+num1[max]) + (+num2[max]) + (sum > 9);
                res = (sum % 10) + res;
            }
            return sum > 1 ? '1' + res : res; 
        };
```
#### [1297. 子串的最大出现次数](https://leetcode-cn.com/problems/maximum-number-of-occurrences-of-a-substring)

```js
        /**
         * @param {string} s
         * @param {number} maxLetters
         * @param {number} minSize
         * @param {number} maxSize
         * @return {number}
         */
        var maxFreq = function(s, maxLetters, minSize, maxSize) {
            const record = {};
            const constLen = minSize - 1;
            let temp = '*' + s.substr(0, constLen);
            for (let i = constLen; i < s.length; i++) {
                temp = temp.substr(1, constLen) + s[i];
                if (new Set(temp).size <= maxLetters) {
                    if(record[temp]) record[temp]++;
                    else record[temp] = 1;
                }
            }
            return Object.keys(record || {}).reduce((t, i) => record[i] > t ? record[i] : t, 0);
        };
```

#### [137. 只出现一次的数字 II](https://leetcode-cn.com/problems/single-number-ii/)
![image.png](https://pic.leetcode-cn.com/57706ddd74fb4814c7bd1f762dc789528f5259d4784fecea8897531fb1beb084-image.png)

```js
        var singleNumber = function(nums) {
            return +Object.keys(nums.reduce((t, i) => {
                if (t[i] === 2) delete t[i];
                else if (t[i] === 1) t[i] = 2;
                else t[i] = 1;
                return t;
            }, {}))
        };
```

#### [647. 回文子串](https://leetcode-cn.com/problems/palindromic-substrings)
```js
        /**
        * @param {string} s
        * @return {number}
        */
        var countSubstrings = function(s) {
            let dp = 0;
            for(let i = 0; i < s.length; i++) {
                for (let j = 0; j <= i; j++) {
                    let left = j, right = i;
                    while(left <= right) {
                        if (s[left] !== s[right]) break;
                        left++;
                        right--;
                    }
                if (left >= right) dp++;
                }
            }
            return dp;
        };

        /**
        * @param {string} s
        * @return {number}
        */
        var countSubstrings = function(s) {
            let dp = 0, left, right;
            let heads = [], head, temp;
            for(let i = 0; i < s.length; i++) {
                temp = [i];
                if (s[i === s[i - 1]]) temp.push(i - 1);
                heads.forEach(index => {
                    head = index - 1;
                    if (s[head] === s[i]) temp.push(head);
                });
                dp += temp.length;
                heads = temp;
            }
            return dp;
        };
```

#### [227. 基本计算器 II](https://leetcode-cn.com/problems/basic-calculator-ii/)
```js
    /**
     * @param {string} s
     * @return {number}
     */
    var calculate = function(s) {
        s = s.replace(/ +/g, '').match(/(\+|-|\*|\/|\d+)/g);
        const stack = [];
        for(let i = 0; i < s.length; i++) {
            if (s[i] === '*') {
                stack.push(stack.pop() * +s[i + 1]);
                i++;
            }
            else if (s[i] === '/') {
                stack.push(parseInt(stack.pop() / +s[i + 1], 10));
                i++;
            }
            else {
                stack.push(s[i]);
            }
        }
        let res = +stack[0];
        for(let i = 1; i < stack.length; i += 2) {
            if (stack[i] === '+') res += +stack[i + 1];
            else if (stack[i] === '-') res -= +stack[i + 1];
        }
        return res;
    };
```

#### [224. 基本计算器](https://leetcode-cn.com/problems/basic-calculator/)
```js
    /**
     * @param {string} s
     * @return {number}
     */
    var calculate = function(s) {
        s = s.replace(/ +/g, '').match(/(\+|-|\*|\/|\d+|\(|\))/g);
        const stack = [];
        let left;
        for (let i = 0; i < s.length;) {
            if (s[i] === ')') {
                left = stack.pop();
                res = '' + simpleCal(s.slice(left + 1, i));
                s = [].concat(s.slice(0, left), res, s.slice(i + 1));
                i = left + 1;
                continue;
            }
            if (s[i] === '(') stack.push(i);
            i++;
        }
        return simpleCal(s);
        function simpleCal(s) {
            const stack = [];
            for(let i = 0; i < s.length; i++) {
                if (s[i] === '*') {
                    stack.push(stack.pop() * +s[i + 1]);
                    i++;
                }
                else if (s[i] === '/') {
                    stack.push(parseInt(stack.pop() / +s[i + 1], 10));
                    i++;
                }
                else {
                    stack.push(s[i]);
                    }
                }
                let res = +stack[0];
                for(let i = 1; i < stack.length; i += 2) {
                    if (stack[i] === '+') res += +stack[i + 1];
                    else if (stack[i] === '-') res -= +stack[i + 1];
                }
                return res;
                }
            };
        }
    }
  
```

#### [165. 比较版本号](https://leetcode-cn.com/problems/compare-version-numbers/)
```js
        /**
         * @param {string} version1
         * @param {string} version2
         * @return {number}
         */
        var compareVersion = function(version1, version2) {
            const v1 = version1.split('.');
            const v2 = version2.split('.');
            let i = 0, temp1, temp2;
            while(i < v1.length || i < v2.length) {
                if (i >= v1.length && parseInt(v2[i], 10)) {
                    if (parseInt(v2[i], 10)) 
                }
                else if (i >= v2.length) {
                    if (parseInt(v1[i], 10)) return 1;
                }
                else {
                    temp1 = parseInt(v1[i], 10);
                    temp2 = parseInt(v2[i], 10);
                    if (temp1 !== temp2) return temp1 > temp2 ? 1 : -1;
                }
                i++;
            }
            return 0;
        };
```

#### [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
```js
        /**
         * @param {string} s
         * @param {string} t
         * @return {boolean}
         */
        var isAnagram = function(s, t) {
            if (s.length !== t.length) return false;
            return s.split('').sort((a, b) => a > b ? 1 : -1).join('')
                === t.split('').sort((a, b) => a > b ? 1 : -1).join('')
        };
```

#### [567. 字符串的排列](https://leetcode-cn.com/problems/permutation-in-string)
![image.png](https://pic.leetcode-cn.com/6b35cff04d361dc9d980bb61fb867e70e7016b131514f01073eabb9e55d2c119-image.png)

```js
var checkInclusion = function(s1, s2) {
    const record = {};
    for (let i of s1) {
        if (record[i]) record[i]++;
        else record[i] = 1;
    }
    for (let i of s2.substring(0, s1.length)) {
        if (record[i] !== undefined) record[i]--;
    }
    if (Object.values(record).every(i => i === 0)) return true;
    let j = 0;
    for(let i = s1.length; i < s2.length; i++) {
        if (record[s2[i]] !== undefined) record[s2[i]]--;
        if (record[s2[j]] !== undefined) record[s2[j]]++;
        j++;
        if (Object.values(record).every(i => !i)) return true;
    }
    return false;
};
```

#### [680. 验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)
```js
        /**
         * @param {string} s
         * @return {boolean}
         */
        var validPalindrome = function(s) {
            if (s.length <= 2) return true;
            let left = 0, right = s.length - 1;
            while(left <= right) {
                if (s[left] !== s[right]) {
                    if (s[left] === s[right - 1] && check(s, left, right - 1)) return true;
                    if (s[left + 1] === s[right] && check(s, left + 1, right)) return true;
                    return false;
                }
                left++;
                right--;
            }
            function check(s, left, right) {
                while(left <= right) {
                    if (s[left] !== s[right]) return false;
                    left++;
                    right--;
                }
                return true;
            }
            return true;
        };
```

#### [461.汉明距离](https://leetcode-cn.com/problems/valid-palindrome-ii/)

![image.png](https://pic.leetcode-cn.com/ae6c6e91275fac6686913b9f775235b65a0ad8a11c9526170bda4a16e5fbec9d-image.png)
```js
        /*
        * @lc app=leetcode.cn id=461 lang=javascript
        *
        * [461] 汉明距离
        */

        // @lc code=start
        /**
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        var hammingDistance = function(x, y) {
            return (x ^ y).toString(2).replace(/0/g, '').length;
        };
```

#### [443 压缩字符串](https://leetcode-cn.com/problems/string-compression/solution/)

70/70 cases passed (92 ms)
Your runtime beats 31.61 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (39.4 MB)

```js
        /*
        * @lc app=leetcode.cn id=443 lang=javascript
        *
        * [443] 压缩字符串
        */

        // @lc code=start
        /**
         * @param {character[]} chars
         * @return {number}
         */
        var compress = function(chars) {
            let res = '', j = 0, k = 0;
            for (let i = 0; i < chars.length; i = j) {
                while (chars[++j] === chars[i]);
                res += chars[i] + (j - i > 1 ? j - i : '');
            }
            for (let s of res) chars[k++] = s;
            return res.length;
        };
```

## 五、哈希表
### 5.1 基本模板 
        
#### 1) 统计频率
```js
        const res = nums.reduce((t, i) => {
            t[i] = t[i] ? t[i] + 1 : 1;
            return t;
        }, {});
```
#### 2) 过滤重复数字
```js
        const record = {};
        const res = nums.reduce((t, i) => {
            if(!record[i]) {
                record[i] = true;
                t.push(i);
            }
            return t;
        }, []);
```

### 5.2 题目
#### [347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)
```js
       /**
        * @param {number[]} nums
        * @param {number} k
        * @return {number[]}
        */
       var topKFrequent = function(nums, k) {
           const record = nums.reduce((t, i) => {
               t[i] = t[i] ? t[i] + 1 : 1;
               return t;
           }, {});
           return Object.entries(record)
               .sort((a, b) => b[1] - a[1])
               .slice(0, k)
               .map(entry => +entry[0]);
       };
```

#### [面试题56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)
```js
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var singleNumbers = function(nums) {
            return Array.from(nums.reduce((t, num) => {
                t.has(num) ? t.delete(num) : t.add(num);
                return t;
            }, new Set()));
        };
```
#### [面试题56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)
```js
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var singleNumbers = function(nums) {
            const temp = new Set();
            return Array.from(nums.reduce((t, num) => {
                !t.has(num) ? t.add(num) :(temp.has(num) ? t.delete(num) : temp.add(num))
                return t;
            }, new Set()));
        };
```
#### [260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/)
![截屏2020-04-25 下午4.57.23.png](https://pic.leetcode-cn.com/489e1494eb6bdefd8f168d9c9ebea2316e67b59aefca06ffc1a49565e26dc6c2-%E6%88%AA%E5%B1%8F2020-04-25%20%E4%B8%8B%E5%8D%884.57.23.png)
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const res  = new Set();
    nums.forEach(i => res.has(i) ? res.delete(i) : res.add(i));
    return Array.from(res);
};
```

#### [面试题51. 数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)
```js
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var reversePairs = function(nums) {
            let res = 0, temp, j;
            const record = [0];
            const repeat = {};
            repeat[nums[0]] = 0;
            for(let i = 1; i < nums.length; i++) {
                repeat[nums[i]] = repeat[nums[i]] !== undefined ? repeat[nums[i]] + 1 : 0;
                temp = 0;
                j = i;
                while(j--) {
                    if (nums[j] === nums[i]) {
                        temp += record[j];
                        break;
                    }
                    if (nums[j] === nums[i] + 1) {
                        temp += (record[j] + 1) + repeat[nums[j]];
                        break;
                    }
                    if (nums[i] < nums[j]) temp++;
                }
                record[i] = temp;
                res += temp;
            }
            return res;
        };
```

#### [146. LRU缓存机制](https://leetcode-cn.com/problems/lru-cache/)
```js
        /**
         * @param {number} capacity
         */
        var LRUCache = function(capacity) {
            this.orderMap = new Map();
            this.capacity = capacity;
        };

        /** 
         * @param {number} key
         * @return {number}
         */
        LRUCache.prototype.get = function(key) {
            if(!this.orderMap.has(key)) return -1;
            let value = this.orderMap.get(key);
            this.orderMap.delete(key);
            this.orderMap.set(key, value);
            return value;
        };

        /** 
         * @param {number} key 
         * @param {number} value
         * @return {void}
         */
        LRUCache.prototype.put = function(key, value) {
            if (this.orderMap.has(key)) this.orderMap.delete(key);
            else if(this.orderMap.size >= this.capacity) this.orderMap.delete(this.orderMap.keys().next().value);
            this.orderMap.set(key, value);
        };

        /**
         * Your LRUCache object will be instantiated and called as such:
         * var obj = new LRUCache(capacity)
         * var param_1 = obj.get(key)
         * obj.put(key,value)
         */

```

#### [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)
![image.png](https://pic.leetcode-cn.com/98eb13bb85981d6d3e10bb8450e87d78d8af1b86488b22d5fa66cab97c22f282-image.png)

```js
        var groupAnagrams = function(strs) {
            if (!strs.length) return [];
            const res = [[strs[0]]];
            let temp = strs[0].split('').sort((a, b) => a > b ? 1 : -1).join('');
            const record = {};
            record[temp] = 0;
            let j = 1;
            for(let i = 1; i < strs.length; i++) {
                temp = strs[i].split('').sort((a, b) => a > b ? 1 : -1).join('');
                if (record[temp] !== undefined) res[record[temp]].push(strs[i]);
                else {
                    res[j] = [strs[i]];
                    record[temp] = j++;
                }
            }
            return res;
        };
```

## 六、栈和队列
### 6.1 基本模板 
        
#### 1) 单调
> - 单调栈 特点：原始数组是一个栈，先进后出

```js
        // x: 要添加的数据
        // y: 要删除的数据
        // 单调递减
        const stack = [...];
        if (x >= this.stack[0] || !this.stack.length) this.stack.unshift(x);
        if (y === queue[0]) queue.shift();
```

> - 单调队列（双端队列） 特点：原始数组是一个队列，先进先出
```js
        // x: 要添加的数据
        // y: 要删除的数据
        // 单调递减
        const queue = [...];
        while (x >= queue[queue.length - 1]) queue.pop();
        queue.push(x);
        if (y === queue[0]) queue.shift();
```


### 6.2 题目
#### [946. 验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences/submissions/)

```js
        /**
        * @param {number[]} pushed
        * @param {number[]} popped
        * @return {boolean}
        */
        var validateStackSequences = function(pushed, popped) {
            const stask = [];
            let popHead = 0, j;
            for(let i = 0; i < pushed.length; i++) {
                if(pushed[i] !== popped[popHead]) stask.push(pushed[i]);
                else popHead++;
                j = stask.length - 1;
                while(j >=0 && stask[j] === popped[popHead]) {
                    j--;
                    popHead++;
                }
                stask.splice(j + 1);
            }
            return popHead === pushed.length;
        };
```

#### [678. 有效的括号字符串](https://leetcode-cn.com/problems/valid-parenthesis-string/)
![image.png](https://pic.leetcode-cn.com/69a4097222293c9e4672c83a9d65f430126f1cc9e6114b41147abd223cd1c174-image.png)

```js
        /**
         * @param {string} s
         * @return {boolean}
         */
        var checkValidString = function(s) {
            const record = [];
            const cache = [];
            for (let i = 0; i < s.length; i++) {
                if (!s[i]) continue;
                if (s[i] === '*') cache.push(i);
                if (s[i] === '(') record.push(i);
                if (s[i] === ')') {
                    if (!record.length) {
                        if (!cache.length) return false;
                        cache.pop();
                    }
                    else record.pop(s[i]);
                }
            }
            const temp = [];
            let j = 0, k = 0;
            for (let i = 0; i < s.length; i++) {
                if (i === record[j]) {
                    temp.push(i);
                    j++;
                }
                else if (i === cache[k]) {
                    temp.pop();
                    k++;
                }
            }
            return !temp.length;
        };
```

#### [剑指 Offer 59 - I. 滑动窗口的最大值](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)

![image.png](https://pic.leetcode-cn.com/a35d7c2119276e602d41aaaa26ea987415dbaaeb1b0face494ba2404208d974e-image.png)

```js
        var maxSlidingWindow = function(nums, k) {
            const res = [], queue = [];   // 优先队列（单调不增）
            for (let i = 0, K = k - 1; i < nums.length; i++){ // 遍历nums[]
                while (nums[i] > queue[queue.length - 1]) queue.pop();
                queue.push(nums[i]);
                if (queue[0] === nums[i - k]) queue.shift();
                if (i >= K) res.push(queue[0]);
            }
            return res;
        }
```

#### [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

![image.png](https://pic.leetcode-cn.com/0e162fd319f6823b213e8932dc14c5be69033f5d75eee581ab123cbac4148732-image.png)

```js
        /**
         * initialize your data structure here.
         */
        var MinStack = function() {
            this.record = [];
            this.queue = [];
        };

        /** 
         * @param {number} x
         * @return {void}
         */
        MinStack.prototype.push = function(x) {
            this.record.push(x);
            if (!this.queue.length) this.queue.push(x);
            else if (x <= this.queue[0]) this.queue.unshift(x);
        };

        /**
         * @return {void}
         */
        MinStack.prototype.pop = function() {
            if (this.record.pop() === this.queue[0]) this.queue.shift();
        };

        /**
         * @return {number}
         */
        MinStack.prototype.top = function() {
            return this.record[this.record.length - 1];
        };

        /**
         * @return {number}
         */
        MinStack.prototype.getMin = function() {
            return this.queue[0];
        };

        /**
         * Your MinStack object will be instantiated and called as such:
         * var obj = new MinStack()
         * obj.push(x)
         * obj.pop()
         * var param_3 = obj.top()
         * var param_4 = obj.getMin()
         */
```

#### [剑指 Offer 09. 用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof)

![image.png](https://pic.leetcode-cn.com/b06a3ba735bd1de8f8729848f322e163e2ec3b8a27f2f16909383358c72e560b-image.png)

```js
        var CQueue = function() {
            this.addStack = [];
            this.deleteStack = [];
        };

        /** 
         * @param {number} value
         * @return {void}
         */
        CQueue.prototype.appendTail = function(value) {
            this.addStack.push(value);
        };

        /**
         * @return {number}
         */
        CQueue.prototype.deleteHead = function() {
            if (this.deleteStack.length) return this.deleteStack.pop();
            if (!this.addStack.length) return -1;
            while (this.addStack.length) this.deleteStack.push(this.addStack.pop());
            return this.deleteStack.pop();
        };

        /**
         * Your CQueue object will be instantiated and called as such:
         * var obj = new CQueue()
         * obj.appendTail(value)
         * var param_2 = obj.deleteHead()
         */
```


## 七、链表
### 7.1 基本模板 
        
#### 1) 快慢指针
> - 双指针

```js
        var middleNode = function(head) {
            slow = fast = head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            return slow;
        };
```
#### 2) 反转链表
> - 双指针

```js
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @return {ListNode}
         */

        var reverseList = function(head) {
            let tail = null, temp;
            while(head) {
                temp = head.next;
                head.next = tail;
                tail = head;
                head = temp;
            }
            return tail;
        }
```
### 7.2 题目
#### [876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/lian-biao-de-zhong-jian-jie-dian-by-leetcode-solut/)

```js
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @return {ListNode}
         */
        var middleNode = function(head) {
            if(!head) return null;
            let slow = head;
            let quick = head.next;
            while(quick && quick.next) {
                slow = slow.next;
                quick = quick.next.next;
            }
            return quick ? slow.next : slow;
        };
```

#### [138. 复制带随机指针的链表](https://leetcode-cn.com/problems/copy-list-with-random-pointer/submissions/)
```js
/**
         - // Definition for a Node.
         - function Node(val, next, random) {
         -    this.val = val;
         -    this.next = next;
         -    this.random = random;
         - };
         */

        /**
         - @param {Node} head
         - @return {Node}
         */
        var copyRandomList = function(head) {
            if(!head) return null;
            const res = new Node(head.val);
            const record = new Map();
            record.set(head, res);
            let child = res;
            let h = head;
            while (h.next) {
                child.next = new Node(h.next.val);
                record.set(h.next, child.next);
                h = h.next;
                child = child.next;
            }
            h = head;
            child = res;
            while (h) {
                child.random = record.get(h.random);
                h = h.next;
                child = child.next;
            }
            return res;
        };
```

#### [445. 两数相加 II](https://leetcode-cn.com/problems/add-two-numbers-ii)
```js
         /**
           * Definition for singly-linked list.
           * function ListNode(val) {
           *     this.val = val;
           *     this.next = null;
           * }
           */
          /**
           * @param {ListNode} l1
           * @param {ListNode} l2
           * @return {ListNode}
           */
          var addTwoNumbers = function(l1, l2) {
              let s1 = '', s2 = '';
              let head = l1;
              while (head) {
                  s1 += head.val;
                  head = head.next;
              }
              head = l2;
              while (head) {
                  s2 += head.val;
                  head = head.next;
              }
              let i = Math.max(s1.length, s2.length);
              s1 = s1.padStart(i, 0);
              s2 = s2.padStart(i, 0);
              let jinwei = 0;
              let head = new Node();
              let temp;
              while(i--) {
                  sum = +s1[i] + +s2[i] + jinwei;
                  jinwei = sum > 9;
                  head.val = sum % 10;
                  temp = head;
                  head = new Node();
                  head.next = temp;
              }
              if (jinweo) {
                  head.val = 1;
                  return head;
              }
              else return head.next;
          };
```

#### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)
```js
        /**
        * Definition for singly-linked list.
        * function ListNode(val) {
        *     this.val = val;
        *     this.next = null;
        * }
        */

        /**
        * @param {ListNode} head
        * @return {boolean}
        */
        var hasCycle = function(head) {
            if (!head) return false;
            let slow = head, quick = head.next;
            while(quick && quick.next) {
                if (quick === slow) return true;
                slow = slow.next;
                quick = quick.next.next;
            }
            return false;
        };
```
#### [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
![image.png](https://pic.leetcode-cn.com/a862f5e1aa441f2f26ed9a0ce5dac6058275f8a668253b79a5ffc9512251bd15-image.png)
```js
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */

        /**
         * @param {ListNode} head
         * @return {ListNode}
         */
        var detectCycle = function(head) {
            let slow = head, fast = head;
            while(fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
                if (fast === slow) {
                    slow = head;
                    fast = fast;
                    while (slow !== fast) {
                        slow = slow.next;
                        fast = fast.next;
                    }
                    return fast1;
                }
            }
            return null;
        };
```

#### [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)

```js
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @param {number} k
         * @return {ListNode}
         */
        var rotateRight = function(head, k) {
            if (!head) return null;
            let slow = head, fast = head;
            while(k--) fast = fast.next ? fast.next : head;
            while(fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
            fast.next = head;
            const res = slow.next;
            slow.next = null;
            return res;
        };
```

#### [23. 合并K个排序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

```js
        /**
        * Definition for singly-linked list.
        * function ListNode(val) {
        *     this.val = val;
        *     this.next = null;
        * }
        */
        /**
        * @param {ListNode[]} lists
        * @return {ListNode}
        */
        var mergeKLists = function(lists) {
            const heads = [];
            lists.forEach(head => head && heads.push(head));
            const res = new ListNode();
            let front = res, minIndex, min;
            while(heads.length) {
                minIndex = -1;
                min = Infinity;
                heads.forEach((head, index) => {
                    if (head && min > head.val) {
                        min = head.val;
                        minIndex = index; 
                    }
                })
                heads[minIndex] = heads[minIndex].next;
                if (!heads[minIndex]) heads.splice(minIndex, 1);
                front.next = new ListNode(min);
                front = front.next;
            }
            return res.next;
        };
```

## 八、树
### 8.1 基本模板 
        
### 8.2 题目
#### [面试题26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof)
```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} A
         * @param {TreeNode} B
         * @return {boolean}
         */
        var isSubStructure = function(A, B) {
            if (!B) return false;
            function isEqual(A, B) {
                if (!B) return true;
                if (!A) return false;
                if (A.val !== B.val) return false;
                return isEqual(A.left, B.left) && isEqual(A.right, B.right);
            }
            const queue = [A];
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    if(front.val === B.val && isEqual(front, B)) return true;
                    front.push(front.left, front.right);
                }
                i = queue.length;
            }
            return false;
        };
```

#### [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
![截屏2020-05-10 上午11.52.18.png](https://pic.leetcode-cn.com/dbc27e1eda067ab98d03a72bde9d03640b7f00d32676a9b495cb7cbaa349a63d-%E6%88%AA%E5%B1%8F2020-05-10%20%E4%B8%8A%E5%8D%8811.52.18.png)

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @param {TreeNode} p
         * @param {TreeNode} q
         * @return {TreeNode}
         */
        var lowestCommonAncestor = function(root, p, q) {
            root.pre = null;
            let isGo = 2;
            const children = ['left', 'right'];
            function setParent(root) {
                if (!root || !isGo) return;
                if (root === p || root  === q) isGo--;
                children.forEach(child => {
                    if(root[child]) {
                        root[child].pre = root;
                        setParent(root[child]);
                    }
                })
            }
            setParent(root);
            let headP = p, headQ = q;
            headP.isVisited = true;
            headQ.isVisited = true;
            while(true) {
                if (headP.pre) {
                    if (headP.pre.isVisited) return headP.pre;
                    headP = headP.pre;
                    headP.isVisited = true;
                }
                if (headQ.pre) {
                    if (headQ.pre.isVisited) return headQ.pre;
                    headQ = headQ.pre;
                    headQ.isVisited = true;
                }
            }
        };

        // 回溯法
        var lowestCommonAncestor = function(root, p, q) {
            if (!root || root === p || root === q) return root;
            const left = lowestCommonAncestor(root.left, p, q);
            const right = lowestCommonAncestor(root.right, p, q);
            if (!left) return right; // 如果公共祖先不在左边，那肯定在右边
            if (!right) return left; // 如果公共祖先不在右边，那肯定在左边
            return root; // 如果公共祖先既在右边，又在右边，那肯定是该节点本身
        }

        /**
        * Definition for a binary tree node.
        * function TreeNode(val) {
        *     this.val = val;
        *     this.left = this.right = null;
        * }
        */
        /**
        * @param {TreeNode} root
        * @param {TreeNode} p
        * @param {TreeNode} q
        * @return {TreeNode}
        */
        var lowestCommonAncestor = function(root, p, q) {
            if (!root || root === p || root === q) return root;
            const left = lowestCommonAncestor(root.left, p, q);
            const right = lowestCommonAncestor(root.right, p, q);
            if ((left === p && right === q)
                || (left === q && right === p)) return root;
            return left || right;
        };
```

#### [235. 二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
```js
        /**
        * Definition for a binary tree node.
        * function TreeNode(val) {
        *     this.val = val;
        *     this.left = this.right = null;
        * }
        */
        /**
        * @param {TreeNode} root
        * @param {TreeNode} p
        * @param {TreeNode} q
        * @return {TreeNode}
        */
        var lowestCommonAncestor = function(root, p, q) {
            if (!root) return root;
            if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
            if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
            return root;
        };
```

#### [91. 解码方法](https://leetcode-cn.com/problems/decode-ways/comments/)
```js
        /** DFS 超时了
         * @param {string} s
         * @return {number}
         */
        var numDecodings = function(s) {
            if (!s.length) return 0;
            const queue = [0];
            let res = 0;
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if (front >= s.length || s[front] === '0') continue;
                    const isLastTwoSuit = +(s[front] + s[front + 1]) <= 26;
                    if (front === s.length - 2 && isLastTwoSuit) {
                        res++;
                        queue.push(front + 1);
                    }
                    else if (front === s.length - 1) res++;
                    else  {
                        queue.push(front + 1);
                        isLastTwoSuit && queue.push(front + 2);
                    }
                }
                i = queue.length;
            }
            return res;
        };

        /** DP 爬楼梯
         * @param {string} s
         * @return {number}
         */
        var numDecodings = function(s) {
            if (!s.length || s[0] === '0') return 0;
            const dp = [];
            dp[0] = 1;
            if (s[1] === '0' && +s[0] > 2) dp[1] = 0;
            else if (s[1] === '0' || +(s[0] + s[1]) > 26) dp[1] = 1;
            else dp[1] = 2;
            for(let i = 2; i < s.length; i++) {
                if(s[i - 1] === '0' || +(s[i - 1] + s[i]) > 26) dp[i] = s[i] === '0' ? 0 : dp[i - 1];
                else if(s[i] === '0') dp[i] = dp[i - 2];
                else dp[i] = dp[i - 1] + dp[i - 2];
            }
            return dp[s.length - 1];
        };
```

#### [39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)
```js
        /**
         * @param {number[]} candidates
         * @param {number} target
         * @return {number[][]}
         */
        var combinationSum = function(candidates, target) {
            const candidate = candidates.filter(i => i <= target);
            const queue = candidate.map(i => [i]);
            let i = queue.length, stringify = '';
            const res = [], resord = {};
            while(i) {
                while(i--) {
                    const front = queue.shift().sort((a, b) => a - b);
                    const sum = front.reduce((t, i) => t + i, 0);
                    if (sum === target) {
                        stringify = front.join('-');
                        if(!resord[stringify]) {
                            res.push(front);
                            resord[stringify] = true;
                        }
                    }
                    else candidate.filter(i => sum + i <= target).forEach(i => queue.push(front.concat([i])));
                }
                i = queue.length;
            }
            return res;
        };
```
#### [39. 镜像二叉树](https://leetcode-cn.com/problems/combination-sum/)
```js
        /** 暴力BFS
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {boolean}
         */
        var isSymmetric = function(root) {
            if(!root) return true;
            const queue = [root.left, root.right];
            let i = queue.length;
            let level = [];
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    level.push(front && front.val);
                    if(!front) continue;
                    queue.push(front.left, front.right);
                }
                if(!isSymmetricArray(level)) return false;
                level = [];
                i = queue.length;
            }
            function isSymmetricArray(arr) {
                console.log(arr);
                if (arr.length & 1) return false;
                let i = 0, j = arr.length - 1;
                while(i < j) {
                    if(arr[i] !== arr[j]) return false;
                    i++;
                    j--;
                }
                return true;;
            }
            return true;
        };

        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {boolean}
         */
        var isSymmetric = function(root) {
            if (!root) return true;
            function isSymmetricDFS(left, right) {
                if (!left && !right) return true;
                if (!left || !right || left.val !== right.val) return false;
                return isSymmetricDFS(left.left, right.right) && isSymmetricDFS(left.right, right.left);
            }
            return isSymmetricDFS(root.left, root.right);
        };
```

#### [994. 腐烂的橘子](https://leetcode-cn.com/problems/rotting-oranges)
![image.png](https://pic.leetcode-cn.com/5a64c86239c75da25255ffbe9be3145e9b47e31f74610603b8303109b36aa8fd-image.png)

```js
    /**
    * @param {number[][]} grid
    * @return {number}
    */
    var orangesRotting = function(grid) {
        const row = grid.length;
        if (!row) return 0;
        const col = grid[0].length;
        const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const queue = [];
        const fresh = new Map();
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                if (grid[i][j] === 2) queue.push([i, j]);
                if (grid[i][j] === 1) fresh.set(i + '-' + j, 1);
            }
        }
        let i = queue.length;
        if (!i) return fresh.size ? -1 : 0;
        let res = 0;
        while(i) {
            while(i--) {
                const [x, y] = queue.shift();
                dir.forEach(([offsetX, offsetY]) => {
                    const [newX, newY] = [x + offsetX, y + offsetY];
                    if (newX < 0 || newX >= row || newY < 0 || newY >= col) return;
                    if (grid[newX][newY] === 1) {
                        fresh.delete(newX + '-' + newY);
                        grid[newX][newY] = 2;
                        queue.push([newX, newY]);
                    }
                })
            }
            i = queue.length;
            res++;
        }
        return fresh.size ? -1 : res - 1;
    };
```

#### [572. 另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree)
```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} s
         * @param {TreeNode} t
         * @return {boolean}
         */
        var isSubtree = function(s, t) {
            if (!s) return !!!t;
            const queue = [s];
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    if (isSame(front, t)) return true;
                    queue.push(front.left, front.right);
                }
                i = queue.length;
            }
            function isSame(s, t) {
                if (!t && !s) return true;
                if (!s || !t || s.val !== t.val) return false;
                return isSame(s.left, t.left) && isSame(s.right, t.right);
            }
            return false;
        };
```
#### [572. 另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree)
![image.png](https://pic.leetcode-cn.com/0698076d147d6d2e9de09c94cf406ff49aa4f43ae508c15a0a6be8894d2da730-image.png)
```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {boolean}
         */
        var isCompleteTree = function(root) {
            if (!root) return true;
            const queue = [root];
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if (!front) return !queue.some(i => i);
                    if (!front.left && front.right) return false;
                    queue.push(front.left, front.right);
                }
                i = queue.length;
            }
            return true;
        };
```

#### [230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)
![image.png](https://pic.leetcode-cn.com/09b57c07c290ede9c47b4465715ce5ee6406ef063f478e24e79a372ce0c3a410-image.png)

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @param {number} k
         * @return {number}
         */
        var kthSmallest = function(root, k) {
            let res;
            function inorderDFS(root) {
                if (!root || !k) return;
                inorderDFS(root.left);
                k--;
                if(!k) res = root.val;
                inorderDFS(root.right);
            }
            inorderDFS(root)
            return res;
        };
```

#### [662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree)
![image.png](https://pic.leetcode-cn.com/d0251524e1f696a3f3621df4662059ca75334264b6fd5905ac1c819d0153e865-image.png)

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {number}
         */
        var widthOfBinaryTree = function(root) {
            if(!root) return 0;
            let max = 1;
            root.position = 1;
            const queue = [root];
            let i = queue.length, temp, front, position;
            while(i) {
                temp = [];
                while(i--) {
                    front = queue.shift();
                    position = 2 * front.position;
                    if (front.left) {
                        front.left.position = position - 1;
                        temp.push(front.left.position);
                        queue.push(front.left);
                    }
                    if (front.right) {
                        front.right.position = position;
                        temp.push(front.right.position);
                        queue.push(front.right);
                    }
                }
                i = queue.length;
                if (temp.length) {
                    if (temp.length === 1) max = Math.max(max, 1);
                    else max = Math.max(max, temp[temp.length - 1] - temp[0] + 1);
                }
            }
            return max;
        };
```

#### [332. 重新安排行程](https://leetcode-cn.com/problems/reconstruct-itinerary/)
```js
        /**
        * @param {string[][]} tickets
        * @return {string[]}
        */
        var findItinerary = function(tickets) {
            tickets.sort(([a1, a2], [b1, b2]) => (a1 > b1 || (a1 === b1 && a2 > b2)) ? 1 : -1);
            const record = tickets.reduce((t, i) => {
                if(t[i[0]]) t[i[0]].push(i[1]);
                else t[i[0]] = [i[1]];
                return t;
            }, {});
            let res, next, key, nextIsVisited;
            function backTrace(now, path, isVisited) {
                if (res) return;
                if (path.length === tickets.length + 1) {
                    res = path;
                    return;
                }
                if (!record[now]) return;
                for(let i = 0; i < record[now].length; i++) {
                    next = record[now][i];
                    key = now + '-' + i;
                    if (isVisited[key]) continue;
                    nextIsVisited = Object.assign({}, isVisited);
                    nextIsVisited[key] = true;
                    backTrace(next, path.concat(next), nextIsVisited);
                }
            }
            backTrace('JFK', ['JFK'], {}, 0);
            return res;
        };
```

#### [437.路径总和-iii](https://leetcode-cn.com/problems/path-sum-iii)

![image.png](https://pic.leetcode-cn.com/35697dcfda0c303471fb23eb090ae6358bdc667659af5295a50afc957b09b0d8-image.png)

```js
        /*
        * @lc app=leetcode.cn id=437 lang=javascript
        *
        * [437] 路径总和 III
        */

        // @lc code=start
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @param {number} sum
         * @return {number}
         */
        var pathSum = function(root, sum) {
            let res = 0;
            function checkDFS(root, s) {
                if (!root) return;
                s += root.val;
                if (s === sum) ++res;
                checkDFS(root.left, s);
                checkDFS(root.right, s);
            }

            function DFS(root) {
                if (!root) return;
                checkDFS(root, 0);
                DFS(root.left);
                DFS(root.right);
            }
            DFS(root);
            return res;
        };
```


#### [538. 把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/convert-bst-to-greater-tree)
![image.png](https://pic.leetcode-cn.com/8991a0833028ff61a8112f9714466bc1c5c43e074d9031cb485dcc92ffa25a30-image.png)

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {TreeNode}
         */
        var convertBST = function(root) {
            let sum = 0;
            function inorderDFS(root) {
                if (!root) return;
                inorderDFS(root.right);
                sum += root.val; 
                root.val = sum;
                inorderDFS(root.left);
            }
            inorderDFS(root);
            return root;
        };
```

#### [617. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees)

![image.png](https://pic.leetcode-cn.com/4f87f30b810c285dd8af2a16efe2760d38ff286a7d09f120a835d97d3e59c468-image.png)

```js
        /*
        * @lc app=leetcode.cn id=617 lang=javascript
        *
        * [617] 合并二叉树
        */

        // @lc code=start
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} t1
         * @param {TreeNode} t2
         * @return {TreeNode}
         */
        var mergeTrees = function(t1, t2) {
            if (!t1 || !t2) return t1 || t2;
            function DFS(root1, root2) {
                if (!root1 || !root2) return;
                root1.val = root1.val + (root2 ? root2.val : 0);
                if (!root1.left && root2.left) {
                    root1.left = new TreeNode(0);
                }
                if (!root1.right && root2.right) {
                    root1.right = new TreeNode(0);
                }
                DFS(root1.left, root2.left);
                DFS(root1.right, root2.right);
            }
            DFS(t1, t2);
            return t1;
        };
```

#### [剑指 Offer 07. 重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

![image.png](https://pic.leetcode-cn.com/e0615f7b6e39fbe69bde34bfe2bbc34db21db63465998dd52b62065329c139c4-image.png)

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {number[]} preorder
         * @param {number[]} inorder
         * @return {TreeNode}
         */
        var buildTree = function(preorder, inorder) {
            if (!preorder.length) return null;
            const top = preorder.shift();
            const root = new TreeNode(top);
            const topIndex = inorder.indexOf(top);
            root.left = buildTree(preorder.slice(0, topIndex), inorder.slice(0, topIndex));
            root.right = buildTree(preorder.slice(topIndex), inorder.slice(topIndex + 1));
            return root;
        };
```

#### [106. 从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)

```js
        /*
        * @lc app=leetcode.cn id=106 lang=javascript
        *
        * [106] 从中序与后序遍历序列构造二叉树
        */

        // @lc code=start
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {number[]} inorder
         * @param {number[]} postorder
         * @return {TreeNode}
         */
        var buildTree = function(inorder, postorder) {
            if (!postorder.length) return null;
            const top = postorder.pop();
            const root = new TreeNode(top);
            const topIndex = inorder.indexOf(top);
            root.left = buildTree(inorder.slice(0, topIndex), postorder.slice(0, topIndex));
            root.right = buildTree(inorder.slice(topIndex + 1), postorder.slice(topIndex));
            return root;
        };
```

#### [114. 二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list)

![截屏2020-08-02 下午10.18.09.png](https://pic.leetcode-cn.com/ad81d4b2c3f5ee4dac81f5725dfdf7fb1c08a378505f5a92c436dbee65ac9043-%E6%88%AA%E5%B1%8F2020-08-02%20%E4%B8%8B%E5%8D%8810.18.09.png)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return null;
    flatten(root.left);
    flatten(root.right);
    let head = root.left;
    if (head) {
        while (head.right) head = head.right;
        head.right = root.right;
        root.right = root.left;
        root.left = null;
    }
};
```

#### [剑指 Offer 55 - II. 平衡二叉树](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof)
![image.png](https://pic.leetcode-cn.com/30f9670b00c0f2a498072a752bcb6e2c999ae3aff795a67bb8b2ad9afb3d495e-image.png)

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {boolean}
         */
        var isBalanced = function(root) {
            if (!root) return true;
            if (!isBalanced(root.left) || !isBalanced(root.right)) return false;
            let leftLevel = root.left ? root.left.level : 0;
            let rightLevel = root.right ? root.right.level : 0;
            root.level = Math.max(leftLevel, rightLevel) + 1;
            return Math.abs(leftLevel - rightLevel) < 2;
        };
```

## 九、DFS深度优先搜索
### 9.1 基本模板 
#### 1) 递归法
> - 先序遍历

```js
        var preOrderDFS = function(root, arg1, arg2, ...) {
            if(!root) return;
            // 输入你要处理的逻辑
            ...
            preOrderDFS(root.left, arg1, arg2, ...);
            preOrderDFS(root.right, arg1, arg2, ...);
            return;
        }
```
> - 中序遍历

```js
        var inOrderDFS = function(root, arg1, arg2, ...) {
            if(!root) return;
            inOrderDFS(root.left, arg1, arg2, ...);
            // 输入你要处理的逻辑
            ...
            inOrderDFS(root.right, arg1, arg2, ...);
            return;
        }
```
> - 后序遍历

```js
        var postOrderDFS = function(root, arg1, arg2, ...) {
            if(!root) return;
            postOrderDFS(root.left, arg1, arg2, ...);
            postOrderDFS(root.right, arg1, arg2, ...);
            // 输入你要处理的逻辑
            ...
            return;
        }
```
#### 2) 迭代法
> - 先序遍历

```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {number[]}
         */
        var preorderTraversal = function(root) {
            if(!root) return;
            const stack = [root];
            let i = stack.length;
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if(!front) continue;
                    // 输入你要处理的逻辑
                    ...
                    stack.push(front.right, front.left);
                }
                i = stack.length;
            }
            return;
        }

        // 或者使用这种方式，追加一个变量用来表示有无被访问过
        var preorderTraversal = function(root) {
            if(!root) return;
            const stack = [root];
            let i = stack.length;
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if (front.isVisited) {
                        // 输入你要处理的逻辑
                        ...
                    }
                    else {
                        front.right && stack.push(front.right);
                        front.left && stack.push(front.left);
                        front.isVisited = true && stack.push(front);
                    }
                }
                i = stack.length;
            }
            return res;
        }
        
```
> - 中序遍历

```js
        var inorderTraversal = function(root) {
            if(!root) return [];
            const stack = [root];
            let i = stack.length;
            const res = [];
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if (front.isVisited) {
                        // 输入你要处理的逻辑
                        res.push(front.val);
                    }
                    else {
                        front.right && stack.push(front.right);
                        front.isVisited = true && stack.push(front);
                        front.left && stack.push(front.left);
                    }
                }
                i = stack.length;
            }
            return res;
        }
```
> - 后序遍历
```js
        var postorderTraversal = function(root) {
            if(!root) return;
            const stack = [root];
            let i = stack.length;
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if (front.isVisited) {
                        // 输入你要处理的逻辑
                        ...
                    }
                    else {
                        front.isVisited = true && stack.push(front);
                        front.right && stack.push(front.right);
                        front.left && stack.push(front.left);
                    }
                }
                i = stack.length;
            }
            return res;
        }
```

### 9.2 题目
#### [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)
```js
        /**
        * @param {number[][]} matrix
        * @return {number[]}
        */
        var spiralOrder = function(matrix) {
            if (!matrix.length) return [];
            const res = [], isVisited = {}, col = matrix[0].length;
            const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            function getNextItemDFS(i, j, num, curDir) {
                const key = i + '-' + j;
                if (i < 0 || i >= matrix.length || j < 0 || j >= col) return;
                if (isVisited[key]) {
                    if (i === num && j === num) getNextItemDFS(i + 1, j + 1, num + 1, '01');
                    return;
                }
                res.push(matrix[i][j]);
                isVisited[key] = true;
                dir.forEach(([offsetX, offsetY]) => {
                    const nextDir = '' + offsetX + offsetY;
                    if (curDir === '-10' && nextDir === '01') return;
                    getNextItemDFS(i + offsetX, j + offsetY, num, nextDir);
                })
            }
            getNextItemDFS(0, 0, 0, '01');
            return res;
        };
```

#### [59. 螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)
```js
        /**
         * @param {number} n
         * @return {number[][]}
         */
        var generateMatrix = function(n) {
            if (!n) return [];
            const res = [], dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            let count = 1;
            function getNextItemDFS(i, j, num, curDir) {
                if (i < 0 || i >= n || j < 0 || j >= n) return;
                if (!res[i]) res[i] = [];
                if (res[i][j]) {
                    if (i === num && j === num) getNextItemDFS(i + 1, j + 1, num + 1, '01');
                    return;
                }
                res[i][j] = count++;
                dir.forEach(([offsetX, offsetY]) => {
                    const nextDir = '' + offsetX + offsetY;
                    if (curDir === '-10' && nextDir === '01') return;
                    getNextItemDFS(i + offsetX, j + offsetY, num, nextDir);
                })
            }
            getNextItemDFS(0, 0, 0, '01');
            return res;
        };
```

## 十、BFS广度优先搜索
### 10.1 基本模板 
        
#### 1) 递归法
> - 自上而下
> - 自下而上
#### 2) 迭代法
> - 自上而下

```js
        var Up2BottomBFS = function(root) {
            if(!root) return;
            const queue = [root];
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    // 输入你要处理的逻辑
                    ...
                    queue.push(front.left, front.right);
                }
                i = queue.length;
            }
            return;
        }
```
> - 自下而上

### 10.2 题目
#### [103 二叉树的锯齿形层次遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
```js
        var zigzagLevelOrder = function(root) {
            if(!root) return [];
            const queue = [root];
            let i = queue.length;
            let isPositive = false;
            const res = [];
            while(i) {
                isPositive = !isPositive;
                let temp = [];
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    isPositive ? temp.push(front.val) : temp.unshift(front.val);
                    queue.push(front.left, front.right);
                }
                temp.length && res.push(temp);
                i = queue.length;
            }
            return res;
        };
```
#### [127 单词接龙](https://leetcode-cn.com/problems/word-ladder/)
```js
        var ladderLength = function(beginWord, endWord, wordList) {
            if(!wordList.includes(endWord)) return 0;
            let queue = [beginWord];
            let i = queue.length;
            let level = 0;
            while (i) {
                level++;
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    if(front === endWord) return level;
                    for(let j = 0; j < wordList.length; j++) {
                        if(isOnlyOneDiff(front, wordList[j])) {
                            queue.push(wordList[j]);
                            wordList.splice(j, 1);
                            j--;
                        }
                    }
                }
                i = queue.length;
            }
            return 0;

            function isOnlyOneDiff(str1, str2) {
                if(str1 === str2) return false;
                let i = str1.length;
                let diff = 0;
                while(i--) {
                    if(str1[i] !== str2[i]) diff++;
                    if(diff > 1) return false;
                }
                return true;
            }
        };

```
#### [130. 被围绕的区域](https://leetcode-cn.com/problems/surrounded-regions/)
```js
        var solve = function(board) {
            const row = board.length;
            if(!row) return [];
            const col = board[0].length;
            for(let i = 0; i < row; i++) {
                dfs(board, i, 0);
                dfs(board, i, col - 1);
            }
            for(let i = 0; i < col; i++) {
                dfs(board, 0, i);
                dfs(board, row - 1, i);
            }
            for(let i = 0; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(board[i][j] === 'O') {
                        board[i][j] = 'X';
                    }
                    else if(board[i][j] === '1') {
                        board[i][j] = 'O';
                    }
                }
            }
            function dfs(board, i, j) {
                if(i < 0 || i >= row || j < 0 || j >= col || board[i][j] === '1') return;
                if(board[i][j] === 'O') {
                    board[i][j] = '1';
                    dfs(board, i - 1, j);
                    dfs(board, i + 1, j);
                    dfs(board, i, j - 1);
                    dfs(board, i, j + 1);
                }
            }
        };
```
#### [199.二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view)
```js
        var rightSideView = function(root) {
            const queue = [root];
            let i = queue.length;
            const res = [];
            while(i) {
                let right;
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    right = front.val;
                    queue.push(front.left, front.right)
                }
                right && res.push(right);
                i = queue.length;
            }
            return res;
        };
```

#### [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
```js
        var numIslands = function(grid) {
            const row = grid.length;
            if(!row) return 0;
            const col = grid[0].length;
            let res = 0;
            for(let i = 0; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(grid[i][j] === '1') {
                        res++;
                        dfs(grid, i, j);
                    }
                }
            }
            function dfs(grid, i, j) {
                if(i < 0 || i >= row || j < 0 || j >= col) return;
                if(grid[i][j] === '1') {
                    grid[i][j] = '0';
                    dfs(grid, i - 1, j);
                    dfs(grid, i + 1, j);
                    dfs(grid, i, j - 1);
                    dfs(grid, i, j + 1);
                }
            }
            return res;
        };
```
#### [面试题13. 机器人的运动范围](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)
```js
        /**
        * @param {number} m
        * @param {number} n
        * @param {number} k
        * @return {number}
        */
        var movingCount = function(m, n, k) {
            const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            function numDFS(i, j, isVisited) {
                const key = i + '-' + j;
                if (i < 0 || i >= m || j < 0 || j >= n || isVisited[key]) return 0;
                if (('' + i + j).split('').reduce((t, i) => t + +i, 0) > k) return 0;
                isVisited[key] = true;
                return dir.reduce((t, [offsetX, offsetY]) => t + numDFS(i + offsetX, j + offsetY, isVisited), 0) + 1;
            }
            return numDFS(0, 0, {});
        };

        // BFS 版本，只需要走两个方向
        var movingCount = function(m, n, k) {
        const queue = [[0, 0]];
        let res = 0, i = 1;
        const isVisited = {};
        while(i) {
            while(i--) {
                const [i, j] = queue.shift();
                const key = i + '-' + j;
                if (i >= m || j >= n || isVisited[key] || ('' + i + j).split('').reduce((t, i) => t + +i, 0) > k) continue;
                res++;
                isVisited[key] = true;
                queue.push([i + 1, j], [i, j + 1])
            }
            i = queue.length;
        }
        return res;
    };
```

#### [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
```js
        /**
         * @param {number} n
         * @return {string[]}
         */
        var generateParenthesis = function(n) {
            const res = [];
            function dfs(left, right, path) {
                if (left < 0 || right < 0 || left > right) return;
                if (!left && !right) {
                    res.push(path);
                    return;
                }
                dfs(left - 1, right, path + '(');
                dfs(left, right - 1, path + ')');
            }
            dfs(n, n, '');
            return res;
        };
```

#### [面试题33. 二叉搜索树的后序遍历序列](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)
```js
        /**
         * @param {number[]} postorder
         * @return {boolean}
         */
        var verifyPostorder = function(postorder) {
            if (!postorder.length) return true;
            const top = postorder.pop();
            let i = postorder.length;
            while(postorder[i - 1] > top) i--;
            const left = postorder.slice(0, i);
            if (left.some(i => i > top)) return false;
            return verifyPostorder(left) && verifyPostorder(postorder.slice(i));
        };
```
#### [542. 01 矩阵](https://leetcode-cn.com/problems/01-matrix/)
```js
        /**
        * @param {number[][]} matrix
        * @return {number[][]}
        */
        var updateMatrix = function(matrix) {
            const col = matrix[0].length, dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            matrix.forEach((item, i) => item.forEach((s, j) => matrix[i][j] = matrix[i][j] ? getResultBFS(i, j) : 0));
            function getResultBFS(i, j) {
                const queue = [[i, j]], isVisited = {};
                let l = queue.length, deep = 0;
                while(l) {
                    while(l--) {
                        const [x, y] = queue.shift();
                        if (!matrix[x][y]) return deep;
                        isVisited[x + '-' + y] = true;
                        dir.forEach(([offestX, offsetY]) => {
                            const [newX, newY] = [x + offestX, y + offsetY];
                            if (newX < 0 || newX >= matrix.length || newY < 0 || newY >= col || isVisited[newX + '-' + newY]) return;
                            queue.push([newX, newY]);
                        })
                    }
                    deep++;
                    l = queue.length;
                }
            }
            return matrix;
        };
```

#### [1091. 二进制矩阵中的最短路径](https://leetcode-cn.com/problems/shortest-path-in-binary-matrix)

![image.png](https://pic.leetcode-cn.com/929aca2c178eab32e82a1547d932ad089160643cc4cff6e8f8225c4baa471b91-image.png)

```js
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0]) return -1;
    const row = grid.length - 1, col = grid[0].length - 1;
    if (grid[row][col]) return -1;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const queue = [[0, 0]];
    grid[0][0] = 1;
    let res = 0, i = queue.length, newX, newY, temp, x, y;
    while (i) {
        res++;
        while(i--) {
            temp = queue.shift();
            if (temp[0] === row && temp[1] === col) return res;
            dirs.forEach(dir => {
                newX = temp[0] + dir[0];
                newY = temp[1] + dir[1];
                if (newX < 0 || newX > row || newY < 0 || newY > col || grid[newX][newY]) return;
                queue.push([newX, newY]);
                grid[newX][newY] = 1;
            })
        }
        i = queue.length;
    }
    return -1;
};
```

#### [剑指 Offer 55 - I. 二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

```js
        /*
        * @lc app=leetcode.cn id=104 lang=javascript
        *
        * [104] 二叉树的最大深度
        */

        // @lc code=start
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {number}
         */
        var maxDepth = function(root) {
            if (!root) return 0;
            const queue = [root];
            let len = queue.length;
            let result = 0;
            while (len) {
                while(len--) {
                    const front = queue.shift();
                    front.left && queue.push(front.left);
                    front.right && queue.push(front.right);
                }
                result++;
                len = queue.length;
            }
            return result;
        };
```

## 十一、贪心
### 11.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。
#### [55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game/)

```js
        /** DFS毫无疑问超时了
         * @param {number[]} nums
         * @return {boolean}
         */
        var canJump = function(nums) {
            const last = nums.length - 1;
            let res = fasle;
            function backTrace(i) {
                if (res) return;
                if (i < last && !nums[i]) return;
                if (i >= last) res = true;
                else for(let j = 1; j <= nums[i]; j++) backTrace(i + j);
            }
            backTrace(0);
            return res;
        };

        // 贪心剪枝
        var canJump = function(nums) {
            const last = nums.length - 1;
            if (nums[0] >= last) return true;
            let max, sum, temp, maxTemp = 0;
            for(let i = 0; i < nums.length; i = maxTemp) {
                max = 0, sum = 0;
                for(let j = 1; j <= nums[i]; j++) {
                    temp = i + j;
                    sum = temp + nums[temp];
                    if (sum >= last) return true; // 到达终点就结束
                    if (sum > max && nums[temp]) { // 下一个可以跳且跳的最远
                        maxTemp = temp;
                        max = sum;
                    }
                }
                if (i === maxTemp) return false; // 找不到合适的下家就结束
            }
        };

```
#### [面试题 08.11. 硬币](https://leetcode-cn.com/problems/coin-lcci/)
![image.png](https://pic.leetcode-cn.com/2ee6d3b55e6614978785d07e22aeb3541c5babbd9af5718e7e301efbca9125d0-image.png)
```js
/** dp
* @param {number} n
* @return {number}
*/
var waysToChange = function(n) {
    if (n === 0) return 1;
    const coins = [1, 5, 10, 25];
    const dp = [1].concat(Array(n).fill(0));
    for (let j = 0; j < coins.length; j++) {
        for (let i = 1; i <= n; i++) {
            if (i - coins[j] >= 0) dp[i] = dp[i] + dp[i - coins[j]];
        }
    }
    return dp[n] % 1000000007;
};

/** 爆栈
* @param {number} n
* @return {number}
*/
var waysToChange = function(n) {
    const dir = [1, 5, 10, 25];
    let res = 0;
    function dfs(curSum, index) {
        if (curSum > n) return;
        if (curSum === n) {
            res++;
            return;
        }
        for(let i = index; i < 4; i++) dfs(curSum + dir[i], i);
    }
    dfs(0, 0);
    return res % 1000000007;
};
```
#### [139. 单词拆分](https://leetcode-cn.com/problems/word-break/)
![image.png](https://pic.leetcode-cn.com/c8c4b615da0c064c18f7939f4aad01a606ec9a0ccd0a6f1401569fa7eee2f047-image.png)

```js
        /** 回溯法超时
        * @param {string} s
        * @param {string[]} wordDict
        * @return {boolean}
        */
        var wordBreak = function(s, wordDict) {
            let res = false;
            function backTrace(i) {
                if(res) return;
                if (i === s.length) res = true;
                else if(i < s.length)
                    wordDict.filter(str => str === s.substr(i, str.length))
                        .forEach(str => backTrace(i + str.length));
            }
            backTrace(0);
            return res;
        };

        /** 背包问题dp
        * @param {string} s
        * @param {string[]} wordDict
        * @return {boolean}
        */
        var wordBreak = function(s, wordDict) {
            const dp = [];
            dp[0] = true;
            for(let i = 1; i <= s.length; i++) {
                wordDict.forEach(str => {
                    let temp = i - str.length;
                    if (dp[temp] && s.substring(temp, i) === str) dp[i] = true;
                })
            }
            return !!dp[s.length];
        };
```

## 十二、回溯法
### 12.1 基本模板 
        
#### 1) 递归
```js
        var huisu = function(nums) {
            const res = [];
            function backtrack(path, i) {
                // 终末条件操作...

                for(let j = i; j < nums.length; j++) {
                    path.push(nums[j]);
                    backtrack(path.slice(), j + 1);
                    path.pop(); // 回溯过程
                }
            }
            backtrack([], 0);
            return res;
        };
```
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。
### 12.2 题目
#### [79. 单词搜索](https://leetcode-cn.com/problems/word-search/submissions/)

```js
        /**
        * @param {character[][]} board
        * @param {string} word
        * @return {boolean}
        */
        var exist = function(board, word) {
            const row = board.length;
            if(!row) return false;
            const col = board[0].length;
            const dir = [[-1,0], [1, 0], [0, -1], [0, 1]]; // 四个方向
            for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                if(board[i][j] === word[0]) {
                    if(isExist(i, j, 0)) return true;
                } 
                } 
            }
            function isExist(i, j, num) {
                if (i < 0 || i >= row || j < 0 || j >= col // 边界条件
                    || board[i][j] !== word[num]) return false;
                if (word.length - 1 === num) return true; // 成功条件
                board[i][j] = '*';
                num++;
                const res = dir.some(([x, y]) => isExist(i + x, j + y, num));
                board[i][j] = res ? '*' : word[num - 1]; // 回溯
                return res;
            }
            return false;
        };
```
#### [212. 单词搜索 II](https://leetcode-cn.com/problems/word-search-ii/solution/js-dfsbao-sou-by-hblvsjtu/)
```js
        /**
        * @param {character[][]} board
        * @param {string[]} words
        * @return {string[]}
        */
        var findWords = function(board, words) {
            const row = board.length;
            if(!row) return [];
            const col = board[0].length;
            const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            function dfs(i, j, num, word, copyBoard) {
                if(i < 0 || i >= row || j < 0 || j >= col || copyBoard[i][j] !== word[num]) return false;
                if(num === word.length - 1) return true;
                copyBoard[i][j] = '*';
                const res = dir.some(a => dfs(i + a[0], j + a[1], num + 1, word, copyBoard));
                copyBoard[i][j] = res ? '*' : word[num];
                return res;
            }
            function isExist(word, copyBoard) {
                for(let i = 0; i < row; i++) {
                    for(let j = 0; j < col; j++) {
                        if(board[i][j] === word[0])
                            if(dfs(i, j, 0, word, copyBoard)) return true;
                    }
                }
                return false;
            }
            return words.filter(i => isExist(i, JSON.parse(JSON.stringify(board))));
        };
```
#### [面试题38. 字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/javascriptpai-xu-di-gui-jie-fa-ji-bai-100-by-lewag/)
```js
        /**
         - @param {string} s
         - @return {string[]}
         */
        var permutation = function(s) {
            const res = new Set();
            function dfs(s, i) {
                if (i === s.length) {
                    res.add(s);
                    return;
                }
                for(let j = i; j < s.length; j++) {
                    s = swap(s, i, j);
                    dfs(s, i + 1);
                    s = swap(s, i, j);
                }
            }
            function swap(str, i, j) {
                if (i === j) return str;
                return str.substring(0, i) + str[j] + str.substring(i + 1, j) + str[i] + str.substring(j + 1);
            }
            dfs(s, 0);
            return Array.from(res);
        };
```
#### [78. 子集](https://leetcode-cn.com/problems/subsets/)
```js
        /** 
         * @param {number[]} nums
         * @return {number[][]}
         */
        var subsets = function(nums) {
            const res = [];
            function backtrack(path, i) {
                res.push(path);
                // 回溯过程
                for(let j = i; j < nums.length; j++) {
                    path.push(nums[j]);
                    backtrack(path.slice(), j + 1);
                    path.pop();
                }
            }
            backtrack([], 0);
            return res;
        };

        // 暴力dfs
        var subsets = function(nums) {
            const res = [[]];
            function dfs(i, path) {
                if(i === nums.length) path && res.push(path.split(',').map(i => +i));
                else {
                    dfs(i + 1, path);
                    dfs(i + 1, path ? path + ',' + nums[i] : '' + nums[i]);
                }
            }
            dfs(0, '');
            return res;
        };
```
#### [90. 子集 II](https://leetcode-cn.com/problems/subsets-ii/)
```js
        /**
         * @param {number[]} nums
         * @return {number[][]}
         */
        var subsetsWithDup = function(nums) {
            nums.sort((a, b) => a - b);
            const res = [];
            function backTrace(path, i) {
                res.push(path);
                for(let j = i; j < nums.length; j++) {
                    if(j > i && nums[j] === nums[j - 1]) continue;
                    backTrace(path.concat([nums[j]]), j + 1);
                }
            }
            backTrace([], 0);
            return res;
        };

        // 暴力求解是否存在相同数组
        var subsetsWithDup = function(nums) {
            nums.sort((a, b) => a - b);
            const res = [];
            function isExist(arr, target) {
                return arr.some(item => item.length === target.length && target.join('') === item.join('');
            }
            function backTrace(path, i) {
                !isExist(res, path) && res.push(path);
                for(let j = i; i < nums.length; j++)
                    backTrace(path.concat([nums[j]]), j++);
            }
            backTrace([], 0);
            return res;
        };
```
#### [面试题34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)
```js
        // 回溯法
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @param {number} sum
         * @return {number[][]}
         */
        var pathSum = function(root, sum) {
            if (!root) return [];
            const res = [];
            const children = ['left', 'right'];
            function dfs(parent, path) {
                path.push(parent.val);
                if (!parent.left && !parent.right) {
                    if(parent.sum === sum) res.push(path.slice(0));
                    path.pop(parent.val);
                    return;
                }
                children.forEach(child => {
                    if(parent[child]) {
                        parent[child].sum = parent.sum + parent[child].val;
                        dfs(parent[child], path);
                    }
                })
                path.pop(parent.val);
            }
            root.sum = root.val;
            dfs(root, [])
            return res;
        }

        // 暴力法
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @param {number} sum
         * @return {number[][]}
         */
        var pathSum = function(root, sum) {
            if(!root) return [];
            const pre = {};
            const idMap = {};
            let id = 1;
            root.sum = root.val;
            root.id = id++;
            idMap[root.id] = root.val;
            const stack = [root];
            let i = stack.length;
            const target = [];
            const children = ['left', 'right'];
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if (!front.left && !front.right && front.sum === sum) target.push(front.id);
                    children.forEach(child => {
                        if(front[child]) {
                            front[child].id = id++;
                            front[child].sum = front.sum + front[child].val;
                            idMap[front[child].id] = front[child].val;
                            stack.push(front[child]);
                            pre[front[child].id] = front.id;
                        }
                    })
                }
                i = stack.length;
            }
            return target.map(tail => {
                const res = [];
                let front = tail;
                while(front) {
                    res.unshift(idMap[front]);
                    front = pre[front];
                }
                return res;
            })
        };
```

#### [93. 复原IP地址](https://leetcode-cn.com/problems/restore-ip-addresses/)
```js
        /**
         * @param {string} s
         * @return {string[]}
         */
        var restoreIpAddresses = function(s) {
            if (s.length > 12) return [];
            const res = [], dir = [1, 2, 3];
            function dfs(i, path, num) {
                if (i > s.length) return;
                if (num === 4 && i === s.length) res.push(path.substr(1));
                else dir.forEach(offset => {
                    if (offset === 1 || s[i] !== '0')
                        +s.substr(i, offset) < 256 && dfs(i + offset, path + '.' + s.substr(i, offset), num + 1);
                });
            }
            dfs(0, '', 0);
            return res;
        };
```
#### [351. 安卓系统手势解锁](https://leetcode-cn.com/problems/android-unlock-patterns/)
```js
        /** 没完成
         * @param {number} m
         * @param {number} n
         * @return {number}
         */
        var numberOfPatterns = function(m, n) {
            const target = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
            const record = new Set();
            const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
            function isCross = 
            function backTrace(path, i, j, isVisited) {
                if (path.length > n) return;
                if (path.length >= m) record.add(path);
                isVisited[i + '-' + j] = true;
                dir.forEach(([offsetX, offsetY]) => {
                    const [newX, newY] = [i + offsetX, j + offsetY];
                    if (newX >= 0 && newX < 3 && newY >= 0 && newY < 3
                        && !isVisited[newX + '-' + newY]
                        && ) {   
                        backTrace(path + target[newX][newY], newX, newY, isVisited);
                    }
                })
                isVisited[i + '-' + j] = false;
            }
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    backTrace(target[i][j], i, j, {});
                }
            }
            console.log(record);
            return record.size;
        };

        /**
        * @param {number[]} candidates
        * @param {number} target
        * @return {number[][]}
        */
        var combinationSum2 = function(candidates, target) {
            let res = 0;
            candidates.sort((a, b) => a - b);
            const paths = [];
            function backTrace(i, sum, path) {
                if (!sum) {
                    res++;
                    paths.push(path);
                    return;
                }
                for (let j = i; j < candidates.length; j++) {
                    if (candidates[j] > sum) return;
                    let k = j + 1;
                    while(candidates[k] === candidates[k + 1]) k++;
                    backTrace(k, sum - candidates[j], path + ', ' + candidates[j]);
                }
            } 
            backTrace(0, target, '');
            console.log(paths);
            return res;
        };
```

#### [216. 组合总和 III](https://leetcode-cn.com/problems/combination-sum-iii/)
![截屏2020-04-24 下午11.49.41.png](https://pic.leetcode-cn.com/a364b1ca4746e9fb720f702cc7c33a43a6fbe8db6da5235a9069c5e7adfca1e7-%E6%88%AA%E5%B1%8F2020-04-24%20%E4%B8%8B%E5%8D%8811.49.41.png)

```js
        var combinationSum3 = function(k, target) {
            const candidates = [1,2,3,4,5,6,7,8,9];
            const res = [];
            function backTrace(i, sum, path) {
                if (!sum) {
                    if(path.length === k) res.push(path);
                    return;
                }
                for (let j = i; j < candidates.length; j++) {
                    if (candidates[j] > sum) return;
                    if (j > i && candidates[j] == candidates[j - 1]) continue;
                    backTrace(j + 1, sum - candidates[j], path.concat(candidates[j]));
                }
            } 
            backTrace(0, target, []);
            return res;
        };
```

#### [46. 全排列](https://leetcode-cn.com/problems/permutations/)

![截屏2020-04-25 上午12.06.41.png](https://pic.leetcode-cn.com/738a74d144a149f3fac9c8b00db876b4779e7b33afb00d2028b808661e8ab83b-%E6%88%AA%E5%B1%8F2020-04-25%20%E4%B8%8A%E5%8D%8812.06.41.png)

```js
var permute = function(nums) {
    const result = [];
    const len = nums.length;
    const num = Array(len);
    function dfs(arr, p, q) {
        if (q === p) {
            result.push(arr.slice(0));
            return arr;
        }  
        for(let i = p; i <= q; i++) {
            swap(arr, p, i);
            dfs(arr, p+1, q);
            swap(arr, p, i);
        }
    }
    function swap(arr, i, j) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
    }
    dfs(nums, 0, len - 1);
    return result;
};
```

#### [39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)
![image.png](https://pic.leetcode-cn.com/731e4e793681293a7f6064df44b02e5bd1dd807ddc5be0ced4da4a5951b9410c-image.png)

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    function backTrace(i, sum, path) {
        if (!sum) {
            res.push(path.trim().split(' ').map(i => +i));
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            if (candidates[j] > sum) return;
            if (j > i && candidates[j] == candidates[j - 1]) continue; // 小剪枝
            backTrace(j, sum - candidates[j], path + ' ' + candidates[j]);
        }
    } 
    backTrace(0, target, '');
    return res;
};
```

#### [40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)
![image.png](https://pic.leetcode-cn.com/731e4e793681293a7f6064df44b02e5bd1dd807ddc5be0ced4da4a5951b9410c-image.png)

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    function backTrace(i, sum, path) {
        if (!sum) {
            res.push(path.trim().split(' ').map(i => +i));
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            if (candidates[j] > sum) return;
            if (j > i && candidates[j] == candidates[j - 1]) continue; // 小剪枝
            backTrace(j + 1, sum - candidates[j], path + ' ' + candidates[j]);
        }
    } 
    backTrace(0, target, '');
    return res;
};
```
#### [77. 组合](https://leetcode-cn.com/problems/combinations/)
![截屏2020-04-25 下午10.51.11.png](https://pic.leetcode-cn.com/ef3efa88491930504c2517c3e95ea87f453b7f888f33d072e0e3a813e618c661-%E6%88%AA%E5%B1%8F2020-04-25%20%E4%B8%8B%E5%8D%8810.51.11.png)

```js
        /**
         * @param {number} n
         * @param {number} k
         * @return {number[][]}
         */
        var combine = function(n, k) {
            const res = [];
            function backTrace(i, path, num) {
                if (num === k) res.push(path.trim().split(' ').map(i => +i));
                for(let j = i; j <= n; j++) backTrace(j + 1, path + ' ' + j, num + 1);
            }
            backTrace(1, '', 0);
            return res;
        };
```

#### [131. 分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/)
![image.png](https://pic.leetcode-cn.com/378181ba717d7ef01797d11aa47d5e076eae369047940e989e8b72543a44ad53-image.png)

```js
        /**
        * @param {string} s
        * @return {string[][]}
        */
        var partition = function(s) {
            const res = [];
            let left, right, flag;
            function backTrace(i, path) {
                if (i === s.length) res.push(path);
                else {
                    for(let j = i; j < s.length; j++) {
                        left = i, right = j, flag = true;
                        while (left <= right) {
                            if (s[left] !== s[right]) {
                                flag = false;
                                break;
                            }
                            left++;
                            right--;
                        }
                        if (flag) backTrace(j + 1, path.concat(s.substring(i, j + 1)));
                    }
                }
            }
            backTrace(0, []);
            return res;
        };
```

## 十三、动态规划
### 13.1 与分治思想的异同
        
#### 1) 相同之处
> - 都是通过组合子问题的解来求解原问题
#### 2) 不同之处
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

### 13.2 题目
#### [1014. 最佳观光组合](https://leetcode-cn.com/problems/best-sightseeing-pair)

![image.png](https://pic.leetcode-cn.com/91fd6e5d91e0b7d9d809cff82b3f14297f15e061b46a454357fb6460eca29450-image.png)

```js
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let max = -Infinity, preMax = A[0], temp;
    for (let i = 1; i < A.length; i++) {
        sum = A[i] - i + preMax;
        if(sum > max) max = sum;
        temp = A[i] + i;
        if(temp > preMax) preMax = temp;
    }
    return max;
};
```
#### [面试题 08.11. 硬币](https://leetcode-cn.com/problems/coin-lcci/)
![image.png](https://pic.leetcode-cn.com/2ee6d3b55e6614978785d07e22aeb3541c5babbd9af5718e7e301efbca9125d0-image.png)
```js
/** dp
* @param {number} n
* @return {number}
*/
var waysToChange = function(n) {
    if (n === 0) return 1;
    const coins = [1, 5, 10, 25];
    const dp = [1].concat(Array(n).fill(0));
    for (let j = 0; j < coins.length; j++) {
        for (let i = 1; i <= n; i++) {
            if (i - coins[j] >= 0) dp[i] = dp[i] + dp[i - coins[j]];
        }
    }
    return dp[n] % 1000000007;
};

/** 爆栈
* @param {number} n
* @return {number}
*/
var waysToChange = function(n) {
    const dir = [1, 5, 10, 25];
    let res = 0;
    function dfs(curSum, index) {
        if (curSum > n) return;
        if (curSum === n) {
            res++;
            return;
        }
        for(let i = index; i < 4; i++) dfs(curSum + dir[i], i);
    }
    dfs(0, 0);
    return res % 1000000007;
};
```
#### [139. 单词拆分](https://leetcode-cn.com/problems/word-break/)
![image.png](https://pic.leetcode-cn.com/c8c4b615da0c064c18f7939f4aad01a606ec9a0ccd0a6f1401569fa7eee2f047-image.png)

```js
        /** 回溯法超时
        * @param {string} s
        * @param {string[]} wordDict
        * @return {boolean}
        */
        var wordBreak = function(s, wordDict) {
            let res = false;
            function backTrace(i) {
                if(res) return;
                if (i === s.length) res = true;
                else if(i < s.length)
                    wordDict.filter(str => str === s.substr(i, str.length))
                        .forEach(str => backTrace(i + str.length));
            }
            backTrace(0);
            return res;
        };

        /** 背包问题dp
        * @param {string} s
        * @param {string[]} wordDict
        * @return {boolean}
        */
        var wordBreak = function(s, wordDict) {
            const dp = [];
            dp[0] = true;
            for(let i = 1; i <= s.length; i++) {
                wordDict.forEach(str => {
                    let temp = i - str.length;
                    if (dp[temp] && s.substring(temp, i) === str) dp[i] = true;
                })
            }
            return !!dp[s.length];
        };
```
#### [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)
![截屏2020-04-25 下午5.59.57.png](https://pic.leetcode-cn.com/a124ad8e24b5c8e1404e9b896d920b5505b8a26a5e59c18800a57f7f8c59ec00-%E6%88%AA%E5%B1%8F2020-04-25%20%E4%B8%8B%E5%8D%885.59.57.png)

```js
/** 回溯法
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let last = Math.pow(n, 0.5);
    if (parseInt(last) === last) return 1;
    else last = parseInt(last);
    let res = Infinity;
    function backTrace(i, sum, num) {
        if (num > 4) return; // 4平方数定理，超过4的解肯定不符合要求
        if (!sum) {
            res = Math.min(res, num);
            return;
        }
        for (let j = i; j > 0; j--) {
            const ji = j * j;
            if (ji > sum) continue;
            backTrace(j, sum - ji, num + 1);
        }
    }
    backTrace(last, n, 0);
    return res;
};

/** dp
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        let last = Math.pow(i, 0.5);
        if (parseInt(last) === last) {
            dp[i] = 1;
            continue;
        }
        let min = Infinity;
        for(let j = 1; j <= last; j++) {
            const temp = dp[i - j * j];
            if (temp === 1) {
                min = 1;
                break;
            }
            else min = Math.min(temp, min);
        }
        dp[i] = min + 1;
    }
    return dp[n];
};
```

#### [377. 组合总和 Ⅳ](https://leetcode-cn.com/problems/combination-sum-iv)
![截屏2020-04-25 下午6.58.25.png](https://pic.leetcode-cn.com/b1e62a4101f18de8b075030fe7a63786fe27a1bd0d45ed8fef7bde7fb86542bc-%E6%88%AA%E5%B1%8F2020-04-25%20%E4%B8%8B%E5%8D%886.58.25.png)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(candidates, target) {
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        dp[i] = 0;
        candidates.forEach(val => {
            let temp = i - val;
            if (!temp) dp[i] += 1;
            else if (temp > 0 && temp < i) dp[i] += dp[temp];
        });
    }
    return dp[target];
};
```
#### [518. 零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/)
![截屏2020-04-27 上午12.22.44.png](https://pic.leetcode-cn.com/3a8036e06efbc7b26810b257d3c3c031675f14bcb6d3c9d271d4407efdf74ba1-%E6%88%AA%E5%B1%8F2020-04-27%20%E4%B8%8A%E5%8D%8812.22.44.png)

```js
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let j = 0; j < coins.length; j++) {
        for(let i = 1; i <= amount; i++) {
            let temp = i - coins[j];
            dp[i] += temp < 0 ? 0 : dp[temp];
        }
    }
    return dp[amount];
};
```

#### [1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence)

```js
        /**
        * @param {string} text1
        * @param {string} text2
        * @return {number}
        */
        var longestCommonSubsequence = function(text1, text2) {
            const dp = [];
            for(let i = 0; i <= text1.length; i++) {
                dp[i] = [];
                for(let j = 0; j <= text2.length; j++) {
                    if (!i || !j) dp[i][j] = 0;
                    else if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;    
                    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
            return dp[text1.length][text2.length];
        };
```

#### [583. 两个字符串的删除操作](https://leetcode-cn.com/problems/delete-operation-for-two-strings/)
![image.png](https://pic.leetcode-cn.com/4b5cd66901e03b7749f1fa6d45dc516c7f283bed3c08cfc7d0fee5b62f50335c-image.png)

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length, n = word2.length;
    if (!word1 || !word2) return m + n;
    const record = [];
    for (let i = 0; i <= m; i++) {
        record[i] = [];
        for (let j = 0; j <= n; j++) {
            if (!i || !j) record[i][j] = 0;
            else if (word1[i - 1] === word2[j - 1]) record[i][j] = record[i - 1][j - 1] + 1;
            else record[i][j] = Math.max(record[i - 1][j], record[i][j - 1]);
        }
    }
    return m + n - 2 * record[m][n];
};
```

#### [96. 不同的二叉搜索树](https://leetcode-cn.com/problems/unique-binary-search-trees/)

```js
        /**
         * @param {number} n
         * @return {number}
         */
        var numTrees = function(n) {
            const dp = [];
            dp[0] = 1;
            dp[1] = 1;
            for(let i = 2; i <= n; i++) {
                dp[i] = 0;
                for(let j = 0; j < i; j++) {
                    dp[i] += dp[j] * dp[i - 1 - j]; 
                }
            }
            return dp[n];
        };
```

#### [面试题63. 股票的最大利润](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/)
```js
        /**
        * @param {number[]} prices
        * @return {number}
        */
        var maxProfit = function(prices) {
            let unhold = 0, hold: -prices[0], res = 0;
            for(let i = 1; i < prices.length; i++) {
                [unhold, hold] = [Math.max(unhold, hold + prices[i]), Math.max(-prices[i], hold)];
                res = Math.max(res, unhold);
            }
            return res;
        };
```

#### [714. 买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
![截屏2020-05-10 下午12.14.55.png](https://pic.leetcode-cn.com/b37095f5c8d0e98cca8a04aef52efe0ca9c74f77dd6a9f08274cf87a59d34ac7-%E6%88%AA%E5%B1%8F2020-05-10%20%E4%B8%8B%E5%8D%8812.14.55.png)

```js
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let hold = -prices[0], unhold = 0;
    for(let i = 1; i < prices.length; i++) {
        [hold, unhold] = [
            Math.max(hold, unhold - prices[i]),
            Math.max(hold + prices[i] - fee, unhold)
        ];
    }
    return unhold;
};
```

#### [343. 整数拆分](https://leetcode-cn.com/problems/integer-break)
![image.png](https://pic.leetcode-cn.com/ee73241d3dd4ba32247b722fd7b5bbd61243f738f57b086146521a894fc2a53c-image.png)
```js
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 1;
    for(let i = 3; i <= n; i++) {
        dp[i] = 0;
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(dp[i - j], i - j) * j);
        }
    }
    return dp[n];
};
```

#### [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber)

Accepted
69/69 cases passed (88 ms)
Your runtime beats 10.51 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (37.8 MB)

```js
        /*
        * @lc app=leetcode.cn id=198 lang=javascript
        *
        * [198] 打家劫舍
        */

        // @lc code=start
        /**
         * @param {number[]} nums
         * @return {number}
         */
        var rob = function(nums) {
            let hold = nums[0] || 0, unhold = 0;
            for(let i = 1; i < nums.length; i++) {
                [hold, unhold]  = [
                    Math.max(unhold + nums[i], hold),
                    Math.max(unhold, hold)
                ];
            }
            return Math.max(hold, unhold);
        };
```

#### [70. 爬楼梯](https://leetcode-cn.com/problems/house-robber)

45/45 cases passed (84 ms)
Your runtime beats 14.94 % of javascript submissions
Your memory usage beats 24.05 % of javascript submissions (37.7 MB)

```js
        /*
        * @lc app=leetcode.cn id=70 lang=javascript
        *
        * [70] 爬楼梯
        */

        // @lc code=start
        /**
         * @param {number} n
         * @return {number}
         */
        var climbStairs = function(n) {
            let dp = [1, 2];
            for (let i = 2; i < n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
            }
            return dp[n - 1];
        };
```

## 十四、图论
### 14.1 基本模板

#### 1) 图的遍历
> - BFS

```js
        var BFS = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = [];
            edges.forEach(([a, b]) => { // 记录相邻节点
                record[a].push(b);
                record[b].push(a);
            })
            const flag = [];
            const pre = {}; // 记录父节点
            const deep = {}; // 记录深度
            const root = 1;
            const queue = [root];
            deep[root] = 1;7
            pre[root] = null;
            let i = queue.length;
            const res = []; // 记录遍历结果
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(front === undefined) continue;
                    flag[front] = 1;
                    res.push(front);
                    const children = record[front];
                    children.forEach(child => {
                        if(!flag[child]) {
                            flag[child] = 1;
                            deep[child] = deep[front] + 1;
                            pre[child] = front;
                            queue.push(child);
                        }
                    })
                    flag[front] = -1;
                }
                i = queue.length;
            }
            const paths = {}; // 记录路径
            for(let i = 0; i < n; i++) {
                paths[i] = [];
                let j = i;
                while(j !== root) {
                    paths[i].unshift(j);
                    j = pre[j];
                }
                paths[i].unshift(root);
            }
            console.log(res, paths);
        };
```
> - DFS

```js
        var DFS = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = [];
            edges.forEach(([a, b]) => {
                record[a].push(b);
                record[b].push(a);
            })
            console.log(record);
            const flag = [];
            const pre = {}; // 记录父节点
            const deep = {}; // 记录深度
            const res = []; // 记录遍历结果
            const root = 0;
            for(let i = root; i < n; i++) {
                if(flag[i] === undefined) dfsVisit(i, null, 0);
            }
            function dfsVisit(root, pai, d) {
                if(flag[root] === -1) return;
                flag[root] = 1;
                res.push(root);
                pre[root] = pai;
                deep[root] = d + 1;
                record[root].forEach(child => {
                    if(!flag[child]) {
                        dfsVisit(child, root, deep[root]);
                    }
                })
                flag[root] = -1;
            }
            const paths = {}; // 记录
            for(let i = 0; i < n; i++) {
                paths[i] = [];
                let j = i;
                while(j !== root) {
                    paths[i].unshift(j);
                    j = pre[j];
                }
                paths[i].unshift(root);
            }
            console.log(res, paths);
        };
```
> - 邻接表

```js
        /** 邻接表的DFS遍历
        * @param {number[][]} M
        * @return {number}
        */
        var findCircleNum = function(M) {
            const isVisited = [];
            let res = 0;
            function mapDFS(i) {
                for (let j = 0; j < M.length; j++) {
                    if(M[i][j] && !isVisited[j]) {
                        isVisited[j] = true;
                        mapDFS(j);
                    }
                }
            }
            for(let i = 0; i < M.length; i++) {
                if(!isVisited[i]) {
                    isVisited[i] = true;
                    mapDFS(i);
                    res++;
                }
            }
            return res;
        }
```
#### 2) 有向图是否存在环
> - 拓扑排序

```js
        function topology(N, arr) {
            const indegree = new Array(N).fill(0);
            const record = {};
            arr.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
                indegree[next]++; // 入度计算
            })
            const queue = indegree.reduce((t, i, index) => {
                !i && t.push(index);
                return t;
            }, []); // 寻找起点
            const res = [];
            while(queue.length) {
                const front = queue.shift();
                res.push(front);
                record[front] && record[front].forEach(child => {
                    indegree[child]--;
                    if(!indegree[child]) queue.push(child);
                })
            }
            return res.length === N;
        }
```
> - DFS递归版本

```js
        /**
        * @param {number} numCourses
        * @param {number[][]} prerequisites
        * @return {boolean}
        */
        var canFinish = function(numCourses, prerequisites) {
            const record = {};
            prerequisites.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
            })
            let flag = []; // 标志位表示该课程是否被遍历 -1: 上一个DFS被遍历；0: 没有被遍历；1:本轮已被遍历
            for(let i = 0; i < numCourses; i++) {
                if(isCircle(i)) return false;
            }
            function isCircle(course) {
                if(flag[course] === 1) return true;
                if(flag[course] === -1) return false;
                flag[course] = 1;
                if(record[course] && 
                    record[course].some(child => isCircle(child)))
                    return true;
                flag[course] = -1;
                return false;
            }
            return true;
        };
```
> - DFS非递归版本

```js
        function canFinish(N, arr) {
            const indegree = new Array(N).fill(0);
            const record = {};
            arr.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
                indegree[next]++; // 入度计算
            })
            const stack = indegree.reduce((t, i, index) => {
                !i && t.push(index);
                return t;
            }, []); // 寻找起点
            const res = [];
            const flag = [];
            while(stack.length) {
                const front = stack.pop();
                res.push(front);
                flag[front] = 1;
                const nexts = record[front];
                if(nexts) {
                    const len = nexts.length;
                    for(let j = 0; j < len; j++) {
                        if(flag[nexts[j]] === 1) return false;
                        if(flag[nexts[j]] === -1) continue;
                        if(!--indegree[nexts[j]]) stack.push(nexts[j]);
                    }
                }
                flag[front] = -1;
            }
            return res.length === N;
        }
```
#### 3) 构造无向图
> - 暴力

```js
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            let items = Object.keys(record).map(i => +i);
            let queues = items.filter(key => record[key].size === 1);
            let res;
            while(queues.length) {
                res = queues;
                items = Object.keys(record).map(i => +i);
                queues = items.filter(key => record[key].size === 1); // 筛选size === 1的节点和删除节点两个动作需要分开
                queues.forEach(key => {
                    const next = record[Array.from(record[key])[0]];
                    if(next) next.delete(key);
                    delete record[key];
                })
            }
            return items.length ? items : res;
        };
```
> - BFS出度

```js
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            const outDegree = [];
            for(let i = 0; i < n; i++) outDegree[i] = record[i].size;
            let queues = outDegree.reduce((t, i, index) => {
                i === 1 && t.push(index);
                return t;
            }, [])
            let res = [0];
            let i = queues.length;
            while(i) {
                res = queues.slice(0); // 记录倒数第2个结果
                while(i--) {
                    const front = queues.shift();
                    outDegree[front]--;
                    const next = [...record[front]][0];
                    if(next !== undefined) {
                        record[next].delete(front);
                        if(--outDegree[next] === 1) queues.push(next);
                    }
                }
                i = queues.length;
            }
            return res;
        };
```
#### 4) 并查集
> - 主要实现`union`连通，`find`寻找根结点，`count`集的数量三个API
```js
        /** 并查集
        * @param {number[][]} M
        * @return {number}
        */

        var findCircleNum = function(M) {
            let count = M.length, parent = [];
            function find(i) {
                while(parent[i] !== undefined) i = parent[i];
                return i;
            }
            function union(i, j) {
                const rootI = find(i), rootJ = find(j);
                if (rootI === rootJ) return;
                parent[rootJ] = rootI;
                count--;
            }
            for(let i = 0; i < M.length; i++) {
                for(let j = 0; j <= i; j++) {
                    if (M[i][j]) union(i, j);
                }
            }
            return count;
        }
```
### 14.2 题目
#### [207. 课程表](https://leetcode-cn.com/problems/course-schedule/submissions/)
```js
        /**
         - @param {number} numCourses
         - @param {number[][]} prerequisites
         - @return {boolean}
         */
        var canFinish = function(numCourses, prerequisites) {
            const indegree = new Array(numCourses).fill(0);
            const record = {};
            prerequisites.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
                indegree[next]++; // 入度计算
            })
            const queue = indegree.reduce((t, i, index) => {
                !i && t.push(index);
                return t;
            }, []);
            const res = [];
            while(queue.length) {
                const front = queue.shift();
                res.push(front);
                record[front] && record[front].forEach(child => {
                    indegree[child]--;
                    if(!indegree[child]) queue.push(child);
                })
            }
            return res.length === numCourses;
        };
```

#### [310. 最小高度树](https://leetcode-cn.com/problems/minimum-height-trees/)
> - js 一层层剥开暴力解

```js
        /**
        * @param {number} n
        * @param {number[][]} edges
        * @return {number[]}
        */
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            let items = Object.keys(record).map(i => +i);
            let queues = items.filter(key => record[key].size === 1);
            let res;
            while(queues.length) {
                res = queues;
                items = Object.keys(record).map(i => +i);
                queues = items.filter(key => record[key].size === 1);
                queues.forEach(key => {
                    const next = record[Array.from(record[key])[0]];
                    if(next) next.delete(key);
                    delete record[key];
                })
            }
            return items.length ? items : res;
        };
```
> - BFS出度

```js
        /**
        * @param {number} n
        * @param {number[][]} edges
        * @return {number[]}
        */
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            const outDegree = [];
            for(let i = 0; i < n; i++) outDegree[i] = record[i].size;
            let queues = outDegree.reduce((t, i, index) => {
                i === 1 && t.push(index);
                return t;
            }, [])
            let res = [0];
            let i = queues.length;
            while(i) {
                res = queues.slice(0); // 记录倒数第2个结果
                while(i--) {
                    const front = queues.shift();
                    outDegree[front]--;
                    const next = [...record[front]][0];
                    if(next !== undefined) {
                        record[next].delete(front);
                        if(--outDegree[next] === 1) queues.push(next);
                    }
                }
                i = queues.length;
            }
            return res;
        };
```
#### [547. 朋友圈](https://leetcode-cn.com/problems/friend-circles/)
![截屏2020-04-19 下午2.12.14.png](https://pic.leetcode-cn.com/4ef2c248015516ceb3836045e91c4324bbb7a96a20db7ad9a54e2b3bd9050394-%E6%88%AA%E5%B1%8F2020-04-19%20%E4%B8%8B%E5%8D%882.12.14.png)

```js
        /** 并查集+路径压缩
        * @param {number[][]} M
        * @return {number}
        */

        var findCircleNum = function(M) {
            let count = M.length, parent = [], rank = Array(M.length).fill(0);
            function find(i) {
                while(parent[i] !== undefined) i = parent[i];
                return i;
            }
            function union(i, j) {
                const rootI = find(i), rootJ = find(j);
                if (rootI === rootJ) return;
                if (rank[rootI] > rank[rootJ]) {
                    parent[rootJ] = rootI;
                    rank[rootI]++;
                }
                else {
                    parent[rootI] = rootJ;
                    rank[rootJ]++;
                }
                count--;
            }
            for(let i = 0; i < M.length; i++) {
                for(let j = 0; j <= i; j++) {
                    if (M[i][j]) union(i, j);
                }
            }
            return count;
        }
        /** 邻接表的DFS遍历
        * @param {number[][]} M
        * @return {number}
        */

        var findCircleNum = function(M) {
            const isVisited = [];
            let res = 0;
            function mapDFS(i) {
                for (let j = 0; j < M.length; j++) {
                    if(M[i][j] && !isVisited[j]) {
                        isVisited[j] = true;
                        mapDFS(j);
                    }
                }
            }
            for(let i = 0; i < M.length; i++) {
                if(!isVisited[i]) {
                    isVisited[i] = true;
                    mapDFS(i);
                    res++;
                }
            }
            return res;
        }
```

## 十五、数学问题
### 15.1 基本模板
        
#### 1) 最大公约数
> - 

```js
        function(x, y) {
            while(y) [x, y] = [y, x % y];
            return x;
        }
```
### 15.2 题目
#### [365. 水壶问题](https://leetcode-cn.com/problems/water-and-jug-problem/)
```js
        var canMeasureWater = function(x, y, z) {
            if(x + y < z) return false;
            while(y) [x, y] = [y, x % y];
            return !(z % x);
        };
```
#### [264. 丑数 II](https://leetcode-cn.com/problems/ugly-number-ii/submissions/)
```js
        var nthUglyNumber = function(n) {
            let i2 = 0,
                i3 = 0,
                i5 = 0;
            let dp = [1];
            for (let i = 1; i < n; i++) {
                let min = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
                if (min === dp[i2] * 2) i2++;
                if (min === dp[i3] * 3) i3++;
                if (min === dp[i5] * 5) i5++;
                dp.push(min);
            }
            return dp[n-1];
        };
```
#### [313. 超级丑数](https://leetcode-cn.com/problems/super-ugly-number/submissions/)
```js
        /**
         * @param {number} n
         * @param {number[]} primes
         * @return {number}
         */
        var nthSuperUglyNumber = function(n, primes) {
            const res = [1];
            const points = new Array(primes.length).fill(0);
            let min;
            for(let i = 1; i < n; i++) {
                const map = primes.map((prime, index) => res[points[index]] * prime);
                min = Math.min(...map);
                primes.forEach((prime, index) => {
                    if(map[index] === min) points[index]++;
                })
                res.push(min);
            }
            return res[n - 1];
        };
```
#### [面试题62. 圆圈中最后剩下的数字](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)
```js
        /**
         - @param {number} n
         - @param {number} m
         - @return {number}
         */
        var lastRemaining = function(n, m) {
            const arr = [];
            for(let i = 0; i < n; i++) arr.push(i);
            let head = 0;
            while(arr.length > 1) {
                head = (head + m - 1) % arr.length;
                arr.splice(head, 1);
            }
            return arr[0];
        };
```
#### [面试题44. 数字序列中某一位的数字](https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/)
```js
        /**
         * @param {number} n
         * @return {number}
         */
        var findNthDigit = function(n) {
            if (n < 10) return n;
            let sum = 10, i = 1;
            while(n > sum) {
                n -= sum;
                sum = 9 * Math.pow(10, i) * ++i;
            }
            return (sum / 9 / i + parseInt(n / i) + '')[n % i];
        }
```
#### [190. 颠倒二进制位](https://leetcode-cn.com/problems/reverse-bits/solution/190-dian-dao-er-jin-zhi-wei-by-alexer-660/)
```js
        /** 常规解法
         * @param {number} n - a positive integer
         * @return {number} - a positive integer
         */
        var reverseBits = function(n) {
            return parseInt(n.toString(2).padStart(32, 0).split('').reverse().join(''), 2);
        };

        /** 位运算
         * @param {number} n - a positive integer
         * @return {number} - a positive integer
         */
        var reverseBits = function(n) {
            let res = 0;
            while(let i = 0; i < 32; i++) {
                res = res << 1 + n & 1;
                n >= 1;
            }
            return res;
        };
```
#### [201. 数字范围按位与](https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/)
```js
        /**
         * @param {number} m
         * @param {number} n
         * @return {number}
         */
        var rangeBitwiseAnd = function(m, n) {
            let res = m;
            if(n >> 1 > m) return 0;
            for(let i = m; i <= n; i++) {
                if(!res) return 0;
                res &= i;
            }
            return res;
        };
```
#### [231. 2的幂](https://leetcode-cn.com/problems/power-of-two/)
```js
        /**
         * @param {number} n
         * @return {boolean}
         */
        var isPowerOfTwo = function(n) {
            return n > 0 && (n & (n - 1)) === 0;
        };
```
#### [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)
![image.png](https://pic.leetcode-cn.com/adabe280172d8c88e3b633d31aaccec3add21900e10574fce8a3a113280e4a86-image.png)
```js
        /**
         * @param {number} x
         * @param {number} n
         * @return {number}
         */
        var myPow = function(x, n) {
            if (!x) return 0;
            if (x === 1) return 1;
            if (x === -1) return (n & 1) ? -1 : 1;
            if (n == 2147483647) return 0;
            if (n == -2147483648) return x === 2 ? 0 : 1;
            if (n < 0) {
                x = 1 / x;
                n = -n;
            }
            let res = 1;
            while(n) {
                if (n & 1) res *= x;
                x *= x;
                n >>= 1;
            }
            return res;
        }
```

#### [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
![image.png](https://pic.leetcode-cn.com/adabe280172d8c88e3b633d31aaccec3add21900e10574fce8a3a113280e4a86-image.png)
```js
        /** 二分法
         * @param {number} x
         * @return {number}
         */
        var mySqrt = function(x) {
            // return parseInt(Math.pow(x, 0.5), 10);
            let l = 0, r = x, mid, sum;
            while(l <= r) {
                mid = (l + r) >> 1;
                sum = mid * mid;
                if (sum === x) return mid;
                else if (sum > x) r = mid - 1;
                else l = mid + 1;
            }
            return r;
        };
```
#### [1262. 可被三整除的最大和](https://leetcode-cn.com/problems/greatest-sum-divisible-by-three/)
![image.png](https://pic.leetcode-cn.com/59f3e1cbc983f30ff46efe98d061044b6b103a1c9f4d44d5874b2d7689a2b029-image.png)

```js
        /** 回溯
        * @param {number[]} nums
        * @return {number}
        */
        var maxSumDivThree = function(nums) {
            let res = 0;
            function brackTrace(i, sum) {
                if (!(sum % 3)) res = Math.max(res, sum);
                if (i === nums.length) return;
                for (let j = i; j < nums.length; j++) {
                    brackTrace(j + 1, sum + nums[j]);
                } 
            }
            brackTrace(0, 0);
            return res;
        };
        // 数学法
        var maxSumDivThree = function(arr) {
            const arr1 = arr.filter(item => item % 3 === 1).sort((a, b) => a - b);
            const arr2 = arr.filter(item => item % 3 === 2).sort((a, b) => a - b);
            let sum = arr.reduce((t, i) => t + i, 0);
            if (sum % 3 === 0) return sum;
            else if (sum % 3 === 1) {
                sum = Math.max(sum - arr1[0], sum - arr2[0] - arr2[1] || 0);
            } else {
                sum = Math.max(sum - arr2[0], sum - arr1[0] - arr1[1] || 0);
            }
            return sum;
        };
```

#### [950. 按递增顺序显示卡牌](https://leetcode-cn.com/problems/reveal-cards-in-increasing-order/)

![image.png](https://pic.leetcode-cn.com/3d47fe9886f4dead7d81be38e649720900adbd908626473760e9ed6a71209c2b-image.png)

```js
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    if (!deck.length) return [];
    deck.sort((a, b) => a - b);
    const res = [deck.pop()];
    while(deck.length) {
        res.unshift(res.pop());
        res.unshift(deck.pop());
    }
    return res;
};
```

## 十六、设计问题
### 16.1 基本模板

### 16.2 题目
#### [355. 设计推特](https://leetcode-cn.com/problems/design-twitter)

```js
        /**
        * Initialize your data structure here.
        */
        var Twitter = function() {
            this.tweetTime = 0;
            this.follows = {}; // 映射
            this.tweets = {}; // 用户推文
        };

        /**
        * Compose a new tweet. 
        * @param {number} userId 
        * @param {number} tweetId
        * @return {void}
        */
        Twitter.prototype.postTweet = function(userId, tweetId) {
            if(!this.tweets[userId]) this.tweets[userId] = [];
            const tweetTime = this.tweetTime++;
            this.tweets[userId].push({
                tweetId,
                createdTime: tweetTime
            });
        };

        /**
        * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
        * @param {number} userId
        * @return {number[]}
        */
        Twitter.prototype.getNewsFeed = function(userId) { 
            const allId = Array.from(this.follows[userId] || {});
            allId.push(userId);
            const sortedArray = allId.reduce((t, id) => t.concat(this.tweets[id]), [])
            .sort((a, b) => b.createdTime - a.createdTime)
            .map(item => item.tweetId)
            return Array.from(new Set(sortedArray)).slice(0, 10);
        };

        /**
        * Follower follows a followee. If the operation is invalid, it should be a no-op. 
        * @param {number} followerId 
        * @param {number} followeeId
        * @return {void}
        */
        Twitter.prototype.follow = function(followerId, followeeId) {
            if (!this.follows[followerId]) this.follows[followerId] = new Set();
            this.follows[followerId].add(followeeId);
        };

        /**
        * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
        * @param {number} followerId 
        * @param {number} followeeId
        * @return {void}
        */
        Twitter.prototype.unfollow = function(followerId, followeeId) {
            if (!this.follows[followerId]) this.follows[followerId] = new Set();
            this.follows[followerId].delete(followeeId);
        };

        /**
        * Your Twitter object will be instantiated and called as such:
        * var obj = new Twitter()
        * obj.postTweet(userId,tweetId)
        * var param_2 = obj.getNewsFeed(userId)
        * obj.follow(followerId,followeeId)
        * obj.unfollow(followerId,followeeId)
        */
```

#### [460. LFU缓存](https://leetcode-cn.com/problems/lfu-cache/)

```js
        /**
         * @param {number} capacity
         */
        var LFUCache = function(capacity) {
            this.record = {};
            this.capacity = capacity;
            this.numMap = {};
            this.stack = [];
            this.reOrder = function(key) {
                let i = this.stack.indexOf(key);
                while (this.numMap[this.stack[i]] >= this.numMap[this.stack[i - 1]]) {
                    [this.stack[i], this.stack[i - 1]] = [this.stack[i - 1], this.stack[i]];
                    i--;
                }
            }
        };

        /** 
         * @param {number} key
         * @return {number}
         */
        LFUCache.prototype.get = function(key) {
            if (this.record[key] === undefined) return -1;
            this.numMap[key]++;
            this.reOrder(key);
            return this.record[key];
        };

        /** 
         * @param {number} key 
         * @param {number} value
         * @return {void}
         */
        LFUCache.prototype.put = function(key, value) {
            if (!this.capacity) return;
            if (this.record[key] !== undefined) this.numMap[key]++;
            else {
                if (this.stack.length >= this.capacity) {
                    let lowFrequencestKey = this.stack.pop();
                    delete this.record[lowFrequencestKey];
                    delete this.numMap[lowFrequencestKey];
                }
                this.stack.push(key);
                this.numMap[key] = 1;
            }
            this.reOrder(key);
            this.record[key] = value;
        };

        /**
         * Your LFUCache object will be instantiated and called as such:
         * var obj = new LFUCache(capacity)
         * var param_1 = obj.get(key)
         * obj.put(key,value)
         */
```

#### [146. LRU缓存机制](https://leetcode-cn.com/problems/lru-cache/)

```js
        /**
         * @param {number} capacity
         */
        var LRUCache = function(capacity) {
            this.orderMap = new Map();
            this.capacity = capacity;
        };

        /** 
         * @param {number} key
         * @return {number}
         */
        LRUCache.prototype.get = function(key) {
            if(!this.orderMap.has(key)) return -1;
            let value = this.orderMap.get(key);
            this.orderMap.delete(key);
            this.orderMap.set(key, value);
            return value;
        };

        /** 
         * @param {number} key 
         * @param {number} value
         * @return {void}
         */
        LRUCache.prototype.put = function(key, value) {
            if (this.orderMap.has(key)) this.orderMap.delete(key);
            else if(this.orderMap.size >= this.capacity) this.orderMap.delete(this.orderMap.keys().next().value);
            this.orderMap.set(key, value);
        };

        /**
         * Your LRUCache object will be instantiated and called as such:
         * var obj = new LRUCache(capacity)
         * var param_1 = obj.get(key)
         * obj.put(key,value)
         */
```

